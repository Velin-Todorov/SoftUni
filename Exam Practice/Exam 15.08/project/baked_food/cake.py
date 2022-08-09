from project.baked_food.baked_food import BakedFood


class Cake(BakedFood):

    def __init__(self, name, price, portion=245):
        super().__init__(name, portion, price)

    def __repr__(self):
        return f'- {self.name}: {self.portion}g - {self.price}lv'
