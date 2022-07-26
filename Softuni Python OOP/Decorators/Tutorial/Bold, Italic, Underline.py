import functools


def make_bold(func):

    @functools.wraps(func)
    def wrapper(*args):
        result = func(*args)
        return '<b>' + result + '</b>'

    return wrapper


def make_italic(func):

    @functools.wraps(func)
    def wrapper(*args):
        result = func(*args)
        return '<i>' + result + '</i>'

    return wrapper


def make_underline(func):

    @functools.wraps(func)
    def wrapper(*args):
        result = func(*args)
        return '<u>' + result + '</u>'

    return wrapper


@make_bold
@make_italic
@make_underline
def greet_all(*args):
    return f"Hello, {', '.join(args)}"

print(greet_all("Peter", "George"))
