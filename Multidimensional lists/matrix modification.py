def is_valid(matrix, row, col):
    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return True
    return False


size = int(input())
matrix = [[int(x) for x in input().split()] for x in range(size)]

while True:
    data = input()

    if data == 'END':
        for x in matrix:
            print(' '.join(str(s) for s in x))
        break
    commands = data.split()

    action = commands[0]
    row = int(commands[1])
    col = int(commands[2])
    value = int(commands[3])

    if action == 'Add':
        if is_valid(matrix, row, col):
            matrix[row][col] += value
        else:
            print('Invalid coordinates')

    elif action == 'Subtract':
        if is_valid(matrix, row, col):
            matrix[row][col] -= value

        else:
            print('Invalid coordinates')


