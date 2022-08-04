from project.car.car import Car
from project.car.muscle_car import MuscleCar
from project.car.sports_car import SportsCar
from project.driver import Driver
from project.race import Race


class Controller:

    def __init__(self):
        self.cars = []
        self.drivers = []
        self.races = []

    def car_exists_in_cars(self, car_model):
        """"This checks if a car is already in the cars' list"""
        check = [x.model for x in self.cars if x.model == car_model]

        if check:
            return True
        return False

    def driver_exists_in_drivers(self, driver_name):
        """"This checks if a driver is already in the drivers' list"""
        check = [x.name for x in self.drivers if x.name == driver_name]

        if check:
            return True
        return False

    def race_exists_in_races(self, race_name):
        """This checks if a race is already in the races' list"""
        check = [x.name for x in self.races if x.name == race_name]

        if check:
            return True
        return False

    def create_car(self, car_type: str, model: str, speed_limit: int):
        valid_car_types = ['MuscleCar', 'SportsCar']

        if self.car_exists_in_cars(model):
            raise Exception(f'Car {model} is already created!')

        if car_type not in valid_car_types:
            return
        car = 0
        for _ in valid_car_types:
            if car_type == 'MuscleCar':
                car = MuscleCar(model, speed_limit)
                break
            car = SportsCar(model, speed_limit)

        self.cars.append(car)
        return f"{car_type} {model} is created."

    def create_driver(self, driver_name: str):
        if self.driver_exists_in_drivers(driver_name):
            raise Exception(f'Driver {driver_name} is already created!')
        driver = Driver(driver_name)
        self.drivers.append(driver)
        return f'Driver {driver_name} is created.'

    def create_race(self, race_name: str):
        if self.race_exists_in_races(race_name):
            raise Exception(f"Race {race_name} is already created!")

        race = Race(race_name)
        self.races.append(race)
        return f'Race {race_name} is created.'

    def add_car_to_driver(self, driver_name: str, car_type: str):
        if not self.driver_exists_in_drivers(driver_name):
            raise Exception(f'Driver {driver_name} could not be found!')

        availability = [x for x in self.cars if not x.is_taken]
        available_car = availability[-1]

        if not availability or available_car.__class__.__name__ not in ['MuscleCar', 'SportsCar']:
            raise Exception(f"Car {car_type} could not be found!")

        has_car = [x for x in self.drivers if x.car is not None and x.name == driver_name]

        if has_car:
            driver = has_car[0]
            old_car = driver.car
            old_car.is_taken = False
            new_car = available_car.model
            driver.car = available_car
            available_car.is_taken = True
            return f'Driver {driver_name} changed his car from {old_car.model} to {new_car}.'

        if self.driver_exists_in_drivers(driver_name) and not has_car:
            find_driver = [x for x in self.drivers if x.name == driver_name]
            driver = find_driver[0]
            last_car = [x for x in self.cars if not x.is_taken][-1]
            last_car.is_taken = True
            driver.car = last_car
            return f'Driver {driver_name} chose the car {last_car.model}.'

    def add_driver_to_race(self, race_name, driver_name: str):
        if not self.race_exists_in_races(race_name):
            raise Exception(f'Race {race_name} could not be found!')

        if not self.driver_exists_in_drivers(driver_name):
            raise Exception(f'Driver {driver_name} could not be found!')

        has_car = [x for x in self.drivers if x.car is not None and x.name == driver_name]

        if not has_car:
            raise Exception(f'Driver {driver_name} could not participate in the race!')

        race = [x for x in self.races if x.name == race_name][0]
        has_participated = [x for x in self.drivers if x.name == driver_name and x in race.drivers]
        driver = [x for x in self.drivers if x.name == driver_name][0]

        if has_participated:
            return f'Driver {driver_name} is already added in {race_name} race.'

        race.drivers.append(driver)
        return f'Driver {driver_name} added in {race_name} race.'

    def start_race(self, race_name: str):
        result = ''
        if not self.race_exists_in_races(race_name):
            raise Exception(f'Race {race_name} could not be found!')

        race = [x for x in self.races if x.name == race_name][0]

        if len(race.drivers) < 3:
            raise Exception(f'Race {race_name} cannot start with less than 3 participants!')

        top_3_cars_and_racers = list(sorted(race.drivers, key=lambda x: -x.car.speed_limit))[:3]

        for driver in top_3_cars_and_racers:
            driver.number_of_wins += 1
            result += f'Driver {driver.name} wins the {race_name} with a speed of {driver.car.speed_limit}.\n'

        return result

