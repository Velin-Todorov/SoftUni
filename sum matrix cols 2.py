from time import time

n, m = [int(x) for x in input().split(', ')]

matrix = []
start = time()
for _ in range(n):
    row = [int(x) for x in input().split()]
    matrix.append(row)

result = []

for col_index in range(m):
    col_sum = 0

    for row_index in range(n):
        col_sum += matrix[row_index][col_index]
    result.append(col_sum)
end = time()

print(end - start)
[print(x) for x in result]