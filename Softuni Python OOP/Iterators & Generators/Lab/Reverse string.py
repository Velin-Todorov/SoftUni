def reverse_text(text: str):
    start = -1
    end = len(text) - 1
    step = -1

    for char in range(end, start, step):
        yield text[char]