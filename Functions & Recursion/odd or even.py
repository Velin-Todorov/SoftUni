def Odd_Or_Even(command, *args):
    odd_sum = 0
    even_sum = 0

    if command == 'Odd':
        odd_sum = sum([int(x) for x in args if x % 2 != 0])
        return odd_sum * len(args)

    elif command == 'Even':
        even_sum = sum([int(x) for x in args if x % 2 == 0])
        return even_sum * len(args)


command = input()
numbers = [int(x) for x in input().split()]
print(Odd_Or_Even(command, *numbers))

