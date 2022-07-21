def fibonacci():
    num1 = 0
    num2 = 1
    yield num1
    yield num2

    while True:
        next_number = num1 + num2
        yield next_number
        num2, num1 = next_number, num2


generator = fibonacci()
for i in range(5):
    print(next(generator))