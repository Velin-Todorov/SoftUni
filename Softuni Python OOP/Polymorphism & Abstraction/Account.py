class Account:
    def __init__(self, owner: str, amount=0):
        self.owner = owner
        self.amount = amount
        self._transactions = []

    def add_transaction(self, amount):
        if not isinstance(amount, int):
            raise ValueError('please use int for amount')
        self._transactions.append(amount)

    @property
    def balance(self):
        return self.amount + sum(self._transactions)

    @staticmethod
    def validate_transactions(account, amount_to_add):
        new_balance = account.balance + amount_to_add
        if new_balance < 0:
            raise ValueError('sorry cannot go in debt!')

        account.add_transaction(amount_to_add)
        return f'New balance: {new_balance}'

    def __str__(self):
        return f'Account of {self.owner} with starting amount: {self.amount}'

    def __repr__(self):
        return f'Account({self.owner}, {self.amount})'

    def __len__(self):
        return len(self._transactions)

    def __getitem__(self, idx):
        return self._transactions[idx]

    def __reversed__(self):
        return self._transactions[::-1]

    def __eq__(self, other):
        return self.balance == other.balance

    def __le__(self, other):
        return self.balance <= other.balance

    def __gt__(self, other):
        return self.balance > other.balance

    def __add__(self, other):
        acc = Account(f'{self.owner}&{other.owner}', self.amount + other.amount)

        for trn in self._transactions:
            acc.add_transaction(trn)

        for trn in other._transactions:
            acc.add_transaction(trn)

        return acc