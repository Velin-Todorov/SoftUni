from project.animals.animal import Mammal


class Mouse(Mammal):
    ALLOWED_FOODS = ['Vegetable', 'Fruit']
    WEIGHT_INCREASE = 0.1

    def __init__(self, name, weight, living_region):
        self.name = name
        self.weight = weight
        self.living_region = living_region

    def make_sound(self):
        return 'Squeak'


class Dog(Mammal):
    ALLOWED_FOODS = ['Meat']
    WEIGHT_INCREASE = 0.4

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'Woof!'


class Cat(Mammal):
    ALLOWED_FOODS = ['Meat', 'Vegetable']
    WEIGHT_INCREASE = 0.3

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'Meow'


class Tiger(Mammal):
    ALLOWED_FOODS = ['Meat']
    WEIGH_INCREASE = 1

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'ROAR!!!'