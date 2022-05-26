from collections import Counter

string = input()

counter = Counter(string)

for k, v in sorted(counter.items()):
    print(f'{k}: {v} time/s')





