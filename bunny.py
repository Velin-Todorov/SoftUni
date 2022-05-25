def is_valid(size, r, c):
    if 0 <= r < size and 0 <= c < size:
        return True

    return False


def bunny_move(direction, row, col):
    if direction == 'up':
        row -= 1

    elif direction == 'down':
        row += 1

    elif direction == 'right':
        col += 1

    elif direction == 'left':
        col -= 1

    return row, col


size = int(input())
eggs = 0
max_eggs = float('-inf')
directions = ['up', 'down', 'left', 'right']

field = [[x for x in input().split()] for y in range(size)]

bunny_row = 0
bunny_col = 0

best_direction = ''
best_path = []

for r in range(len(field)):
    for c in range(len(field[r])):

        if field[r][c] == 'B':
            bunny_row, bunny_col = r, c

directions = ['up', 'right', 'left', 'down']

for direction in directions:
    bunny_row_copy = bunny_row
    bunny_col_copy = bunny_col
    eggs = 0
    path = []

    while True:
        bunny_row_copy, bunny_col_copy = bunny_move(direction, bunny_row, bunny_col)

        if field[bunny_row_copy][bunny_col_copy] == 'X' or \
                not is_valid(size, bunny_row_copy, bunny_col_copy):
            break

        eggs += int(field[bunny_row_copy][bunny_col_copy])
        path.append([bunny_row_copy, bunny_col_copy])

    if eggs > max_eggs:
        max_eggs, best_direction, best_path = eggs, direction, path

print(best_direction)
for x in best_path:
    print(x)
print(max_eggs)