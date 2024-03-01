while True:
    n, d, r = map(int, input().split())
    if n == 0 and d == 0 and r == 0:
        break
    
    morning_routes = list(map(int, input().split()))
    afternoon_routes = list(map(int, input().split()))
    
    # เรียงลำดับเส้นทางในรอบเช้าและรอบบ่าย
    morning_routes.sort()
    afternoon_routes.sort()
    
    total_overtime = 0
    
    # ใช้ Greedy Algorithm เพื่อเลือกค่าโอทีที่น้อยที่สุด
    for i in range(n):
        total_overtime += max(0, (morning_routes[i] + afternoon_routes[n - i - 1] - d)) * r
        
    print(total_overtime)
