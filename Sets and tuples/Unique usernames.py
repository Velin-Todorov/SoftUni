def consecutiveOnes(bin_n):
    bin_len = len(bin_n)
    count = 0
    result = 0

    for i in range(bin_len):

        if bin_n[i] == '0':
            count = 0

        else:
            count += 1
            result = max(result, count)

    return result


if __name__ == '__main__':
    n = int(input())
    binary_n = bin(n)[2:]

    print(consecutiveOnes(binary_n))








