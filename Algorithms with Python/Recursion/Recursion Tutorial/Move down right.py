def is_outside(row, col, field):

    if row < 0 or col < 0 or row >= len(field) or col >= len(field[0]):
        return True
    return False


def is_passed(row, col, field):
    if field[row][col] == 'x':
        return True
    return False


def move(rows, cols, row, col, field, total_paths):

    if is_outside(row, col, field):
        return 0

    if is_passed(row, col, field):
        return

    if row == rows - 1 and col == cols - 1:
        return 1

    else:
        result = 0
        field[row][col] = 'x'
        result += move(rows, cols, row + 1, col, field, total_paths + 1)
        result += move(rows, cols, row, col + 1, field, total_paths + 1)
        field[row][col] = '-'

    return result


rows = int(input())
cols = int(input())
total_paths = 0

matrix = [['-' for x in range(cols)] for i in range(rows)]

print(move(rows, cols, 0, 0, matrix, total_paths))
