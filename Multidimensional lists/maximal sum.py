n, m = [int(x) for x in input().split()]
matrix = [[int(x) for x in input().split()] for y in range(n)]
SIZE = 3
best_row = 0
best_col = 0


def get_sum_of_submatrix(matrix, row_index, column_index, size):
    the_sum = 0

    for r in range(row_index, row_index + size):
        for c in range(column_index, column_index + size):
            the_sum += matrix[r][c]

    return the_sum


best_sum = get_sum_of_submatrix(matrix, 0, 0, SIZE)

for r in range(len(matrix) - SIZE + 1):
    for c in range(len(matrix[r]) - SIZE + 1):
        current_sum = matrix[r][c] + matrix[r][c + 1] + \
                      matrix[r][c + 2] + matrix[r + 1][c] + \
                      matrix[r + 1][c + 1] + matrix[r + 1][c + 2] + \
                      matrix[r + 2][c] + matrix[r + 2][c + 1] + matrix[r + 2][c + 2]

        if best_sum < current_sum:
            best_sum, best_row, best_col = current_sum, r, c


print(f'Sum = {best_sum}')
print(matrix[best_row][best_col], matrix[best_row][best_col + 1], matrix[best_row][best_col + 2])
print(matrix[best_row + 1][best_col], matrix[best_row + 1][best_col + 1], matrix[best_row + 1][best_col + 2])
print(matrix[best_row + 2][best_col], matrix[best_row + 2][best_col + 1], matrix[best_row + 2][best_col + 2])

