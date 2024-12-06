import re
with open('day03.txt', 'r') as file:
    data = file.read()

    matches = re.findall(r"mul\((\d{1,3}),(\d{1,3})\)", data)
    total = 0
    for i in range(len(matches)):
        total += int(matches[i][0]) * int(matches[i][1])


    print(total)
    


    # data = re.sub(r"don't\(\).*\n.*do\(\)","do()", data)
    # data = re.sub(r"don't\(\).*\n.*","", data)
    # data = re.sub(r"don't\(\).*","", data)

    matches = re.findall(r"mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)", data)

    total = 0
    flag = True
    for match in matches:
        if match == "do()":
            flag = True
        elif match == "don't()":
            flag = False
        else:
            if flag:
                nums = re.findall(r"\d{1,3}", match)
                total += int(nums[0]) * int(nums[1])

    # print(matches)
    print(total)