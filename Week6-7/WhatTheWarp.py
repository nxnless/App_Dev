# อ่านข้อมูล input
numbers = []
while True:
    n = int(input())
    if n == 0:
        break
    numbers.append(n)

# แยกตัวเลขเป็นกลุ่มบวกและกลุ่มลบ
positive_numbers = [x for x in numbers if x > 0]
negative_numbers = [x for x in numbers if x < 0]

# เรียงลำดับตัวเลขในแต่ละกลุ่ม
positive_numbers.sort()
negative_numbers.sort(reverse=True)

# สร้างลำดับการนับตัวเลข
sequence = []
while positive_numbers or negative_numbers:
    if len(positive_numbers) >= len(negative_numbers):
        sequence.extend(positive_numbers)
        sequence.extend(negative_numbers)
        break
    else:
        sequence.extend(negative_numbers)
        sequence.extend(positive_numbers)
        break

# แสดงผลลำดับการนับ
for num in sequence:
    print(num)
