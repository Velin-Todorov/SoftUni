from collections import deque
petrol_pumps = int(input())
qq = deque()
index = 0

for i in range(petrol_pumps):
    petrol_distance = [int(x) for x in input().split()]
    qq.append(petrol_distance)


for idx in range(len(qq)):
    gas_tank = 0
    completed = True

    for petrol, distance in qq:
        gas_tank += petrol
        if distance > gas_tank:
            completed = False
            break
        gas_tank -= distance

    if completed:
        print(idx)
        break

    qq.append(qq.popleft())




