from collections import deque

expression = [x for x in input().split()]

numbers = deque()

actions = {
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a // b
}

for ch in expression:

    if ch in actions:
        result = numbers.popleft()
        current_expression = actions[ch]

        while numbers:
            number = numbers.popleft()
            result = current_expression(result, number) # this is where we pass parameters to the dict(actions) key
        numbers.append(result)

    else:
        numbers.append(int(ch))


print(''.join(str(s) for s in numbers))
