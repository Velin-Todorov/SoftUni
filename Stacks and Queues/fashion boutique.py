ss = [int(x) for x in input().split()]
capacity_rack = int(input())
sum_val = 0
count_racks = 1

while ss:
    item = ss.pop()
    sum_val += item

    if sum_val == capacity_rack:
        if ss:
            sum_val = 0
            count_racks += 1

    elif sum_val > capacity_rack:
        sum_val -= item
        count_racks += 1
        sum_val = 0
        sum_val += item

print(count_racks)