from IntgrLst import IntegerList
import unittest


class ListTest(unittest.TestCase):

    def test_adding_an_element_to_the_list(self):
        integers = IntegerList(1, 4, 3, 2, 5)
        integers.add(6)
        self.assertEqual(6, len(integers.get_data()))

    def test_adding_an_invalid_element(self):
        integers = IntegerList(1, 4, 3, 2, 5)

        with self.assertRaises(ValueError) as ex:
            integers.add('abc')

        self.assertIsNotNone(ex)

    def test_remove_element_at_the_given_index(self):
        integers = IntegerList(1, 2, 4, 5, 6, 8)

        integers.remove_index(1)
        self.assertEqual(5, len(integers.get_data()))

    def test_remove_element_when_index_is_outside_list(self):
        integers = IntegerList(1, 2, 4, 5, 6, 8)

        with self.assertRaises(IndexError) as ex:
            integers.remove_index(len(integers.get_data()) + 1)

        self.assertIsNotNone(ex)

    def test_init_method(self):
        integers = IntegerList(1)

        self.assertEqual([1], integers._IntegerList__data)

    def test_init_method_with_invalid_input(self):
        integers = IntegerList('abc')

        self.assertEqual([], integers.get_data())

    def testing_get_method(self):
        integers = IntegerList(2, 3, 4, 5, 1, 6)
        result = integers.get(1)

        self.assertEqual(3, result)

    def testing_get_method_invalid_index(self):
        integers = IntegerList(2, 3, 4, 5, 1, 6)

        with self.assertRaises(IndexError) as ex:
            integers.get(len(integers.get_data()) + 1)

        self.assertIsNotNone(ex)

    def testing_insert_method(self):
        integers = IntegerList(2, 3, 4, 5, 1, 6, 8)
        integers.insert(0, 7)

        self.assertEqual(integers.get(0), 7)

    def testing_insert_method_with_invalid_index(self):
        integers = IntegerList(2, 3, 4, 5, 6)

        with self.assertRaises(IndexError) as ex:
            integers.insert(len(integers.get_data()), 3)

        self.assertEqual(5, len(integers.get_data()))

    def testing_insert_method_with_invalid_value(self):
        integers = IntegerList(2, 3, 4, 5, 6)

        with self.assertRaises(ValueError) as ex:
            integers.insert(0, 'abc')

        self.assertEqual(5, len(integers.get_data()))

    def test_get_biggest_element(self):
        integer = IntegerList(-100, 0, 2, 3, 4, 50, 60, 10, 11)
        result = integer.get_biggest()

        self.assertEqual(60, result)

    def test_get_index_element(self):
        integer = IntegerList(-100, 0, 2, 3, 4, 50, 60, 10, 11)
        result = integer.get_index(2)

        self.assertEqual(2, result)


if __name__ == '__main__':
    unittest.main()