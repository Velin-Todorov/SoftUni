def math_operations(*args, **kwargs):

    list_of_numbers = list(args)
    count = 0
    for num in args:

        if count == 0:
            kwargs['a'] += num
            count += 1

        elif count == 1:
            kwargs['s'] -= num
            count += 1

        elif count == 2:

            if num != 0:
                kwargs['d'] /= num
                count += 1

            else:
                list_of_numbers.remove(num)
                count += 1

        elif count == 3:
            kwargs['m'] *= num
            count += 1
            count = 0

    return kwargs

