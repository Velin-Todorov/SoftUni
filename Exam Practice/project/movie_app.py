from user import User
from movie_specification.movie import Movie


class MovieApp:
    def __init__(self):
        self.movies_collection = []
        self.users_collection = []

    def register_user(self, username, age):
        user = User(username, age)

        for u in self.users_collection:
            if u.username == user.username:
                raise Exception('User already exists!')

        self.users_collection.append(user)
        return f'{username} registered successfully.'

    def upload_movie(self, username, movie: Movie):
        exists = [x.username for x in self.users_collection if x.username == username]

        if not exists:
            return 'This user does not exist!'

        elif movie in self.movies_collection:
            return f'Movie already added to the collection!'

        elif username != movie.owner.username:
            raise Exception(f'{username} is not the owner of the movie {movie.title}')

        self.movies_collection.append(movie)
        for u in self.users_collection:
            if u.username == username:
                u.movies_owned.append(movie)

        return f'{username} successfully added {movie.title} movie.'

    def edit_movie(self, username, movie: Movie, **kwargs):
        if movie not in self.movies_collection:
            raise Exception(f'The movie {movie.title} is not uploaded!')

        for u in self.users_collection:
            if u.username == username:
                if movie not in u.movies_owned:
                    raise Exception(f'{username} is not the owner of the movie {movie.title}!')

        for k, v in kwargs.items():
            setattr(movie, k, v)

        return f'{username} successfully edited {movie.title} movie.'

    def delete_movie(self, username, movie: Movie):
        if movie not in self.movies_collection:
            raise Exception(f'The movie {movie.title} is not uploaded!')

        for u in self.users_collection:
            if u.username == username:
                if movie not in u.movies_owned:
                    raise Exception(f'{username} is not the owner of the movie {movie.title}!')
                else:
                    u.movies_owned.remove(movie)

        self.movies_collection.remove(movie)
        return f'{username} successfully deleted {movie.title} movie.'

    def like_movie(self, username, movie: Movie):

        for u in self.users_collection:
            if u.username == username:
                if movie in u.movies_owned:
                    raise Exception(f'{username} is the owner of the movie {movie.title}!')

                if movie in u.movies_liked:
                    raise Exception(f'{username} already liked the movie {movie.title}!')
                else:
                    u.movies_liked.append(movie)

        movie.likes += 1

        return f'{username} liked {movie.title} movie.'

    def dislike_movie(self, username, movie: Movie):
        for u in self.users_collection:
            if u.username == username:
                if movie not in u.movies_liked:
                    raise Exception(f'{username} has not liked the movie {movie.title}!')

                else:
                    u.movies_liked.remove(movie)

        movie.likes -= 1
        return f'{username} disliked {movie.title} movie.'

    def display_movies(self):
        if not self.movies_collection:
            return f'No movies found.'

        sorted_movies = sorted(self.movies_collection, key=lambda kvpt: (-kvpt.year, kvpt.title))
        result = []
        for movie in sorted_movies:
            result.append(movie.details())
        return '\n'.join(result)

    def __str__(self):
        users = ''
        movies = ''
        if not self.users_collection:
            users = 'No users.'
        else:
            users = ", ".join([user.username for user in self.users_collection])

        if not self.movies_collection:
            movies = "No movies."
        else:
            movies = ", ".join([movie.title for movie in self.movies_collection])

        return f'All users: {users}\nAll movies: {movies}'
