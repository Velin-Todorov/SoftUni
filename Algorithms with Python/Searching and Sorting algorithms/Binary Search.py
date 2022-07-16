def exists(nums, query):

    if query in nums:
        return True

    return False


def binary_search(nums, query):
    lo = 0
    hi = len(nums) - 1

    if exists(nums, query):
        while lo <= hi:
            mid = (lo + hi) // 2
            mid_number = nums[mid]

            if mid_number == query:
                return mid

            elif mid_number < query:
                lo = mid + 1

            elif mid_number > query:
                hi = mid - 1
    return - 1


numbers = [int(x) for x in input().split()]
query = int(input())

print(binary_search(numbers, query))

