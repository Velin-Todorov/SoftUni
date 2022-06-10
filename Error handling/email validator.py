class NameTooShortError(Exception):
    """Name must be more than 4 characters"""
    pass


class MustContainAtSymbolError(Exception):
    """Email must contain @"""
    pass


class InvalidDomainError(Exception):
    """Domain must be one of the following: .com, .bg, .org, .net"""
    pass


domains = {'com', 'bg', 'org', 'net'}

while True:
    emails = input()

    if emails == 'End':
        break

    data = emails.split('@')

    if '@' not in emails:
        raise MustContainAtSymbolError('Email must contain @')

    if len(data) == 2:
        name = data[0]
        rest = data[1]
        domain = rest.split('.')[-1]

        if len(name) <= 4:
            raise NameTooShortError('Name must be more than 4 characters')

        if domain not in domains:
            raise InvalidDomainError('Domain must be one of the following: .com, .bg, .org, .net')

        print('Email is valid')
