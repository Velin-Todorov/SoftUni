rows = int(input())

matrix = [[int(x) for x in input().split(', ')] for y in range(rows)]

flattened_matrix = []

for x in matrix:
    for i in x:
        flattened_matrix.append(i)

print(flattened_matrix)