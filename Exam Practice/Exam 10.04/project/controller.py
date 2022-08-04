from project.player import Player
from project.supply.drink import Drink
from project.supply.food import Food


class Controller:
    def __init__(self):
        self.players = []
        self.supplies = []

    def player_exists(self, player_name):
        check = [x for x in self.players if x.name == player_name]

        if check:
            return True
        return False

    def add_player(self, *args):
        for player in args:
            if player not in self.players:
                self.players.append(player)

        return f"Successfully added: {', '.join(x.name for x in self.players)}"

    def add_supply(self, *args):
        for supply in args:
            self.supplies.append(supply)

    def sustain(self, player_name: str, sustenance_type: str):
        valid_sustenance_types = ['Food', 'Drink']
        supply = [x for x in self.supplies if x.__class__.__name__ == sustenance_type].pop()
        player = [x for x in self.players if x.name == player_name][0]

        if sustenance_type not in valid_sustenance_types:
            return

        if not player:
            return

        if sustenance_type == 'Food':
            if not supply:
                raise Exception("There are no food supplies left!")

        if sustenance_type == 'Drink':
            if not supply:
                raise Exception("There are no drink supplies left!")

        if player.stamina == 100:
            self.supplies.append(supply)
            return f'{player_name} has enough stamina.'

        else:
            player.stamina += supply.energy

            if player.stamina + supply.energy > 100:
                player.stamina = 100

            return f'{player_name} sustained successfully with {supply.name}'

    def duel(self, first_player_name: str, second_player_name: str):

        winner = ''
        first_attacker = 0
        second_attacker = 0

        first_player = [x for x in self.players if x.name == first_player_name][0]
        second_player = [x for x in self.players if x.name == second_player_name][0]

        if first_player.stamina <= 0 and second_player.stamina <= 0:
            first_player.stamina = 0
            second_player.stamina = 0

            return f'Player {first_player.name} does not have enough stamina.' + '\n' \
                   + f'Player {second_player.name} does not have enough stamina.'

        if first_player.stamina <= 0:
            first_player.stamina = 0
            return f'Player {first_player.name} does not have enough stamina.'

        if second_player.stamina <= 0:
            second_player.stamina = 0
            return f'Player {second_player.name} does not have enough stamina.'

        if second_player.stamina > first_player.stamina:
            first_attacker = first_player
            second_attacker = second_player

        else:
            first_attacker = second_player
            second_attacker = first_player

        second_attacker.stamina -= (0.5 * first_attacker.stamina)
        first_attacker, second_attacker = second_attacker, first_attacker

        if first_attacker.stamina <= 0:
            first_attacker.stamina = 0
            winner = second_attacker.name
            return f'Winner: {winner}'

        if second_attacker.stamina <= 0:
            second_attacker.stamina = 0
            winner = first_attacker.name
            return f'Winner: {winner}'

        if second_attacker.stamina > first_attacker.stamina:
            return f'Winner: {second_attacker.name}'
        else:
            return f'Winner: {first_attacker.name}'

    def next_day(self):
        # foods = [x for x in self.supplies if x.__class__.__name__ == 'Food']
        # drinks = [x for x in self.supplies if x.__class__.__name__ == 'Drink']

        c = Controller()

        for player in self.players:
            player.stamina -= (2 * player.age)

            if player.stamina <= 0:
                player.stamina = 0

            c.sustain(player.name, 'Food')
            c.sustain(player.name, 'Drink')



controller = Controller()
apple = Food("apple", 22)
cheese = Food("cheese")
juice = Drink("orange juice")
water = Drink("water")
first_player = Player('Peter', 15)
second_player = Player('Lilly', 12, 94)
print(controller.add_supply(cheese, apple, cheese, apple, juice, water, water))
print(controller.add_player(first_player, second_player))
print(controller.duel("Peter", "Lilly"))
print(controller.add_player(first_player))
print(controller.sustain("Lilly", "Drink"))
first_player.stamina = 0
print(controller.duel("Peter", "Lilly"))
print(first_player)
print(second_player)
controller.next_day()
