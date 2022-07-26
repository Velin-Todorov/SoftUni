import functools


def even_parameters(func):

    @functools.wraps(func)
    def wrapper(*args):
        try:
            even_numbers = [x for x in args if x % 2 == 0]

            if len(even_numbers) == len(args):
                result = func(*args)
                return result
            else:
                return 'Please use only even numbers!'
        except:
            return 'Please use only even numbers!'

    return wrapper


@even_parameters
def multiply(*nums):
    result = 1
    for num in nums:
        result *= num
    return result

print(multiply(2, 4, 6, 8))
print(multiply(2, 4, 9, 8))