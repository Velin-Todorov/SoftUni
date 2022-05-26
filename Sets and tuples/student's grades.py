def avg(arr):
    arr = [float(x) for x in arr]
    return sum(arr) / len(arr)


number_of_students = int(input())
school_book = {}

for stud in range(number_of_students):
    name, grade = tuple(input().split())

    if name not in school_book:
        school_book[name] = []
    school_book[name].append(float(grade))


for k, v in school_book.items():
    print(f'{k} -> {" ".join(str(f"{s:.2f}") for s in v)} (avg: {avg(v):.2f})')
