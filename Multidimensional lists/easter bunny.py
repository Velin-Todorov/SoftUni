def is_valid(size, r, c):
    if 0 <= r < size and 0 <= c < size:
        return True

    return False


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


directions = {
    'right': lambda r, c: (r, c + 1),
    'left': lambda r, c: (r, c - 1),
    'up': lambda r, c: (r - 1, c),
    'down': lambda r, c: (r + 1, c)
}

for direction, step in directions.items():
    eggs = 0
    bunny_row_copy = bunny_row
    bunny_col_copy = bunny_col
    path = []

    while True:

        bunny_row_copy, bunny_col_copy = step(bunny_row_copy, bunny_col_copy)

        if not is_valid(size, bunny_row_copy, bunny_col_copy):
            break

        if field[bunny_row_copy][bunny_col_copy] == 'X':
            break

        eggs += int(field[bunny_row_copy][bunny_col_copy])
        path.append([bunny_row_copy, bunny_col_copy])

    if eggs > max_eggs:
        max_eggs, best_direction, best_path = eggs, direction, path

print(best_direction)
for x in best_path:
    print(x)
print(max_eggs)
