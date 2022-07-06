import math


class PhotoAlbum:
    def __init__(self, pages: int):
        self.pages = pages
        self.photos = self.__build_album()

    @classmethod
    def from_photos_count(cls, photos_count: int):
        pages = math.ceil(photos_count / 4)
        return cls(pages)

    def add_photo(self, label: str):
        for row_idx in range(len(self.photos)):
            if len(self.photos[row_idx]) < 4:
                self.photos[row_idx].append(label)
                return f'{label} photo added successfully on page {row_idx + 1} slot {len(self.photos[row_idx])}'

        return f'No more free slots'

    def __build_album(self):
        result = []
        for _ in range(self.pages):
            result.append([])

        return result

    def display(self):
        separator = '-' * 11
        result = separator + '\n'

        for row in self.photos:
            result += ' '.join(['[]' for _ in row]) + '\n' + separator + '\n'

        return result.strip()
