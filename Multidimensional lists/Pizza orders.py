from collections import deque

pizza_orders = deque([int(x) for x in input().split(', ')])  # queue
employees = [int(x) for x in input().split(', ')]  # stack

pizzas_made = 0

while True:

    if not pizza_orders or not employees:
        break

    pizza_order = pizza_orders.popleft()
    employee = employees.pop()

    if pizza_order <= 0:
        employees.append(employee)
        continue

    if pizza_order > 10:
        employees.append(employee)
        continue

    if pizza_order <= employee:
        pizzas_made += pizza_order

    else:
        pizza_orders.appendleft(pizza_order - employee)
        pizzas_made += employee


if not pizza_orders:
    print('All orders are successfully completed!')
    print(f'Total pizzas made: {pizzas_made}')
    print(f'Employees: {", ".join(str(s) for s in employees)}')
else:
    print('Not all orders are completed.')
    print(f'Orders left: {", ".join(str(s) for s in pizza_orders)}')
