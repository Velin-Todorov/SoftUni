import abc


class Vehicle(abc.ABC):
    def __init__(self, fuel_quantity, fuel_consumption):
        self.fuel_quantity = fuel_quantity
        self.fuel_consumption = fuel_consumption

    @abc.abstractmethod
    def drive(self, distance):
        pass

    @abc.abstractmethod
    def refuel(self, fuel):
        pass


class Car(Vehicle):
    def __init__(self, fuel_quantity, fuel_consumption):
        super().__init__(fuel_quantity, fuel_consumption)

    def total_fuel_consumption(self, distance):
        total = (self.fuel_consumption + 0.9) * distance
        return total

    def drive(self, distance):
        if self.fuel_quantity >= self.total_fuel_consumption(distance):
            self.fuel_quantity -= self.total_fuel_consumption(distance)

    def refuel(self, fuel):
        self.fuel_quantity += fuel


class Truck(Vehicle):
    def __init__(self, fuel_quantity, fuel_consumption):
        super().__init__(fuel_quantity, fuel_consumption)

    def total_fuel_consumption(self, distance):
        total = (self.fuel_consumption + 1.6) * distance
        return total

    def drive(self, distance):
        if self.fuel_quantity >= self.total_fuel_consumption(distance):
            self.fuel_quantity -= self.total_fuel_consumption(distance)

    def refuel(self, fuel):
        self.fuel_quantity += 0.95 * fuel
