n = int(input())

matrix = [[int(x) for x in input().split(', ')] for y in range(n)]

sum_primary = 0
sum_secondary = 0

primary = []
secondary = []

for i in range(len(matrix)):
    sum_primary += matrix[i][i]
    primary.append(matrix[i][i])

    sum_secondary += matrix[i][len(matrix) - i - 1]
    secondary.append(matrix[i][len(matrix) - i - 1])

print(f'Primary diagonal: {", ".join(str(s) for s in primary)}. Sum: {sum_primary}')
print(f'Secondary diagonal: {", ".join(str(s) for s in secondary)}. Sum: {sum_secondary}')
