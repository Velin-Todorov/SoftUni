class vowels:
    vowels = 'aeiuyo'

    def __init__(self, string):
        self.string = string
        self.start_index = 0
        self.end_index = len(string) - 1

    def __iter__(self):
        return self

    def __next__(self):
        while self.start_index <= self.end_index:
            char = self.string[self.start_index]
            if char.lower() in self.vowels:
                self.start_index += 1
                return char
            self.start_index += 1

        raise StopIteration


my_string = vowels('Abcedifuty0o')
for char in my_string:
    print(char)