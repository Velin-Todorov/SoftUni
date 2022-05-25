from collections import deque


def check_word(word):
    result = ''

    if word in 'rose':
        result = 'rose'

    if word in 'tulip':
        result = 'tulip'

    if word in 'lotus':
        result = 'lotus'

    if word in 'daffodil':
        result = 'daffodil'

    return result


vowels = deque([x for x in input().split()])
consonants = [x for x in input().split()]

vow = []
con = []

found = False
word = ''

while True:

    if not vowels or not consonants  or found is True:
        break

    vowel = vowels.popleft()
    consonant = consonants.pop()

    if consonant in 'rose' or consonant in 'tulip' or consonant in 'lotus' or consonant in 'daffodil':
        word += consonant

    if check_word(word):
        found = True

    if vowel in 'rose' or vowel in 'tulip' or vowel in 'lotus' or vowel in 'daffodil':
        word += vowel

    if check_word(word):
        found = True

    else:
        found = False

print(check_word(word))

