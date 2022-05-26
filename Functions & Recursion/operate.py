def subtract(nums):
    result = 0
    for i in nums:
        result -= i

    return result


def multiply(nums):
    result = 1
    for i in nums:
        result *= i

    return result


def operate(sign, *args):
    result = 0

    if sign == '+':
        result = sum(args)

    elif sign == '-':
        result = subtract(args)

    elif sign == '*':
        result = multiply(args)

    elif sign == '/':
        result = 1
        for i in args:
            if i == 0:
                continue
            result //= i

    return result

print(operate("/", 1, 0, 3))