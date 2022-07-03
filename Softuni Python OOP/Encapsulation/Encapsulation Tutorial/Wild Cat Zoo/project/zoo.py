from project.animal import Animal
from project.worker import Worker


class Zoo:
    def __init__(self, name, budget, animal_capacity, workers_capacity):
        self.name = name
        self.__budget = budget
        self.__animal_capacity = animal_capacity
        self.__workers_capacity = workers_capacity
        self.animals = []
        self.workers = []

    def add_animal(self, animal: Animal, price):

        if len(self.animals) < self.__animal_capacity and self.__budget > 0:
            self.animals.append(animal)
            self.__budget -= price
            return f'{animal.name} the {animal.__class__.__name__} added to the zoo'

        if len(self.animals) > self.__animal_capacity and self.__budget <= 0:
            return f'Not enough budget'

        return f'Not enough space for animal'

    def hire_worker(self, worker: Worker):
        if len(self.workers) < self.__workers_capacity:
            self.workers.append(worker)
            return f'{worker.name} the {worker.__class__.__name__} hired successfully'

        return 'Not enough space for worker'

    def fire_worker(self, worker_name):
        for worker in self.workers:
            if worker.name == worker_name:
                self.workers.remove(worker)
                return f'{worker_name} fired successfully'

        return f'There is no {worker_name} in the zoo'

    def pay_workers(self):
        sum_salary = 0

        for worker in self.workers:
            sum_salary += worker.salary

        if self.__budget >= sum_salary:
            self.__budget -= sum_salary
            return f'You payed your workers. They are happy. Budget left: {self.__budget}'

        return f"You have no budget to pay your workers. They are unhappy"

    def tend_animals(self):

        costs_to_tend_animals = 0
        for animal in self.animals:
            costs_to_tend_animals += animal.money_for_care

        if self.__budget >= costs_to_tend_animals:
            self.__budget -= costs_to_tend_animals
            return f'You tended all the animals. They are happy. Budget left: {self.__budget}'

        return f'You have no budget to tend the animals. They are unhappy.'

    def profit(self, amount):
        self.__budget += amount

    def __build_result_animal(self, animal_type):
        counter = 0
        result = ''
        for animal in self.animals:
            if animal.__class__.__name__ == animal_type:
                counter  += 1
                result += repr(animal) + '\n'
        return f'----- {counter} {animal_type}s:\n' + result

    def __build_result_workers(self, worker_type):
        counter = 0
        result = ''
        for worker in self.workers:
            if worker.__class__.__name__ == worker_type:
                counter += 1
                result += repr(worker) + '\n'
        return f'----- {counter} {worker_type}s:\n' + result

    def animals_status(self):
        result = f'You have {len(self.animals)} animals\n'
        result += self.__build_result_animal('Lion')
        result += self.__build_result_animal('Tiger')
        result += self.__build_result_animal('Cheetah')

        return result.strip()

    def workers_status(self):
        result = f'You have {len(self.workers)} workers\n'
        result += self.__build_result_workers('Keeper')
        result += self.__build_result_workers('Caretaker')
        result += self.__build_result_workers('Vet')

        return result