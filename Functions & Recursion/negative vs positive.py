def Numbers(*args):
    positive_sum = 0
    negative_sum = 0
    result = ''

    for i in args:
        if i < 0:
            negative_sum += i
        else:
            positive_sum += i

    print(negative_sum)
    print(positive_sum)

    if abs(negative_sum) > positive_sum:
        result = "The negatives are stronger than the positives"

    elif positive_sum > abs(negative_sum):
        result = "The positives are stronger than the negatives"

    return result


numbers = [int(x) for x in input().split()]

print(Numbers(*numbers))
