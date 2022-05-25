def is_valid(matrix, r, c):
    if 0 <= r < len(matrix) and 0 <= c < len(matrix):
        return True

    return False


size = int(input())

matrix = [[x for x in input().split()] for y in range(size)]

alice_row = 0
alice_col = 0

teabags = 0

for r in range(size):
    for c in range(size):

        if matrix[r][c] == 'A':
            alice_row = r
            alice_col = c

alice_row_copy = alice_row
alice_col_copy = alice_col
matrix[alice_row_copy][alice_col_copy] = '*'

while True:
    command = input()

    if command == 'up':
        alice_row_copy -= 1
        if is_valid(matrix, alice_row_copy, alice_col_copy):

            if matrix[alice_row_copy][alice_col_copy] == 'R':
                matrix[alice_row_copy][alice_col_copy] = '*'
                print("Alice didn't make it to the tea party.")
                break

            if matrix[alice_row_copy][alice_col_copy].isdigit():
                teabags += int(matrix[alice_row_copy][alice_col_copy])
            matrix[alice_row_copy][alice_col_copy] = '*'
        else:
            print("Alice didn't make it to the tea party.")
            break

    elif command == 'down':
        alice_row_copy += 1
        if is_valid(matrix, alice_row_copy, alice_col_copy):

            if matrix[alice_row_copy][alice_col_copy] == 'R':
                matrix[alice_row_copy][alice_col_copy] = '*'
                print("Alice didn't make it to the tea party.")
                break

            if matrix[alice_row_copy][alice_col_copy].isdigit():
                teabags += int(matrix[alice_row_copy][alice_col_copy])
            matrix[alice_row_copy][alice_col_copy] = '*'
        else:
            print("Alice didn't make it to the tea party.")
            break

    elif command == 'left':
        alice_col_copy -= 1
        if is_valid(matrix, alice_row_copy, alice_col_copy):

            if matrix[alice_row_copy][alice_col_copy] == 'R':
                matrix[alice_row_copy][alice_col_copy] = '*'
                print("Alice didn't make it to the tea party.")
                break

            if matrix[alice_row_copy][alice_col_copy].isdigit():
                teabags += int(matrix[alice_row_copy][alice_col_copy])
            matrix[alice_row_copy][alice_col_copy] = '*'
        else:
            print("Alice didn't make it to the tea party.")
            break

    elif command == 'right':
        alice_col_copy += 1
        if is_valid(matrix, alice_row_copy, alice_col_copy):

            if matrix[alice_row_copy][alice_col_copy] == 'R':
                matrix[alice_row_copy][alice_col_copy] = '*'
                print("Alice didn't make it to the tea party.")

                break

            if matrix[alice_row_copy][alice_col_copy].isdigit():
                teabags += int(matrix[alice_row_copy][alice_col_copy])
            matrix[alice_row_copy][alice_col_copy] = '*'
        else:
            print("Alice didn't make it to the tea party.")
            break

    if teabags >= 10:
        print("She did it! She went to the party.")
        break


for x in matrix:
    print(' '.join(x))
