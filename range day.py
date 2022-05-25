def is_outside(matrix, row, col):
    if row < 0 or col < 0 or row >= len(matrix) or col >= len(matrix):
        return True
    return False


def get_next_position(direction, r, c, steps):

    if direction == 'up':
        return r - steps, c

    if direction == 'down':
        return r + steps, c

    if direction == 'left':
        return r, c - steps

    return r, c + steps


matrix = [[x for x in input().split()] for y in range(5)]

shooter_row = 0
shooter_col = 0
targets_count = 0

for r in range(5):
    for c in range(5):

        if matrix[r][c] == 'A':
            shooter_row = r
            shooter_col = c

        if matrix[r][c] == 'x':
            targets_count += 1

hit_targets = []

for _ in range(int(input())):
    command = input().split()

    action = command[0]
    direction = command[1]

    if action == 'move':
        steps = int(command[2])
        next_player_row, next_player_col = get_next_position(direction, shooter_row, shooter_col, steps)

        if is_outside(matrix, next_player_row, next_player_col):
            continue

        if matrix[next_player_row][next_player_col] != '.':
            continue

        matrix[shooter_row][shooter_col] = '.'
        matrix[next_player_row][next_player_col] = 'A'
        shooter_row, shooter_col = next_player_row, next_player_col

    else:
        bullet_row, bullet_col = get_next_position(direction, shooter_row, shooter_col, 1)
        while True:
            if is_outside(matrix, bullet_row, bullet_col):
                break

            if matrix[bullet_row][bullet_col] == 'x':
                hit_targets.append([bullet_row, bullet_col])
                matrix[bullet_row][bullet_col] = '.'
                break

            bullet_row, bullet_col = get_next_position(direction, bullet_row, bullet_col, 1)

            if len(hit_targets) == targets_count:
                break

if len(hit_targets) == targets_count:
    print(f'Training completed! All {len(hit_targets)} targets hit.')

else:
    print(f'Training not completed! {targets_count - len(hit_targets)} targets left.')

for x in hit_targets:
    print(x)
