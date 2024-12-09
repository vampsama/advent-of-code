import re
with open('day05.txt', 'r') as file:
    data = file.read()

    def resortNums(nums):
        for num in nums:
            if num in rules:
                for rule in rules[num]:
                    if rule in nums and nums.index(num) < nums.index(rule):
                            print("swapping", num, rule)
                            ruleIndex = nums.index(rule)
                            numIndex = nums.index(num)
                            nums.pop(ruleIndex)
                            nums.insert(ruleIndex, num)
                            nums.pop(numIndex)
                            nums.insert(numIndex, rule)
        print(nums)
        return nums
    def fixOrderRowValue(nums):
        tries = 0
        while getRowValue(nums) == 0:  
            print(nums)  
            nums = resortNums(nums)

        return getRowValue(nums)

    def getRowValue(nums):
        checkNums = nums.copy()
        for num in nums:
            checkNums.remove(num)
            if num in rules:
                for rule in rules[num]:
                    if rule in checkNums:
                        return 0
        return int(nums[len(nums)//2])


    def addRule(rule):
        if  rule[1] not in rules:
            rules[rule[1]] = [rule[0]]
        else:
            rules[rule[1]] = [ i for i in rules[rule[1]] + [rule[0]]]

    lines = data.splitlines()
    ruleRegex = r"(\d+)\|(\d+)"
    updateRegex = r"((\d+),)+"
    rules = {}
    for line in lines:
        if re.match(ruleRegex,line):
            #print(re.match(ruleRegex,line))
            addRule(re.findall(ruleRegex,line)[0])
    
    print(rules)
    total = 0
    for line in lines:
        if re.match(updateRegex,line):
            nums = [i for i in line.split(",")]
            total += getRowValue(nums)
    
    print(total)
    
    total = 0
    for line in lines:
        if re.match(updateRegex,line):
            nums = [i for i in line.split(",")]
            if getRowValue(nums) == 0:
                total += fixOrderRowValue(nums)
                print(total)
    
    print(total)