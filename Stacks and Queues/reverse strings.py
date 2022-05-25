stack = []
string = input()

for s in string:
    stack.append(s)

while stack:
    print(' '.join(stack.pop()), end='')


