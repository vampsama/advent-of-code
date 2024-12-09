import re
with open('day06.txt', 'r') as file:
    data = file.read()

    lines = data.splitlines()

    theMap = [list(line) for line in lines]
    def turnMapCounterClockwise(m):
        return [[m[j][i] for j in range(len(m))] for i in range(len(m[0])-1,-1,-1)]
    def turnMapClockwise(m):
        return [[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]
    def joinMap(theMap, sep = ""):
        return ["".join(line) for line in theMap]
    def printMap(theMap):
        for line in joinMap(theMap):
            print(line)


    
    def findStart(theMap):
        for y in range(len(theMap)):
            for x in range(len(theMap[y])):
                if theMap[y][x] == "^":
                    return (y,x)
                
    def walkMap(theMap):
        theMap = turnMapCounterClockwise(theMap)
        start = findStart(theMap)
        print(start)
        y,x = start

        while x >= 0:
            noturn = True
            y,x = findStart(theMap)
            print()
            printMap(theMap)
            while noturn and x >= 0:
                print(x)
                printMap(theMap)
                theMap[y][x] = "v"
                if theMap[y][x-1] == "#":
                    theMap[y][x] = "^"
                    noturn = False
                    theMap = turnMapCounterClockwise(theMap)
                else: 
                    x -= 1
        theMap[y][x] = "v"
        return theMap
    #theMap = walkMap(theMap)
    
    def strollMap(m):
        x, y = findStart(m)
        xSign = -1
        ySign = 0
        m[x][y] = "v"
        while x + xSign * 1 in range(len(m)) and y + ySign * 1 in range(len(m)):
            if xSign != 0 and m[x + xSign * 1][y + ySign * 1] == "|"  or m[x + xSign * 1][y + ySign * 1] == "+":
                return True
            if ySign != 0 and m[x + xSign * 1][y + ySign * 1] == "-" or m[x + xSign * 1][y + ySign * 1] == "+":
                return True
            if m[x + xSign * 1][y + ySign * 1] == "#":
                if xSign < 0:
                    ySign = 1
                    xSign = 0
                elif ySign > 0:
                    ySign = 0
                    xSign = 1
                elif xSign > 0:
                    ySign = -1
                    xSign = 0
                elif ySign < 0:
                    ySign = 0
                    xSign = -1
            x += xSign * 1
            y += ySign * 1
            if m[x][y] == ".":
                if xSign > 0:
                    m[x][y] = "v"
                if xSign < 0:
                    m[x][y] = "^"
                if ySign > 0:
                    m[x][y] = ">"
                if ySign < 0:
                    m[x][y] = "<"
            elif m[x][y] == "|" and ySign != 0:
                m[x][y] = "+"
            elif m[x][y] == "-" and xSign != 0:
                m[x][y] = "+"
        return False

        
    print()
    printMap(turnMapCounterClockwise(theMap))
    values = "".join([line for line in joinMap(theMap)])
    print(len(re.findall(r"v{1}",values)))

    strollMap(theMap)
    values = "".join([line for line in joinMap(theMap)])
    print(len(re.findall(r"v{1}",values)))

    newMap = [list(line) for line in lines]
    total = 0
    for x in range(len(newMap)):
        for y in range(len(newMap[x])):
            if newMap[x][y] == ".":
                newMapCopy =[list(line) for line in lines]
                print(x,y)
                newMapCopy[x][y] = "#"
                if strollMap(newMapCopy):
                    total += 1

    print(total)