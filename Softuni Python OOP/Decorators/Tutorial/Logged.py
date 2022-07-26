import functools


def logged(func):

    @functools.wraps(func)
    def wrapper(*args):
        result = func(*args)
        return f'you called {func.__name__}{args}\nit returned {result}'

    return wrapper


@logged
def func(*args):
    return 3 + len(args)
print(func(4, 4, 4))