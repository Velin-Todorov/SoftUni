n, m = [int(x) for x in input().split(', ')]

matrix = []

for x in range(n):
    elements = [int(x) for x in input().split(', ')]
    matrix.append(elements)


def get_sum_of_submatrix(matrix, row_index, column_index, size):
    the_sum = 0

    for r in range(row_index, row_index + size):
        for c in range(column_index, column_index + size):
            the_sum += matrix[r][c]

    return the_sum


SIZE = 2


def get_the_best_sum(matrix, size):

    best_sum = get_sum_of_submatrix(matrix, 0, 0, size)
    best_row_index = 0
    best_column_index = 0

    for r in range(len(matrix) - size + 1):
        for c in range(len(matrix[r]) - size + 1):
            current_sum = get_sum_of_submatrix(matrix, r, c, size)

            if best_sum < current_sum:
                best_sum = current_sum
                best_row_index = r
                best_column_index = c

    return best_row_index, best_column_index


def print_result(coordinates, size):
    (row_index, col_index) = coordinates

    for r in range(row_index, row_index + size):
        row = []
        for c in range(col_index, col_index + size):
            row.append(matrix[r][c])

        print(' '.join(str(s) for s in row))
    print(get_sum_of_submatrix(matrix, row_index, col_index, size))


coordinates = get_the_best_sum(matrix, SIZE)
print_result(coordinates, SIZE)

a = 5