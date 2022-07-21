from itertools import permutations


def possible_permutations(numbers):
    for i in permutations(numbers):
        yield list(i)

[print(n) for n in possible_permutations([1, 2, 3])]