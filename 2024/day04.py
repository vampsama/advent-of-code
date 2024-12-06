import re
with open('day04.txt', 'r') as file:
    data = file.read()

    lines = data.splitlines()

    pattern = r"XMAS"
    total = 0
    def countHorisontalXmas(lines):
        found = 0
        for line in lines:
            matches = re.findall(pattern,line)
            found += len(matches)
            matches = re.findall(pattern,line [::-1])
            found += len(matches)
        return found
    matrix = list()
    for i in range(len(lines)):
        matrix.append(list(lines[i]))
    print(matrix)
    total += countHorisontalXmas(lines)