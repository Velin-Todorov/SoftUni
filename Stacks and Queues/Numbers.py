def add_to_set(nums, ss):
    for x in nums:
        ss.add(x)

    return ss


def remove_from_set(nums, ss):
    for x in nums:
        if x in ss:
            ss.remove(x)

    return ss


ss1 = {int(x) for x in input().split()}
ss2 = {int(x) for x in input().split()}

n = int(input())
r1 = 0
r2 = 0

for _ in range(n):
    command = input().split()
    c1 = command[0]
    c2 = command[1]

    if c1 == 'Add' and c2 == 'First':
        nums = {int(x) for x in command[2:]}
        add_to_set(nums, ss1)

    elif c1 == 'Add' and c2 == 'Second':
        nums = {int(x) for x in command[2:]}
        add_to_set(nums, ss2)

    elif c1 == 'Remove' and c2 == 'First':
        nums = {int(x) for x in command[2:]}
        remove_from_set(nums, ss1)

    elif c1 == 'Remove' and c2 == 'Second':
        nums = {int(x) for x in command[2:]}
        remove_from_set(nums, ss2)

    elif c1 == 'Check' and c2 == 'Subset':
        if ss1.issubset(ss2) or ss2.issubset(ss1):
            print('True')
        else:
            print('False')

print(', '.join(str(s) for s in sorted(ss1)))
print(', '.join(str(s) for s in sorted(ss2)))

