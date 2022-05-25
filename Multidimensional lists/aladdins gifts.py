from collections import deque


def present(total):
    present = ''

    if 100 <= total < 199:
        present = 'Gemstone'

    elif 200 <= total < 299:
        present = 'Porcelain Sculpture'

    elif 300 <= total < 399:
        present = 'Gold'

    elif 400 <= total < 499:
        present = 'Diamond Jewellery'

    return present


materials = [int(x) for x in input().split()]
magic_level = deque([int(y) for y in input().split()])

gifts = {
    'Gemstone': 0,
    'Porcelain Sculpture': 0,
    'Gold': 0,
    'Diamond Jewellery': 0
}

while True:
    if not materials or not magic_level:
        break
    material = materials.pop()
    magic = magic_level.popleft()

    action = material + magic

    if 100 < action < 499:
        gifts[present(action)] += 1

    else:
        if action < 100:
            if action % 2 == 0:
                action = 2 * material + 3 * magic
                if present(action):
                    gifts[present(action)] += 1

            elif action % 2 != 0:
                action *= 2
                if present(action):
                    gifts[present(action)] += 1

        elif action > 499:
            action /= 2
            if present(action):
                gifts[present(action)] += 1

new_gifts = {k: v for k, v in gifts.items() if v >= 1}
sorted_new_gifts = sorted(new_gifts.items(), key=lambda kvpt: kvpt[0])

if ('Gemstone' in new_gifts.keys() and 'Porcelain Sculpture' in new_gifts.keys()) or ('Gold' in new_gifts.keys() and
                                                                                      'Diamond Jewellery' in new_gifts.keys()):
    print('The wedding presents are made!')

    if materials:
        print(f'Materials left: {", ".join(str(s) for s in materials)}')

    if magic_level:
        print(f'Magic left: {", ".join(str(s) for s in magic_level)}')

    for k, v in sorted_new_gifts:
        print(f'{k}: {v}')

else:
    print("Aladdin does not have enough wedding presents.")

    if materials:
        print(f'Materials left: {", ".join(str(s) for s in materials)}')

    if magic_level:
        print(f'Magic left: {", ".join(str(s) for s in magic_level)}')

    for k, v in sorted_new_gifts:
        print(f'{k}: {v}')
