from collections import deque

chocolate = deque([int(x) for x in input().split(',')])
chocolate.reverse()
milk = deque([int(x) for x in input().split(',')])

cups = 0

for c in chocolate.copy():
    for m in milk.copy():

        if c <= 0:
            chocolate.remove(c)
            break

        if m <= 0:
            milk.remove(m)
            break

        if c == m:
            cups += 1
            chocolate.remove(c)
            milk.remove(m)
            break

        else:
            milk.append(milk.popleft())
            c -= 5
            break

    if not chocolate or not milk or cups == 5:
        break

chocolate.reverse()

if cups == 5:
    print('Great! You made all the chocolate milkshakes needed!')
else:
    print('Not enough milkshakes.')

if chocolate:
    print(f'Chocolate: {", ".join(str(s) for s in chocolate)}')
else:
    print('Chocolate: empty')

if milk:
    print(f'Milk: {", ".join(str(s) for s in milk)}')
else:
    print('Milk: empty')