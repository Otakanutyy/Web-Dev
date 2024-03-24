N = int(input())
count_zeros = 0

for _ in range(N):
    num = int(input())
    if num == 0:
        count_zeros += 1

print(count_zeros)
