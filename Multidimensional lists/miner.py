def is_valid(matrix, r, c):
    if 0 <= r < len(matrix) and 0 <= c < len(matrix):
        return True

    return False


n = int(input())
commands = input().split()
matrix = [[x for x in input().split()] for y in range(n)]

count_coal = 0
miner_row = 0
miner_col = 0
coal_collected = 0
miner_position = miner_row, miner_col
row = 0
col = 0
over = False

for r in range(len(matrix)):
    for c in range(len(matrix[r])):

        if matrix[r][c] == 'c':
            count_coal += 1

        if matrix[r][c] == 's':
            miner_row = r
            miner_col = c
            if is_valid(matrix, miner_row, miner_col):
                miner_position = miner_row, miner_col
row = miner_row
col = miner_col

for command in commands:

    if command == 'left':  # row, col - 1
        if col - 1 >= 0:

            if matrix[row][col - 1] == 'c':
                coal_collected += 1
                matrix[row][col - 1] = '*'

            elif matrix[row][col - 1] == 'e':
                print(f'Game over! ({row}, {col - 1})')
                over = True
            col -= 1

    elif command == 'right':  # row, col + 1
        if col + 1 < len(matrix):

            if matrix[row][col + 1] == 'c':
                coal_collected += 1
                matrix[row][col + 1] = '*'

            elif matrix[row][col + 1] == 'e':
                print(f'Game over! ({row}, {col + 1})')
                over = True
            col += 1

    elif command == 'up':  # row - 1, col
        if row - 1 >= 0:
            if matrix[row - 1][col] == 'c':
                coal_collected += 1
                matrix[row - 1][col] = '*'

            elif matrix[row - 1][col] == 'e':
                print(f'Game over! ({row - 1}, {col})')
                over = True
            row -= 1

    elif command == 'down':  # row + 1, col
        if row + 1 < len(matrix):

            if matrix[row + 1][col] == 'c':
                coal_collected += 1
                matrix[row + 1][col] = '*'

            elif matrix[row + 1][col] == 'e':
                print(f'Game over! ({row + 1}, {col})')
                over = True
            row += 1

if coal_collected == count_coal:
    print(f'You collected all coal! ({row}, {col})')

if not over and coal_collected != count_coal:
    print(f'{abs(coal_collected - count_coal)} pieces of coal left. ({row}, {col})')


