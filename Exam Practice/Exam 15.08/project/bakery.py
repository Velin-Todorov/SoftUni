from project.baked_food.bread import Bread
from project.baked_food.cake import Cake
from project.drink.tea import Tea
from project.drink.water import Water


class Bakery:
    def __init__(self, name: str):
        self.name = name
        self.food_menu = []
        self.drinks_menu = []
        self.tables_repository = []
        self.total_income = 0

    def check_if_food_exists(self, food_name):
        exists = [food.name for food in self.food_menu if food.name == food_name]

        if exists:
            return True
        else:
            return False

    def check_if_drink_exists(self, drink_name):
        exists = [drink.name for drink in self.drinks_menu if drink.name == drink_name]

        if exists:
            return True
        else:
            return False

    def create_a_bread_object(self, name, price):
        return Bread(name, price)

    def create_cake_object(self, name, price):
        return Cake(name, price)

    def create_tea_object(self, name, portion, brand):
        return Tea(name, portion, brand)

    def create_water_object(self, name, portion, brand):
        return Water(name, portion, brand)

    def check_if_table_free(self):
        pass

    def add_food(self, food_type: str, name: str, price: float):
        valid_food_types = ['Bread', 'Cake']

        if self.check_if_food_exists(name):
            return f'{food_type} {name} is already in the menu!'

        if food_type in valid_food_types:
            if food_type == 'Bread':
                bread = self.create_a_bread_object(name, price)
                self.food_menu.append(bread)
                return f'Added {name} ({food_type}) to the food menu'

            elif food_type == 'Cake':
                cake = self.create_cake_object(name, price)
                self.food_menu.append(cake)
                return f'Added {name} ({food_type}) to the food menu'
        return

    def add_drink(self, drink_type: str, name: str, portion: float, brand: str):
        valid_drink_types = ['Tea', 'Water']

        if self.check_if_drink_exists(name):
            return f'{drink_type} {name} is already in the menu!'

        if drink_type in valid_drink_types:
            if drink_type == 'Tea':
                tea = self.create_tea_object(name, portion, brand)
                self.drinks_menu.append(tea)
                return f'Added {name} ({drink_type}) to the drink menu'

            elif drink_type == 'Water':
                water = self.create_water_object(name, portion, brand)
                self.drinks_menu.append(water)
                return f'Added {name} ({drink_type}) to the drink menu'
        return

    def add_table(self, table_type: str, table_number: int, capacity: int):
        pass

    def reserve_table(self, number_of_people: int):
        pass

    def order_food(self, table_number, *args):
        pass

    def order_drink(self, table_number: int, *args):
        pass

    def leave_table(self, table_number: int):
        pass

    def get_free_tables_info(self):
        pass

    def get_total_income(self):
        pass
