n, m = [int(x) for x in input().split(', ')]
matrix = []
sum_element = 0

for i in range(n):  # we loop first through the rows
    element = [int(x) for x in input().split(', ')]

    matrix.append(element)

for x in range(len(matrix)):
    sum_element += sum(matrix[x])

print(sum_element)
print(matrix)
