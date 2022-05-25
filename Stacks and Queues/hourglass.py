def MatrixSum(arr):
    MAX_SUM = -float('inf')

    for i in range(1, len(arr) - 1):
        for j in range(1, len(arr) - 1):
            suma = 0
            suma += arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]
            suma += arr[i][j]
            suma += arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]

            if suma > MAX_SUM:
                MAX_SUM = suma

    return MAX_SUM


arr = []
for _ in range(6):
    arr.append(list(map(int, input().rstrip().split())))

print(MatrixSum(arr))



