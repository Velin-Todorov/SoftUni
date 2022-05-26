guests = int(input())
party = set()

for _ in range(guests):
    reservation_code = input()
    party.add(reservation_code)

while True:
    command = input()

    if command == 'END':
        break

    if command in party:
        party.remove(command)


print(len(party))
vip = sorted([g for g in party if g[0].isdigit()])
regular = sorted([x for x in party if not x[0].isdigit()])

print(*vip, *regular, sep='\n')

