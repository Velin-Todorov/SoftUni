from collections import deque

males = [int(x) for x in input().split()]  # stack
females = deque([int(x) for x in input().split()])  # queue

matches = 0

while True:
    if not males or not females:
        break

    male = males.pop()
    female = females.popleft()

    if male <= 0:
        females.appendleft(female)
        continue

    if female <= 0:
        males.append(male)
        continue

    if male % 25 == 0:
        if males:
            males.pop()
            females.appendleft(female)
        continue

    if female % 25 == 0:
        if females:
            females.popleft()
            males.append(male)
        continue

    if male == female:
        matches += 1

    else:
        males.append(male - 2)

print(f'Matches: {matches}')
if males:
    males.reverse()
    print(f'Males left: {", ".join(str(s) for s in males)}')

else:
    print('Males left: none')

if females:
    print(f'Females left: {", ".join(str(s) for s in females)}')

else:
    print('Females left: none')
