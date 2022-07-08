from project.animal import Animal


class Dog(Animal):
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def __repr__(self):
        return f'This is {self.name}. {self.name} is a {self.age} year old {self.gender} {self.__class__.__name__}'

    @staticmethod
    def make_sound():
        return 'Woof!'


dog = Dog("Rocky", 3, "Male")
print(dog.make_sound())
print(dog)