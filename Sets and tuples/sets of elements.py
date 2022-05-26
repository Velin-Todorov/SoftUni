nums = list(map(int, input().split()))

num1 = nums[0]
num2 = nums[1]

set1= set()
set2 = set()

for _ in range(num1):
    number = int(input())
    set1.add(number)

for _ in range(num2):
    number = int(input())
    set2.add(number)

x = set1.intersection(set2)

for n in x:
    print(n)
    