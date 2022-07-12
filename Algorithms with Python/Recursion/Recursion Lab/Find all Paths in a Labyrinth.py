def is_outside(row, col, lab):
    if row < 0 or col < 0 or row >= len(lab) or col >= len(lab[0]):
        return True
    return False


def cannot_move(lab, row, col):
    if lab[row][col] == '*':
        return True


def marked_path(lab, row, col):
    if lab[row][col] == 'v':
        return True


def find_all_paths(row, col, lab, direction, path):

    if is_outside(row, col, lab):
        return

    if cannot_move(lab, row, col):
        return

    if marked_path(lab, row, col):
        return

    path.append(direction)

    if lab[row][col] == 'e':
        print(''.join(path))

    else:
        lab[row][col] = 'v'
        find_all_paths(row, col + 1, lab, 'R', path)
        find_all_paths(row, col - 1, lab, 'L', path)
        find_all_paths(row + 1, col, lab, 'D', path)
        find_all_paths(row - 1, col, lab, 'U', path)
        lab[row][col] = '-'

    path.pop()


n = int(input())
m = int(input())
matrix = [[x for x in input()] for _ in range(n)]


find_all_paths(0, 0, matrix, '', [])
