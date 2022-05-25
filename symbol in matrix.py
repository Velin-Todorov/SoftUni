n = int(input())

matrix = [[x for x in input()] for i in range(n)]

symbol = input()
is_found = False

for x in range(len(matrix)):
    if is_found:
        break
    for y in range(n):
        if matrix[x][y] == symbol:
            print(f'({x}, {y})')
            is_found = True
            break


if not is_found:
    print(f"{symbol} does not occur in the matrix")