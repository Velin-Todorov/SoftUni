def age_assignment(*args, **kwargs):
    names_ages = {}

    for name in args:
        for n, age in kwargs.items():
            if name[0] == n:
                names_ages[name] = age

    return names_ages


print(age_assignment("Amy", "Bill", "Willy", W=36, A=22, B=61))
