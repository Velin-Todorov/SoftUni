from project.dough import Dough
from project.topping import Topping


class Pizza:
    def __init__(self, name: str, dough: Dough, topping_capacity: int):
        self.name = name
        self.dough = dough
        self.topping_capacity = topping_capacity
        self.toppings = {}

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        if not value:
            raise ValueError('The name cannot be an empty string')
        self.__name = value

    @property
    def dough(self):
        return self.__dough

    @dough.setter
    def dough(self, value):
        if value is None:
            raise ValueError('You should add dough to the pizza')
        self.__dough = value

    @property
    def topping_capacity(self):
        return self.__topping_capacity

    @topping_capacity.setter
    def topping_capacity(self, value):
        if value <= 0:
            raise ValueError("The topping's capacity cannot be less or equal to zero")
        self.__topping_capacity = value

    def add_topping(self, topping: Topping):

        if len(self.toppings) >= self.topping_capacity:
            raise ValueError('Not enough space for another topping')

        if topping in self.toppings.keys():
            self.toppings[topping] += topping.weight

        self.toppings[topping] = topping.weight

    def calculate_total_weight(self):
        toppings_weight = 0
        for k, v in self.toppings.items():
            toppings_weight += v

        pizza_weight = toppings_weight + self.dough.weight

        return pizza_weight
