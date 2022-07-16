def selection_sort(nums):

    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):

            if nums[i] > nums[j]:
                nums[i], nums[j] = nums[j], nums[i]

    return nums


nums = [int(x) for x in input().split()]

print(*selection_sort(nums), sep=' ')
