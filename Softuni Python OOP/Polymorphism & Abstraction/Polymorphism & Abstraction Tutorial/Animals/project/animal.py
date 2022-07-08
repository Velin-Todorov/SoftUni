import abc
from abc import ABC


class Animal(ABC):
    @abc.abstractmethod
    def __init__(self, name, age, gender):
        pass

    @abc.abstractmethod
    def __repr__(self):
        pass

    @staticmethod
    @abc.abstractmethod
    def make_sound():
        pass
