from project.astronaut.biologist import Biologist
from project.astronaut.geodesist import Geodesist
from project.astronaut.meteorologist import Meteorologist
from project.planet.planet import Planet


class SpaceStation:

    def __init__(self):
        self.planet_repository = []
        self.astronaut_repository = []
        self.success = 0
        self.failure = 0

    def check_if_planet_exists(self, name):
        planet = [x.name for x in self.planet_repository if x.name == name]

        if len(planet) == 0:
            return False
        return True

    def check_if_exists(self, name):
        astronaut = [x.name for x in self.astronaut_repository if x.name == name]

        if len(astronaut) == 0:
            return False
        return True

    def check_type_astronaut(self, astronaut_type, name):
        if astronaut_type == 'Biologist':
            astro_biologist = Biologist(name)
            return astro_biologist

        elif astronaut_type == 'Geodesist':
            astro_geodesist = Geodesist(name)
            return astro_geodesist

        elif astronaut_type == 'Meteorologist':
            astro_meteorologist = Meteorologist(name)
            return astro_meteorologist

    def add_astronaut(self, astronaut_type: str, name: str):
        valid_astronauts = {"Biologist", "Geodesist", "Meteorologist"}

        for astronaut in self.astronaut_repository:
            if astronaut.name == name:
                return f'{name} is already added.'

        if astronaut_type not in valid_astronauts:
            raise Exception("Astronaut type is not valid!")

        astronaut = self.check_type_astronaut(astronaut_type, name)

        self.astronaut_repository.append(astronaut)

        return f'Successfully added {astronaut_type}: {name}.'

    def add_planet(self, name: str, items: str):
        for planet in self.planet_repository:
            if planet.name == name:
                return f'{name} is already added.'

        planet = Planet(name)
        planet.items = items.split(', ')
        self.planet_repository.append(planet)

        return f'Successfully added Planet: {name}.'

    def retire_astronaut(self, name: str):
        exists = self.check_if_exists(name)

        if exists:
            for astronaut in self.astronaut_repository:
                if astronaut.name == name:
                    self.astronaut_repository.remove(astronaut)
                    return f'Astronaut {name} was retired!'
        else:
            raise Exception(f"Astronaut {name} doesn't exist!")

    def recharge_oxygen(self):
        for astronaut in self.astronaut_repository:
            astronaut.increase_oxygen(10)

    def send_on_mission(self, planet_name: str):
        exists = self.check_if_planet_exists(planet_name)
        astronauts_for_mission = []

        if not exists:
            raise Exception('Invalid planet name!')

        else:
            oxygen_above_30 = [x for x in self.astronaut_repository if x.oxygen > 30]
            sorted_descending_above_30 = sorted(oxygen_above_30, key=lambda x: (-x.oxygen))

            for astronaut in sorted_descending_above_30:
                astronauts_for_mission.append(astronaut)

                if len(astronauts_for_mission) >= 5:
                    break

            if not astronauts_for_mission:
                raise Exception(f'You need at least one astronaut to explore the planet!')

        gone_in_open_space = 0
        planet_to_be_explored = None
        for planet in self.planet_repository:
            if planet.name == planet_name:
                planet_to_be_explored = planet
                break

        for astronaut in astronauts_for_mission:
            if len(planet_to_be_explored.items) == 0:
                break

            while astronaut.oxygen > 0 and len(planet_to_be_explored.items) > 0:
                astronaut.backpack.append(planet_to_be_explored.items.pop())
                astronaut.breathe()
            gone_in_open_space += 1

        if not planet_to_be_explored.items:
            self.success += 1
            return f'Planet: {planet_name} was explored. {gone_in_open_space} astronauts participated in collecting items.'
        else:
            self.failure += 1
            return f'Mission is not completed'

    def report(self):
        result = f"{self.success} successful missions!\n{self.failure} missions were not completed!\nAstronauts' info:\n"

        for astronaut in self.astronaut_repository:
            result += f'Name: {astronaut.name}\nOxygen: {astronaut.oxygen}\nBackpack items: '
            if astronaut.backpack:
                result += f'{", ".join(astronaut.backpack)}'
            else:
                result += 'none'

        return result






