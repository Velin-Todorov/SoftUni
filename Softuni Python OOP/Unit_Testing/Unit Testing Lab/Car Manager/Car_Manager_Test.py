#  Tests
#  Testing make
#  Initialization
#  Model
#  Fuel consumption
#  Fuel capacity
#  Fuel amount
#  refuel
#  drive

import unittest
from Car_Manager import Car


class Car_Manager_Test(unittest.TestCase):

    def setUp(self) -> None:
        self.car = Car('Test', 'TestModel', 10, 100)

    def test_initialization(self):
        self.assertEqual('Test', self.car.make)
        self.assertEqual('TestModel', self.car.model)
        self.assertEqual(100, self.car.fuel_capacity)
        self.assertEqual(10, self.car.fuel_consumption)
        self.assertEqual(0, self.car.fuel_amount)

    def test_exceptions_with_invalid_make(self):
        with self.assertRaises(Exception) as ex:
            self.car.make = ''

        self.assertIsNotNone(ex)

    def test_model_testing_property(self):
        with self.assertRaises(Exception) as ex:
            self.car.model = ''

        self.assertIsNotNone(ex)

    def test_fuel_consumption_property(self):

        with self.assertRaises(Exception) as ex:
            self.car.fuel_consumption = -10

        self.assertIsNotNone(ex)

    def test_fuel_capacity_property(self):

        with self.assertRaises(Exception) as ex:
            self.car.fuel_capacity = -10

        self.assertIsNotNone(ex)

    def test_fuel_amount(self):

        with self.assertRaises(Exception) as ex:
            self.car.fuel_amount = -1

        self.assertIsNotNone(ex)

    def test_refuel_parameter(self):
        with self.assertRaises(Exception) as ex:
            self.car.refuel(-10)

        self.assertIsNotNone(ex)

    def test_refuel(self):
        self.car.fuel_amount = 50
        self.car.fuel_amount += 10

        self.assertEqual(60, self.car.fuel_amount)

    def test_refuel_exceeding_capacity(self):
        self.car.refuel(110)

        self.assertEqual(100, self.car.fuel_amount)

    def test_distance_to_be_driven(self):
        self.car.fuel_amount = 11

        with self.assertRaises(Exception) as ex:
            self.car.drive(200)

        self.assertIsNotNone(ex)

    def test_drive(self):
        self.car.fuel_amount = 0

        with self.assertRaises(Exception) as ex:
            self.car.drive(100)

        self.assertIsNotNone(ex)


if __name__ == '__main__':
    unittest.main()