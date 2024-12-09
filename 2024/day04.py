import re
with open('day04.txt', 'r') as file:
    data = file.read()

    lines = data.splitlines()

    
    total = 0
    def countXmas(line):
        found = 0   
        pattern = r"XMAS"
        matches = re.findall(pattern,line)
        found += len(matches)
        matches = re.findall(pattern,line [::-1])
        found += len(matches)
        return found
    def countMas(line):
        pattern = r"MAS"
        print(line)
        print(line [::-1])
        return re.findall(pattern,line) or re.findall(pattern,line [::-1])
    matrix = list()
    for i in range(len(lines)):
        matrix.append(list(lines[i]))
    print(matrix)

    def checkMatrix(matrix):
        total = 0
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if i +3 < len(matrix):
                    total += countXmas(''.join([matrix[i][j],matrix[i+1][j],matrix[i+2][j],matrix[i+3][j]]))
                if j + 3 < len(matrix[i]):
                    total += countXmas(''.join([matrix[i][j],matrix[i][j+1],matrix[i][j+2],matrix[i][j+3]]))
                if i +3 < len(matrix) and j + 3 < len(matrix[i]):
                    total += countXmas(''.join([matrix[i][j],matrix[i+1][j+1],matrix[i+2][j+2],matrix[i+3][j+3]]))
                    total += countXmas(''.join([matrix[i][j+3],matrix[i+1][j+2],matrix[i+2][j+1],matrix[i+3][j]]))
        
        print(total)
    def checkXmasMatrix(matrix):
        total = 0
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if i + 2 < len(matrix) and j + 2 < len(matrix[i]):
                    if countMas(''.join([matrix[i][j],matrix[i+1][j+1],matrix[i+2][j+2]])) and countMas(''.join([matrix[i][j+2],matrix[i+1][j+1],matrix[i+2][j]])):
                        total += 1
        
        print(total)
    # total += countHorisontalXmas(lines)
    checkMatrix(matrix)
    checkXmasMatrix(matrix)