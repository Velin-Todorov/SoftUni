def reverse_array(numbers):
    if not numbers:
        return []
    return [numbers.pop()] + reverse_array(numbers)


numbers = [int(x) for x in input().split()]
result = reverse_array(numbers)
print(*result)