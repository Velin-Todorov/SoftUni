n = int(input())
ss = {int(x) for x in input().split()}
ops = int(input())

for _ in range(ops):
    command = input()

    if command.startswith('pop'):
        ss.pop()

    else:
        data = command.split()

        action = data[0]
        element = int(data[1])

        if action == 'remove':
            ss.remove(element)

        elif action == 'discard':
            ss.discard(element)


print(sum(ss))
