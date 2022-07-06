from project.customer import Customer
from project.equipment import Equipment
from project.exercise_plan import ExercisePlan
from project.subscription import Subscription
from project.trainer import Trainer


class Gym:
    def __init__(self):
        self.customers = []
        self.trainers = []
        self.equipment = []
        self.plans = []
        self.subscriptions = []

    def get_obj_by_id(self, objects, id_given):
        for obj in objects:
            if obj.id == id_given:
                return obj


    def check_len_customers(self):
        if len(self.customers) == 0:
            return True
        return False

    def check_if_in(self, objects, obj):
        if obj in objects:
            return True
        return False

    def add_customer(self, customer: Customer):
        if self.check_if_in(self.customers, customer):
            return
        self.customers.append(customer)

    def add_trainer(self, trainer: Trainer):
        if self.check_if_in(self.trainers, trainer):
            return
        self.trainers.append(trainer)

    def add_equipment(self, equipment: Equipment):
        if self.check_if_in(self.equipment, equipment):
            return
        self.equipment.append(equipment)

    def add_plan(self, plan: ExercisePlan):
        if self.check_if_in(self.plans, plan):
            return

        self.plans.append(plan)

    def add_subscription(self, subscription: Subscription):
        if self.check_if_in(self.subscriptions, subscription):
            return

        self.subscriptions.append(subscription)

    def subscription_info(self, subscription_id: int):
        subscription = self.get_obj_by_id(self.subscriptions, subscription_id)
        customer = self.get_obj_by_id(self.customers, subscription_id)
        trainer = self.get_obj_by_id(self.trainers, subscription_id)
        equipment = self.get_obj_by_id(self.equipment, subscription_id)
        plan = self.get_obj_by_id(self.plans, subscription_id)

        result = repr(subscription) + '\n' + repr(customer) + '\n' + repr(trainer) + '\n' + repr(equipment) + '\n' + repr(plan) + '\n'

        return result