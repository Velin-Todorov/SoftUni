def is_valid(matrix, row, col):
    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return True

    return False


matrix = [[int(x) for x in input().split()] for y in range(int(input()))]
indexes = [x for x in input().split()]

for i in indexes:
    row, col = [int(i) for i in i.split(',')]

    bomb = matrix[row][col]

    if bomb > 0:
        # -1, -1
        if is_valid(matrix, row - 1, col - 1) and matrix[row - 1][col - 1] > 0:
            matrix[row - 1][col - 1] -= bomb

        # -1, 0
        if is_valid(matrix, row - 1, col) and matrix[row - 1][col] > 0:
            matrix[row - 1][col] -= bomb

        # -1, +1
        if is_valid(matrix, row - 1, col + 1) and matrix[row - 1][col + 1] > 0:
            matrix[row - 1][col + 1] -= bomb

        # +0, +1
        if is_valid(matrix, row, col + 1) and matrix[row][col + 1] > 0:
            matrix[row][col + 1] -= bomb

        # +1, +1
        if is_valid(matrix, row + 1, col + 1) and matrix[row + 1][col + 1] > 0:
            matrix[row + 1][col + 1] -= bomb

        # +1, 0
        if is_valid(matrix, row + 1, col) and matrix[row + 1][col] > 0:
            matrix[row + 1][col] -= bomb

        # +1, -1
        if is_valid(matrix, row + 1, col - 1) and matrix[row + 1][col - 1] > 0:
            matrix[row + 1][col - 1] -= bomb

        # 0, -1
        if is_valid(matrix, row, col - 1) and matrix[row][col - 1] > 0:
            matrix[row][col - 1] -= bomb

        matrix[row][col] = 0

count_alive = 0
sum_cells = 0

for r in range(len(matrix)):
    for c in range(len(matrix[r])):

        if matrix[r][c] > 0:
            count_alive += 1
            sum_cells += matrix[r][c]

print(f"Alive cells: {count_alive}")
print(f"Sum: {sum_cells}")

for el in matrix:
    print(' '.join(str(s) for s in el))
