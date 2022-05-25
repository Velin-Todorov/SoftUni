def is_valid(r, c, row, col):
    """
    This is a function to check if a given index is valid.
    A row or col is valid if it is bigger than 0. A row or col
    is valid if it is smaller than or equal to the length of the row/col.
    """
    if r < 0 or c < 0 or r >= row or c >= col:
        return False
    return True


n, m = [int(x) for x in input().split()]

matrix = []

for r in range(n):
    elements = input().split()
    matrix.append(elements)

while True:

    command = input()
    data = command.split()
    if command == 'END':
        break

    if data[0] != 'swap' or len(data) != 5:
        print('Invalid input!')
        continue

    row1, col1, row2, col2 = [int(x) for x in data[1:]]

    if not is_valid(row1, col1, n, m) or not is_valid(row2, col2, n, m):
        print('Invalid input!')
        continue

    matrix[row1][col1], matrix[row2][col2] = matrix[row2][col2], matrix[row1][col1]

    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            print(matrix[r][c], end= ' ')
        print()