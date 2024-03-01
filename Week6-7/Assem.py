n = int(input())
avengers_power = [int(input()) for _ in range(n)]
enemy_power = int(input())

avengers_power.sort(reverse=True)  # เรียงลำดับพลังของ Avengers จากมากไปหาน้อย

total_power = 0
avengers_needed = 0

for power in avengers_power:
    total_power += power
    avengers_needed += 1
    if total_power >= enemy_power:
        break

if total_power < enemy_power:
    print("YOU DIE")
else:
    print(avengers_needed)
