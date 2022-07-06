class Trainer:
    ID = 1

    def __init__(self, name: str):
        self.name = name
        self.id = Trainer.get_next_id()

    @staticmethod
    def get_next_id():
        res = Trainer.ID
        Trainer.ID += 1
        return res

    def __repr__(self):
        return f'Trainer <{self.id}> {self.name}'
