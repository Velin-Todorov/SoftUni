from collections import deque

substrings = deque(input().split())

main_colors = {"red", "yellow", "blue"}
secondary_colors = {"orange", "purple", "green"}

collected_color = []

while substrings:
    left = substrings.popleft()
    right = substrings.pop() if substrings else ''
    color = left + right

    if color in main_colors or color in secondary_colors:
        collected_color.append(color)
        continue

    color = right + left

    if color in main_colors or color in secondary_colors:
        collected_color.append(color)

    else:
        left = left[:-1]
        right = right[:-1]

        if left:
            substrings.insert(len(substrings) // 2, left)

        if right:
            substrings.insert(len(substrings) // 2, right)

secondary_required = {
    'orange': ['red', 'yellow'],
    'purple': ['red', 'blue'],
    'green': ['blue', 'yellow'],
}
for color in collected_color:
    if color in main_colors:
        continue
    required_color1, required_color2 = secondary_required[color]

    if not (required_color1 in collected_color) or not (required_color2 in collected_color):
        collected_color.remove(color)

print(collected_color)
