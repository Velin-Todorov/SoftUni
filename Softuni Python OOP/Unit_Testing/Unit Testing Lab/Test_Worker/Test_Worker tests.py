import unittest
#from Test_Worker import Worker


class WorkerTests(unittest.TestCase):
    NAME = 'Test Worker'
    SALARY = 1000
    ENERGY = 2
    MONEY = 0

    def setUp(self):
        self.worker = Worker(self.NAME, self.SALARY, self.ENERGY)

    def test_if_class_has_initialized_correctly(self):
        self.assertEqual(self.NAME, self.worker.name)
        self.assertEqual(self.SALARY, self.worker.salary)
        self.assertEqual(self.ENERGY, self.worker.energy)
        self.assertEqual(0, self.worker.money)

    def test_if_energy_increments_after_rest_method(self):
        self.worker.rest()
        self.assertEqual(self.ENERGY + 1, self.worker.energy)

    def test_if_trying_to_work_with_negative_or_zero_energy(self):
        worker = Worker(self.NAME, self.SALARY, 0)

        with self.assertRaises(Exception) as ex:
            worker.work()

        self.assertIsNotNone(ex)

    def test_if_worker_money_increases_after_salary_method_is_called(self):
        self.worker.work()
        self.worker.work()
        self.assertEqual(2 * self.SALARY, self.worker.money)

    def test_if_worker_energy_decreases_after_work_method_called(self):
        self.worker.work()
        self.assertEqual(self.ENERGY - 1, self.worker.energy)

    def test_if_string_method_return_correct_values(self):
        expected_result = f'{self.NAME} has saved {0} money.'
        self.assertEqual(expected_result, self.worker.get_info())


if __name__ == '__main__':
    unittest.main()
