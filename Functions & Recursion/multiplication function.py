def multiply(*args):
    result = 1
    for i in args:
        result *= i

    return result

print(multiply(4, 5, 6, 1, 3))