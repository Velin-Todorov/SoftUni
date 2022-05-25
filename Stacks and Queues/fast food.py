from collections import deque

food_quantity = int(input())
order_quantity = deque([int(x) for x in input().split()])


print(max(order_quantity))

while order_quantity:
    amount_served = order_quantity[0]

    if amount_served > food_quantity or food_quantity == 0:
        break

    food_quantity -= order_quantity.popleft()

if len(order_quantity) == 0:
    print('Orders complete')

else:
    print(f"Orders left: {' '.join(str(s) for s in order_quantity)}")