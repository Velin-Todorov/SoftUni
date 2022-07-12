"""

The purpose of this code is to recursively
generate a Fibonacci sequence given an input. This code
will use memoization.

"""


def memoize(func):
    cache = {}

    def memoized_func(*args):
        if args in cache:
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result

    return memoized_func


@memoize
def recursive_fibonacci(n):
    if n == 0 or n == 1:
        return 1

    return recursive_fibonacci(n - 1) + recursive_fibonacci(n - 2)


n = int(input())
print(recursive_fibonacci(n))

