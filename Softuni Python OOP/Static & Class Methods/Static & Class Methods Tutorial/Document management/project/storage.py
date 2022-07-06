from project.category import Category
from project.topic import Topic
from project.document import Document

class Storage:
    def __init__(self):
        self.categories = []
        self.topics = []
        self.documents = []

    def add_category(self, category: Category):
        if category in self.categories:
            return
        self.categories.append(category)

    def add_topic(self, topic: Topic):
        if topic in self.topics:
            return
        self.topics.append(topic)

    def add_document(self, document: Document):
        if document in self.documents:
            return
        self.documents.append(document)

    def edit_category(self, category_id: int, new_name: str):
        category = self.__get_obj_by_id(self.categories ,category_id)
        category.name = new_name

    def edit_topic(self, topic_id: int, new_topic: str, new_storage_folder: str):
        topic = self.__get_obj_by_id(self.topics,  topic_id)
        topic.topic = new_topic
        topic.storage_folder = new_storage_folder

    def edit_document(self, document_id: int, new_file_name: str):
        document = self.__get_obj_by_id(self.documents, document_id)
        document.file_name = new_file_name

    def delete_category(self, category_id):
        category = self.__get_obj_by_id(self.categories, category_id)

        if category not in self.categories:
            return
        self.categories.remove(category)

    def delete_topic(self, topic_id):
        topic = self.__get_obj_by_id(self.topics, topic_id)

        if topic not in self.topics:
            return

        self.topics.remove(topic)

    def delete_document(self, document_id):
        document = self.__get_obj_by_id(self.documents, document_id)

        if document not in self.documents:
            return
        self.documents.remove(document)

    def get_document(self, document_id):
        document = self.__get_obj_by_id(self.documents, document_id)
        return document

    def __repr__(self):
        result = ''

        for doc in self.documents:
            result += repr(doc) + '\n'

        return result

    def __get_obj_by_id(self, objects, id):
        for obj in objects:
            if obj.id == id:
                return obj