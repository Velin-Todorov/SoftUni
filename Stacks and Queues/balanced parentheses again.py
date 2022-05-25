parentheses = input()

ss = []

yes = 0

for index, p in enumerate(parentheses):

    if p == '(':
        opening = index
        ss.append(p)

        if parentheses[opening + 1] == ')':
            ss.append(')')
            yes += 1

    elif p == '[':
        ss.append(p)
        opening = index

        if parentheses[opening + 1] == ']':
            ss.append(']')
            yes += 1

    elif p == '{':
        ss.append(p)
        opening = index

        if parentheses[opening + 1] == '}':
            ss.append('}')
            yes += 1


a = 5