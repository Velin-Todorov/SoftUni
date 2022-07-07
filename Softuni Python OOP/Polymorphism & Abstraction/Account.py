class Account:
    def __init__(self, owner: str):
        self.owner = owner
        self.amount = 0
        self._transactions = []

    def add_transaction(self, amount):
        if type(amount) != int:
            raise ValueError('please use int for amount')
        self._transactions.append(amount)


    @property
    def balance(self):
        return self.amount + sum(self._transactions)

    def validate_transactions(self, account: Account, amount_to_add):
        if
