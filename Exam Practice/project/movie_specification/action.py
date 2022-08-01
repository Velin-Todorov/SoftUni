from movie_specification.movie import Movie
from user import User


class Action(Movie):
    def __init__(self, title, year, owner: User, age_restriction):
        super().__init__(title, year, owner, age_restriction)

    @property
    def age_restriction(self):
        return self._age_restriction

    @age_restriction.setter
    def age_restriction(self, value):
        if value < 12:
            raise ValueError("Action movies must be restricted for audience under 12 years!")

        if not value:
            value = 12

        self._age_restriction = value

    def details(self):
        result = f'Action - Title:{self.title}, Year:{self.year}, Age restriction:{self._age_restriction}, Likes:{self.likes}, Owned by:{self.owner.username}'
        return result

