from collections import deque

customers = deque([int(x) for x in input().split(', ')])  # queue
taxis = [int(x) for x in input().split(', ')]  # stack

time_passed = 0

while True:

    if not customers or not taxis:
        break

    customer = customers.popleft()
    taxi = taxis.pop()

    if taxi >= customer:
        time_passed += customer

    else:
        customers.appendleft(customer)
        continue

if not customers:
    print(
        'All customers were driven to their destinations'
          )

    print(
        f'Total time: {time_passed} minutes'
         )

else:
    print(
        'Not all customers were driven to their destinations'
         )
    print(
        f'Customers left: {", ".join(str(s) for s in customers)}'
          )