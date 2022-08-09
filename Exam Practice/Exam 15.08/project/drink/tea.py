from project.drink.drink import Drink


class Tea(Drink):

    def __init__(self, name, portion, brand, price=2.50):
        super().__init__(name, portion, price, brand)

    def __repr__(self):
        return f'- {self.name} {self.brand} - {self.portion}ml - {self.price}lv'
