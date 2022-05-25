from collections import deque

bees = deque([int(x) for x in input().split()])
nectars = deque([int(x) for x in input().split()])
nectars.reverse()

expressions = deque(input().split())

actions = {
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a // b
}

honey = 0

while True:

    if not bees or not nectars:
        break

    for bee in bees.copy():
        for nectar in nectars.copy():

            if bee <= nectar:
                for ch in expressions.copy():
                    if ch in expressions.copy():
                        formula = actions[expressions.popleft()]

                        if ch == '/' and nectar > 0:
                            result = formula(bee, nectar)

                            honey += abs(result)
                            bees.popleft()
                            nectars.popleft()
                            break

                        result = formula(bee, nectar)
                        honey += abs(result)
                        bees.popleft()
                        nectars.popleft()
                        break
                break
            else:
                nectars.popleft()

print(f'Total honey made: {honey}')

nectars.reverse()

if bees:
    print(f'Bees left: {", ".join(str(s) for s in bees)}')

if nectars:
    print(f"Nectar left: {', '.join(str(s) for s in nectars)}")