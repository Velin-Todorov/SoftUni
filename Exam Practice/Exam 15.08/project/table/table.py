from abc import ABC, abstractmethod

from project.baked_food.baked_food import BakedFood
from project.drink.drink import Drink


class Table(ABC):

    def __init__(self, table_number: int, capacity: int):
        self.table_number = table_number
        self.capacity = capacity
        self.food_orders = []
        self.drink_orders = []
        self.number_of_people = 0
        self.is_reserved = False  # becomes True if the table is reserved

    def reserve(self, number_of_people: int):
        self.is_reserved = True
        self.number_of_people += number_of_people

    def order_food(self, baked_food: BakedFood):
        self.food_orders.append(baked_food)

    def order_drink(self, drink: Drink):
        self.drink_orders.append(drink)

    def get_bill(self):
        bill = 0
        cost_drinks = [drink.price for drink in self.drink_orders]
        cost_food = [food.price for food in self.food_orders]
        bill = sum(cost_drinks) + sum(cost_food)

        return bill

    def clear(self):
        self.food_orders.clear()
        self.drink_orders.clear()
        self.number_of_people = 0
        self.is_reserved = False

    @abstractmethod
    def free_table_info(self):
        pass

