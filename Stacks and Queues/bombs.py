from collections import deque

bomb_effects = deque([int(x) for x in input().split(', ')])
bomb_casing = [int(y) for y in input().split(', ')]

datura_bomb = 0
cherry_bomb = 0
smoke_decoy_bomb = 0

while True:
    if (not bomb_casing) or (not bomb_effects) or (datura_bomb >= 3 and cherry_bomb >= 3 and smoke_decoy_bomb >= 3):
        break
    effect = bomb_effects.popleft()
    casing = bomb_casing.pop()

    action = effect + casing

    if action == 40:
        datura_bomb += 1

    elif action == 60:
        cherry_bomb += 1

    elif action == 120:
        smoke_decoy_bomb += 1

    else:
        casing -= 5
        bomb_casing.append(casing)
        bomb_effects.appendleft(effect)

bombs = {
    'Cherry Bombs': cherry_bomb,
    'Datura Bombs': datura_bomb,
    'Smoke Decoy Bombs': smoke_decoy_bomb
}

sorted_bombs = sorted(bombs.items(), key=lambda kvpt: kvpt[0])

if cherry_bomb >= 3 and datura_bomb >= 3 and smoke_decoy_bomb >= 3:
    print("Bene! You have successfully filled the bomb pouch!")

    if bomb_effects:
        print(f"Bomb Effects: {', '.join(str(s) for s in bomb_effects)}")
    else:
        print("Bomb Effects: empty")

    if bomb_casing:
        print(f"Bomb Casings: {', '.join(str(s) for s in bomb_casing)}")
    else:
        print("Bomb Casings: empty")

    for k, v in sorted_bombs:
        print(f'{k}: {v}')

else:
    print("You don't have enough materials to fill the bomb pouch.")

    if bomb_effects:
        print(f"Bomb Effects: {', '.join(str(s) for s in bomb_effects)}")
    else:
        print("Bomb Effects: empty")

    if bomb_casing:
        print(f"Bomb Casings: {', '.join(str(s) for s in bomb_casing)}")
    else:
        print("Bomb Casings: empty")

    for k, v in sorted_bombs:
        print(f'{k}: {v}')







