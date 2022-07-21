class take_skip:
    def __init__(self, step: int, count: int):
        self.step = step
        self.count = count
        self.start = 0
        self.value = 0
        self.value -= self.step

    def __iter__(self):
        return self

    def __next__(self):
        self.value += self.step
        self.start += 1

        if self.start > self.count:
            raise StopIteration

        return self.value


numbers = take_skip(2, 6)
for number in numbers:
    print(number)