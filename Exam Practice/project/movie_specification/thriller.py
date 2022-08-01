from movie import Movie
from user import User


class Thriller(Movie):
    def __init__(self, title, year, owner: User, age_restriction):
        super().__init__(title, year, owner, age_restriction)

    @property
    def age_restriction(self):
        return self._age_restriction

    @age_restriction.setter
    def age_restriction(self, value):
        if value < 16:
            raise ValueError("Thriller movies must be restricted for audience under 16 years!")

        if not value:
            value = 16

        self._age_restriction = value

    def details(self):
        result = f'Thriller - Title:{self.title}, Year:{self.year}, Age restriction:{self._age_restriction}, Likes:{self.likes}, Owned by:{self.owner.username}'
        return result
