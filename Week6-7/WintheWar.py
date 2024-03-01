# อ่านข้อมูล input
N = int(input())
enemy_forces = [int(input()) for _ in range(N)]
our_forces = [int(input()) for _ in range(N)]

# เรียงลำดับกำลังรบของฝ่ายข้าศึกและฝ่ายเรา
enemy_forces.sort()
our_forces.sort(reverse=True)

# นับจำนวนกองทัพที่มีกำลังรบชนะข้าศึกมากที่สุด
victorious_armies = 0
for i in range(N):
    if our_forces[i] >= enemy_forces[i]:
        victorious_armies += 1
    else:
        break

# ตรวจสอบว่าจำนวนกองทัพชนะมากกว่าครึ่งหรือไม่
if victorious_armies > N // 2:
    print(victorious_armies)
else:
    print("Lose")
