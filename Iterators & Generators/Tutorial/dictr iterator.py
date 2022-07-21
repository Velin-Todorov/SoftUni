class dictionary_iter:

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary
        self.key = None
        self.value = None
        self.count = 0
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        dict_as_list = list(self.dictionary.items())

        if self.count == len(self.dictionary):
            raise StopIteration

        result = dict_as_list[self.index]
        self.index += 1
        self.count += 1

        return result


result = dictionary_iter({"name": "Peter", "age": 24})
for x in result:
    print(x)