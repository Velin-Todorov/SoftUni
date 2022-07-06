class ExercisePlan:
    ID = 1

    def __init__(self, trainer_id: int, equipment_id: int, duration: int):
        self.id = ExercisePlan.get_next_id()
        self.trainer_id = trainer_id
        self.equipment_id = equipment_id
        self.duration = duration

    @staticmethod
    def get_next_id():
        res = ExercisePlan.ID
        ExercisePlan.ID += 1
        return res

    @classmethod
    def from_hours(cls, trained_id: int, equipment_id: int, hours: int):
        duration = hours * 60
        return cls(trained_id, equipment_id, duration)

    def __repr__(self):
        return f'Plan <{self.id}> with duration {self.duration} minutes'

