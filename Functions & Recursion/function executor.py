def sum_numbers(num1, num2):
    return num1 + num2


def multiply_numbers(num1, num2):
    return num1 * num2


def func_executor(*args):
    result = []

    for i in args:
        function, results = i
        res = function(*results)
        result.append(res)

    return result


