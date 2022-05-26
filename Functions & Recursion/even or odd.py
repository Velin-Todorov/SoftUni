def even_odd(*args):
    command = args[-1]
    new_args = list(args)
    new_args.pop()

    if command == 'even':
        return [int(x) for x in new_args if x % 2 == 0]

    elif command == 'odd':
        return [int(x) for x in new_args if x % 2 != 0]


print(even_odd(1, 2, 3, 4, 5, 6, "even"))