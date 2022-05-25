expression = input()
stack = []

combinations = {
    '(': ')',
    '{': '}',
    '[': ']'
}
balanced = True

for s in expression:
    if s in '({[':
        stack.append(s)

    else:
        if len(stack) == 0:
            balanced = False
            break
        last_bracket = stack.pop()

        if combinations[last_bracket] != s:
            balanced = False
            break
        else:
            balanced = True


if balanced and len(stack) == 0:
    print('YES')

else:
    print('NO')