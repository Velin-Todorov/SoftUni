number = int(input())
chemical_compounds = []

for _ in range(number):
    chemical = input().split()

    for x in chemical:
        chemical_compounds.append(x)

ss = set(chemical_compounds)

for chem in ss:
    print(chem)