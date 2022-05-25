import string

alphabet = string.ascii_lowercase

n, m = [int(x) for x in input().split()]

for r in range(n):
    for c in range(m):
        print(f'{alphabet[r]}{chr(97 + c + r)}{alphabet[r]}', end=' ')
    print()
