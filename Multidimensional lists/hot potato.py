from collections import deque

names = deque(input().split())
toss = int(input())

while len(names) != 1:
    for _ in range(toss):
        names.append(names.popleft())

    print(f'Removed {names.pop()}')

print(f'Last is {names[0]}')