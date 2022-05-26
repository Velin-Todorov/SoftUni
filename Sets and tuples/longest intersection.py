num = int(input())
max_len = -1000

final_intersection = 0

for _ in range(num):
    first, second = input().split('-')

    first_start, first_end = [int(x) for x in first.split(',')]

    second_start, second_end = [int(x) for x in second.split(',')]

    ss1 = set(range(first_start, first_end + 1))
    ss2 = set(range(second_start, second_end + 1))

    intersection = ss1.intersection(ss2)

    if len(intersection) > max_len:
        max_len = len(intersection)
        final_intersection = intersection

    ss1.clear()
    ss2.clear()

print(f'Longest intersection is [{", ".join(str(s) for s in final_intersection)}] '
      f'with length {max_len}')

