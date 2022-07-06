from project.customer import Customer
from project.dvd import DVD


class MovieWorld:
    def __init__(self, name):
        self.name = name
        self.customers = []
        self.dvds = []

    @staticmethod
    def dvd_capacity():
        return 15

    @staticmethod
    def customer_capacity():
        return 10

    def get_obj_by_id(self, objects, id_given):
        for obj in objects:
            if obj.id == id_given:
                return obj

    def add_customer(self, customer: Customer):
        if len(self.customers) >= MovieWorld.customer_capacity():
            return

        self.customers.append(customer)

    def add_dvd(self, dvd: DVD):
        if len(self.dvds) >= MovieWorld.dvd_capacity():
            return

        self.dvds.append(dvd)

    def rent_dvd(self, customer_id: int, dvd_id: int):
        customer = self.get_obj_by_id(self.customers, customer_id)
        dvd = self.get_obj_by_id(self.dvds, dvd_id)

        if dvd in customer.rented_dvds:
            return f'{customer.name} has already rented {dvd.name}'

        if dvd.is_rented:
            return f'DVD is already rented'

        if customer.age < dvd.age_restriction:
            return f'{customer.name} should be at least {dvd.age_restriction} to rent this movie'

        customer.rented_dvds.append(dvd)
        dvd.is_rented = True

        return f'{customer.name} has successfully rented {dvd.name}'

    def return_dvd(self, customer_id, dvd_id):
        customer = self.get_obj_by_id(self.customers, customer_id)
        dvd = self.get_obj_by_id(self.dvds, dvd_id)

        if dvd not in customer.rented_dvds:
            return f'{customer.name} does not have that DVD'

        dvd.is_rented = False
        customer.rented_dvds.remove(dvd)
        return f'{customer.name} has successfully returned {dvd.name}'

    def __repr__(self):
        result = ''
        for c in self.customers:
            result += repr(c) + '\n'

        for d in self.dvds:
            result += repr(d) + '\n'

        return result




c1 = Customer("John", 16, 1)
c2 = Customer("Anna", 55, 2)

d1 = DVD("Black Widow", 1, 2020, "April", 18)
d2 = DVD.from_date(2, "The Croods 2", "23.12.2020", 3)

movie_world = MovieWorld("The Best Movie Shop")

movie_world.add_customer(c1)
movie_world.add_customer(c2)

movie_world.add_dvd(d1)
movie_world.add_dvd(d2)

print(movie_world.rent_dvd(1, 1))
print(movie_world.rent_dvd(2, 1))
print(movie_world.rent_dvd(1, 2))

print(movie_world)

