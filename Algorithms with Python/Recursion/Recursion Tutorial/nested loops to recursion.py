"""
Write a program that simulates the execution of n nested loops from 1 to n which
prints the values of all its iteration variables at any given time on a single line. Use recursion.
"""


def recursive_1_to_n(idx, n, lst:list):

    if idx > len(lst) - 1:
        print(*lst)
        return

    for i in range(1, n + 1):
        lst[idx] = i
        recursive_1_to_n(idx + 1, n, lst)


n = int(input())
lst = [None] * n
recursive_1_to_n(0, n, lst)

