def factorial(n):
    if n <= 1:
        return n

    return n * factorial(n - 1)


number = int(input())
print(factorial(number))