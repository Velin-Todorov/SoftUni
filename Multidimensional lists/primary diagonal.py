n = int(input())

matrix = []
sum_diagonal = 0

for i in range(n):
    element = [int(x) for x in input().split()]
    matrix.append(element)

for i in range(n):
    sum_diagonal += matrix[i][i]

print(sum_diagonal)