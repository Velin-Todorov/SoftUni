n = int(input())

matrix = []

for x in range(n):
    element = [int(x) for x in input().split(', ')]
    matrix.append(element)

new_matrix = [[y for y in x if y % 2 == 0] for x in matrix]

print(new_matrix)