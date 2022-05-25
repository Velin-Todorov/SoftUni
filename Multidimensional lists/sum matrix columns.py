n, m = [int(x) for x in input().split(', ')]

matrix = [[int(x) for x in input().split(' ')] for y in range(n)]

new_matrix = list(zip(*matrix))

sum_element = 0

for x in new_matrix:
    print(sum(x))





