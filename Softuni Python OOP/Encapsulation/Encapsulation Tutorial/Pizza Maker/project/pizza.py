from project.dough import Dough
from project.topping import Topping


class Pizza:
    def __init__(self, name: str, dough: Dough, topping_capacity: int):
        self.name = name
        self.dough = dough
        self.topping_capacity = topping_capacity
        self.toppings = {}

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





