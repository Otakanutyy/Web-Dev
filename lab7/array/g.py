while True:
    N = int(input("Enter a value for N (1 <= N <= 35): "))
    if N < 1 or N > 35:
        print("1 <= x <= 35 !!! Repeat please...")
    else:
        break

a = []
for _ in range(N):
    a.append(int(input()))

for i in range(N // 2):
    a[i], a[N - 1 - i] = a[N - 1 - i], a[i]

for i in range(N):
    print(a[i], end=" ")
print()

input("Press any key to continue...")
