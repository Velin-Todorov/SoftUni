from collections import deque

vowels = [x for x in input().split()]
consonants = [x for x in input().split()]

vowels.sort()
consonants.sort()

print(vowels)
print(consonants)