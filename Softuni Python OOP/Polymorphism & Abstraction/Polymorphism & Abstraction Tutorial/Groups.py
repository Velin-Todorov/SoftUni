class Person:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname

    def __repr__(self):
        return f'{self.name} {self.surname}'

    def __add__(self, other):
        return Person(self.name, other.surname)


class Group:
    def __init__(self, name: str, people: list):
        self.name = name
        self.people = people

    def __len__(self):
        return len(self.people)

    def __add__(self, other):
        new_group = Group(f'{self.name} {other.name}', self.people + other.people)
        return new_group

    def __repr__(self):
        return f'Group {self.name} with members {", ".join(repr(s) for s in self.people)}'

    def __getitem__(self, idx):
        return f'Person {idx}: {self.people[idx]}'
