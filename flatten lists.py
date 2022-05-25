numbers = input().split('|')

matrix = []

for idx in range(len(numbers) - 1, -1, -1):
    elements = numbers[idx].split()
    matrix += elements

print(' '.join(matrix))

# Another solution 75/100
#
# import string
# numbers = input().split('|')
#
# matrix = []
#
# for x in numbers:
#     matrix.append([x.translate({ord(c): '' for c in string.whitespace})])
#
# matrix.reverse()
#
# for r in range(len(matrix)):
#     for c in range(len(matrix[r])):
#         for z in matrix[r][c]:
#             print(z, end=' ')


