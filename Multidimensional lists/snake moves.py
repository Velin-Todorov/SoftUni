n, m = [int(x) for x in input().split()]
snake = input()
snake_idx = 0

matrix = []

for r in range(n):
    matrix.append([None] * m)
    for c in range(m):
        if r % 2 == 0:
            matrix[r][c] = snake[snake_idx]

        else:
            matrix[r][m - 1 - c] = snake[snake_idx]
        snake_idx = (snake_idx + 1) % len(snake)  # why are we using modulus?

for x in matrix:
    print(''.join(x))
