class sequence_repeat:

    def __init__(self, sequence, number):
        self.sequence = sequence
        self.number = number
        self.start_index = 0
        self.counter = 0

    def __iter__(self):
        return self

    def __next__(self):

        if len(self.sequence) == self.number or len(self.sequence) > self.number:
            if self.start_index >= self.number:
                raise StopIteration
            char = self.sequence[self.start_index]
            self.start_index += 1
            return char

        else:
            if self.start_index >= len(self.sequence):
                self.start_index = 0

            if self.counter >= self.number:
                raise StopIteration

            char = self.sequence[self.start_index]
            self.start_index += 1
            self.counter += 1
            return char


result = sequence_repeat('abc', 5)
for item in result:
    print(item, end ='')
