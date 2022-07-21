class countdown_iterator:
    def __init__(self, count):
        self.count = count
        self.start = self.count
        self.end = 0
        self.value = self.count + 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.start < self.end:
            raise StopIteration

        self.value -= 1
        self.start -= 1
        return self.value



iterator = countdown_iterator(0)
for item in iterator:
    print(item, end=" ")