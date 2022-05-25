n, m = [int(x) for x in input().split()]

SIZE = 2

matrix = [[x for x in input().split()] for x in range(n)]

number_of_square_matrices = 0

for r in range(len(matrix) - SIZE + 1):
    for c in range(len(matrix[r]) - SIZE + 1):
        if matrix[r][c] == matrix[r][c + 1] and \
           matrix[r][c] == matrix[r + 1][c + 1] and \
           matrix[r][c] == matrix[r + 1][c]:

            number_of_square_matrices += 1


print(number_of_square_matrices)
