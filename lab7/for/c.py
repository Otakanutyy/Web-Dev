a = int(input())
b = int(input())

found = False
for num in range(a, b + 1):
    if (num ** 0.5).is_integer():
        print(num, end=" ")
        found = True

if not found:
    print()
