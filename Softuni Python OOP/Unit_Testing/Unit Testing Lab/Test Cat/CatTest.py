import unittest
#from Cat import Cat


class CatTest(unittest.TestCase):
    NAME = 'Test Cat'

    def setUp(self) -> None:
        self.cat = Cat(self.NAME)

    def test_cat_size_is_increased_after_eating(self):
        self.cat.eat()
        self.assertEqual(1, self.cat.size)

    def test_cat_is_fed_after_eating(self):
        self.cat.eat()
        self.assertTrue(self.cat.fed)

    def test_cannot_eat_after_cat_is_fed(self):
        self.cat.eat()

        with self.assertRaises(Exception) as ex:
            self.cat.eat()

        self.assertIsNotNone(ex)

    def test_cannot_fall_asleep_if_not_fed(self):
        # self.cat.sleep()

        with self.assertRaises(Exception) as ex:
            self.cat.sleep()

        self.assertIsNotNone(ex)

    def test_cat_is_not_sleepy_after_sleeping(self):
        self.cat.eat()
        self.cat.sleep()
        self.assertFalse(self.cat.sleepy)


if __name__ == '__main__':
    unittest.main()
