with open('day01.txt', 'r') as file:
    data = file.read()

    lines = data.splitlines()
    left_list = [line.split()[0] for line in lines]
    right_list = [line.split()[1] for line in lines]
    left_list.sort()
    right_list.sort()
    total = 0
    
    for i in range(len(left_list)):
        total += abs(int(left_list[i]) - int(right_list[i]))

    print(total)
    differences_dict = {}
    similarity = 0
    for i in range(len(left_list)):
        search = int(left_list[i])
        found = 0
        if left_list[i] in differences_dict:
            similarity += differences_dict[left_list[i]]
        else:
            for j in range(len(right_list)):
                if int(right_list[j]) == search:
                    found += 1
            differences_dict[left_list[i]] = found * search
            similarity += differences_dict[left_list[i]]
    print( similarity)


