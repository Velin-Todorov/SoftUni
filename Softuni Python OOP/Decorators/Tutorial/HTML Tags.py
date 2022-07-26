import functools


def tags(tag):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args):
            result = ''.join(str(s) for s in func(*args))

            return f'<{tag}>{result}</{tag}>'

        return wrapper
    return decorator


@tags('p')
def join_strings(*args):
    return "".join(args)
print(join_strings("Hello", " you!"))