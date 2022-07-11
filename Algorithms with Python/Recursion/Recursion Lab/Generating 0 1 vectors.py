def generating_vectors(idx, vector):

    if idx > len(vector) - 1:
        print(*vector)
        return

    for number in range(0, 2):
        vector[idx] = number
        generating_vectors(idx + 1, vector)


n = int(input())
vector = [None] * n

generating_vectors(0, vector)