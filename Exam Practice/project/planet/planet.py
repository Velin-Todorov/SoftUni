class Planet:
    def __init__(self, name: str):
        self.name = name
        self.items = []

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):

        if not value or value == ' ':
            raise ValueError('Planet name cannot be empty strings or whitespaces!')

        self.__name = value


