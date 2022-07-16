def bubble_sort(nums):
    is_sorted = False
    counter = 0

    while not is_sorted:
        is_sorted = True
        for i in range(1, len(nums) - counter):

            if nums[i] < nums[i - 1]:
                nums[i], nums[i - 1] = nums[i - 1], nums[i]
                is_sorted = False
        counter += 1
    return nums


nums = [int(x) for x in input().split()]

print(*bubble_sort(nums), sep=' ')
