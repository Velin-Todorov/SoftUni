num = int(input())
set_even = set()
set_odd = set()
sum_ch = 0

ascii_sum = 0

for i in range(1, num + 1):
    names = input()
    sum_ch = 0
    for ch in names:
        sum_ch += ord(ch)

    ascii_sum = int(sum_ch / i)

    if ascii_sum % 2 != 0:
        set_odd.add(ascii_sum)

    else:
        set_even.add(ascii_sum)


if sum(set_even) == sum(set_odd):
    print(', '.join(str(s) for s in set_even.union(set_odd)))

elif sum(set_odd) > sum(set_even):
    print(', '.join(str(s) for s in set_odd.difference(set_even)))

elif sum(set_even) > sum(set_odd):
    print(', '.join(str(s) for s in set_odd.symmetric_difference(set_even)))