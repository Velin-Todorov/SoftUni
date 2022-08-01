class User:

    def __init__(self, username: str, age: int):
        self.username = username
        self.age = age
        self.movies_liked = []
        self.movies_owned = []

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, value):
        if not value:
            raise ValueError('Invalid username')
        self._username = value

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 6:
            raise ValueError('Users under the age of 6 are not allowed')
        self._age = value

    def __str__(self):
        result = f"Username: {self._username}, Age: {self._age}\nLiked movies:\n"

        if not self.movies_liked:
            result += 'No movies liked.'

        result += '\n'.join(x.details() for x in self.movies_liked)

        result += 'Owned movies:\n'

        if not self.movies_owned:
            result += 'No movies owned.'

        result += '\n'.join(x.details() for x in self.movies_owned)

        return result

