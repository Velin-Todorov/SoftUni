from collections import deque
from io import StringIO

people = deque()
quantity_dispenser = int(input())
while True:
    command = input()

    if command == 'Start':
        while people:
            new_command = input()
            if new_command.startswith('refill'):
                lst_command = new_command.split()
                liters = int(lst_command[1])
                quantity_dispenser += liters

            else:
                if int(new_command) > quantity_dispenser:
                    name = people.popleft()
                    print(f'{name} must wait')
                else:
                    quantity_dispenser -= int(new_command)
                    name = people.popleft()
                    print(f'{name} got water')

    elif command == 'End':
        print(f'{quantity_dispenser} liters left')
        break

    else:
        people.append(command)
