from collections import deque

green_light = int(input())
free_window = int(input())

cars = deque()
cars_passed = 0
crash = False
# Algo:
# 1. Take a deque of chars from the name of the car and start popping
# every time a car passes you need to decrease the green light with the len of the word
# if the green light time is smaller than the len of the word: 2 checks if + free window else: break end

while True:
    command = input()

    if command == 'END':
        print("Everyone is safe.")
        print(f"{cars_passed} total cars passed the crossroads.")
        break

    else:
        if command == 'green':
            if cars:
                current_car = cars.popleft()
                if len(current_car) <= green_light:
                    cars_passed += 1
                    green_light -= len(current_car)
                    continue

                elif len(current_car) <= green_light + free_window:
                    cars_passed += 1
                    continue

                else:
                    crash = True

                    if crash:
                        print('A crash has happened!')
                        break

        else:
            cars.append(command)
