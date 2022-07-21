def is_prime(number):

    if number <= 1:
        return False

    for i in range(2, number):
        if number % i == 0:
            return False
    return True


def get_primes(numbers):
    for number in numbers:
        if is_prime(number):
            yield number
