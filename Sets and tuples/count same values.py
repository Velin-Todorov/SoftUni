from collections import Counter

nums = [float(x) for x in input().split()]

c = Counter()

for num in nums:
    if num not in c:
        c[num] = 0
    c[num] += 1

for k, v in c.items():
    print(f"{k} - {v} times")