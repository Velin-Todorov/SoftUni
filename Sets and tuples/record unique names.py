n = int(input())

unique_names = {input() for x in range(n)}

for name in unique_names:
    print(name)

