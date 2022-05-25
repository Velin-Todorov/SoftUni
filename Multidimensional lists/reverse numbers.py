integers = [int(x) for x in input().split()]

while integers:
    print(''.join(str(integers.pop())), end=' ')
