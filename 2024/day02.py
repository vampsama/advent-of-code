with open('day02.txt', 'r') as file:
    data = file.read()

    lines = data.splitlines()
    reports = [[int(x) for x in line.split()] for line in lines]
    safe_reports_one = 0
    def is_report_safe(report):
        for j in range(len(report)):
            if j + 1 < len(report):
                sign = report[j] - report[j+1]
                if report[j] - report[j+1] == 0:
                    return 0
                if abs(report[j] - report[j+1]) > 3:
                    return 0
                if j + 2 < len(report):
                    if sign * (report[j+1] - report[j+2]) < 0:
                        return 0
        return 1

    for i in range(len(reports)):
        safe_reports_one += is_report_safe(reports[i])
    safe_reports_two = 0
    for i in range(len(reports)):
        report = reports[i]
        for j in range(len(report)):
            try_report = report.copy()
            try_report.pop(j)
            if is_report_safe(try_report):
                safe_reports_two += 1
                break

    
    print(safe_reports_one)
    print(safe_reports_two)