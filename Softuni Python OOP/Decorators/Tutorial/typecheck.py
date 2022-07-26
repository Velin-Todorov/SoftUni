import functools


def type_check(type_to_check):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args):
            check = [x for x in args if type(x) == type_to_check]
            result = func(*args)
            if len(args) == len(check):
                return result
            else:
                return f'Bad Type'
        return wrapper
    return decorator


@type_check(str)
def first_letter(word):
    return word[0]

print(first_letter('Hello World'))
print(first_letter(['Not', 'A', 'String']))
