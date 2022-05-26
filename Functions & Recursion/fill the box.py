def fill_the_box(height, length, width, *args):
    box_area = height * length * width
    failed = False
    left_cubes = 0

    for el in args:
        if el == 'Finish':
            break

        if el > box_area and not failed:
            failed = True
            left_cubes += el - box_area
            continue

        if failed:
            left_cubes += el

        else:
            box_area -= el

    if failed:
        return f"No more free space! You have {left_cubes} more cubes."

    else:
        return f"There is free space in the box. You could put {box_area} more cubes."


print(fill_the_box(2, 8, 2, 2, 1, 7, 3, 1, 5, "Finish"))