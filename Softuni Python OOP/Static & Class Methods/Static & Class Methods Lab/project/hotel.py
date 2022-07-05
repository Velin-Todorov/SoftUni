from project.room import Room


class Hotel:
    def __init__(self, name):
        self.name = name
        self.rooms = []
        self.guests = 0

    @classmethod
    def from_stars(cls, stars_count: int):
        return cls(f'{stars_count} stars Hotel')

    def add_room(self, room: Room):
        self.rooms.append(room)

    def take_room(self, room_number, people):
        for room in self.rooms:
            if room.number == room_number:
                if room.capacity >= people and not room.is_taken:
                    room.is_taken = True
                    room.guests += people
                    self.guests += people

    def free_room(self, room_number):
        for room in self.rooms:
            if room.number == room_number:
                if room.is_taken:
                    room.is_taken = False
                    self.guests -= room.guests
                    room.guests = 0

    def status(self):
        result = f'Hotel {self.name} has {self.guests} total guests\n'
        result += f'Free rooms: {", ".join(str(s.number) for s in self.rooms if not s.is_taken)}\n'
        result += f'Taken rooms: {", ".join(str(s.number) for s in self.rooms if s.is_taken)}'
        return result