num = int(input())
ss = set()

for _ in range(num):
    direction, car_number = input().split(', ')

    if direction == 'IN':
        ss.add(car_number)
    else:
        ss.remove(car_number)


if len(ss) > 0:
    for car in ss:
        print(car)

else:
    print('Parking Lot is Empty')

