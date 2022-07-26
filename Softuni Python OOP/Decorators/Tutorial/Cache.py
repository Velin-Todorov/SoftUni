import functools


def cache(func):
    memo = {}

    @functools.wraps(func)
    def wrapper(n):

        result = func(n)
        if n not in memo:
            memo[n] = result
        return memo[n]

    wrapper.log = memo
    return wrapper

@cache
def fibonacci(n):

    if n < 2:
        return n

    else:
        return fibonacci(n-1) + fibonacci(n-2)


fibonacci(4)
print(fibonacci.log)