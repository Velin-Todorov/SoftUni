from collections import deque

fireworks_effects = deque([int(x) for x in input().split(', ')])  # queue
explosive_power = [int(x) for x in input().split(', ')]  # stack

palm_firework_count = 0
willow_firework_count = 0
crossette_firework_count = 0


while True:
    if (not fireworks_effects) or (not explosive_power) or (palm_firework_count >= 3 and willow_firework_count >= 3 and crossette_firework_count >= 3):
        break

    effect = fireworks_effects.popleft()
    power = explosive_power.pop()

    if effect <= 0:
        explosive_power.append(power)
        continue

    if power <= 0:
        fireworks_effects.appendleft(effect)
        continue

    action = effect + power

    if action % 3 == 0 and action % 5 == 0:
        crossette_firework_count += 1

    elif action % 3 == 0 and action % 5 != 0:
        palm_firework_count += 1

    elif action % 5 == 0 and action % 3 != 0:
        willow_firework_count += 1

    else:
        effect -= 1
        fireworks_effects.append(effect)
        explosive_power.append(power)

if palm_firework_count >= 3 and willow_firework_count >= 3 and crossette_firework_count >= 3:
    print("Congrats! You made the perfect firework show!")

    if fireworks_effects:
        print(f'Firework Effects left: {", ".join(str(s) for s in fireworks_effects)}')

    if explosive_power:
        print(f'Explosive Power left: {", ".join(str(s) for s in explosive_power)}')

    print(f'Palm Fireworks: {palm_firework_count}')
    print(f'Willow Fireworks: {willow_firework_count}')
    print(f'Crossette Fireworks: {crossette_firework_count}')

else:
    print("Sorry. You can't make the perfect firework show.")

    if fireworks_effects:
        print(f'Firework Effects left: {", ".join(str(s) for s in fireworks_effects)}')

    if explosive_power:
        print(f'Explosive Power left: {", ".join(str(s) for s in explosive_power)}')

    print(f'Palm Fireworks: {palm_firework_count}')
    print(f'Willow Fireworks: {willow_firework_count}')
    print(f'Crossette Fireworks: {crossette_firework_count}')
