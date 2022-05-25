ss = list(input())
opening_index = 0
yes_count = 0

while ss:
    opening = ss[len(ss) // 2]
    closing = ss[(len(ss) // 2) - 1]

    if closing + opening == '()' or closing + opening == '[]' or closing + opening == '{}':
        ss.remove(opening)
        ss.remove(closing)
        yes_count += 1

    else:
        break

print('YES') if yes_count > 0 else print('NO')

