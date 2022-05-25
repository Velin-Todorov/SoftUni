def is_valid(rows, cols, r, c):
    if 0 <= r < rows and 0 <= c < cols:
        return True

    return False


def next_position_player(direction, r, c):

    if direction == 'U':
        return r - 1, c

    if direction == 'D':
        return r + 1, c

    if direction == 'L':
        return r, c - 1

    if direction == 'R':
        return r, c + 1


def get_next_bunnies(bunnies, row, cols):
    next_bunnies = []

    for r, c in bunnies:
        if is_valid(row, cols, r - 1, c):
            next_bunnies.append([r - 1, c])

        if is_valid(row, cols, r + 1, c):
            next_bunnies.append([r + 1, c])

        if is_valid(row, cols, r, c - 1):
            next_bunnies.append([r, c - 1])

        if is_valid(row, cols, r, c + 1):
            next_bunnies.append([r, c + 1])

    return next_bunnies


n, m = [int(x) for x in input().split()]

matrix = []
won = False
for _ in range(n):
    field = list(input())
    matrix.append(field)

commands = []
bunnies = []
next_bunnies = []
comms = input()

for ch in comms:
    commands.append(ch)

row = 0
col = 0

for r in range(len(matrix)):
    for c in range(len(matrix[r])):

        if matrix[r][c] == 'P':
            row, col = r, c

        if matrix[r][c] == 'B':
            bunnies.append([r, c])

matrix[row][col] = '.'

for command in commands:
    next_player_row, next_player_col = next_position_player(command, row, col)

    if not is_valid(n, m, next_player_row, next_player_col):
        won = True

    elif matrix[next_player_row][next_player_col] == 'B':
        won = False
    if not won:
        row, col = next_player_row, next_player_col

    next_bunnies = get_next_bunnies(bunnies, n, m)

    for r, c in next_bunnies:
        if r == row and c == col and not won:
            won = False

        matrix[r][c] = 'B'
    bunnies += next_bunnies

    if won is not None:
        break

for x in matrix:
    print(''.join(x))

if won:
    print(f'won: {row} {col}')

else:
    print(f'dead: {row} {col}')
