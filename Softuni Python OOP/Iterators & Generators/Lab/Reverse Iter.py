class reverse_iter:
    def __init__(self, iterable):
        self.iterable = iterable
        self.start_index = 0
        self.end_index = len(iterable) - 1

    def __iter__(self):
        return self

    def __next__(self):
        value = self.iterable[self.end_index]
        if self.end_index < self.start_index:
            raise StopIteration
        self.end_index -= 1
        return value


reversed_list = reverse_iter([0, 1, 2, 3, 4, 5, 6])
for item in reversed_list:
    print(item)