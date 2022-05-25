n = int(input())

matrix = [[int(x) for x in input().split()] for y in range(n)]

sum_primary = 0
sum_secondary = 0

for i in range(len(matrix)):
    sum_primary += matrix[i][i]
    sum_secondary += matrix[i][len(matrix) - i - 1]

print(f'{abs(sum_primary - sum_secondary)}')

