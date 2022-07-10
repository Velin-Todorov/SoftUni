def recursive_array_sum(numbers, idx):
    if idx >= len(numbers) - 1:
        return numbers[idx]
    return numbers[idx] + recursive_array_sum(numbers, idx + 1)


numbers = [int(x) for x in input().split()]

print(recursive_array_sum(numbers, 0))