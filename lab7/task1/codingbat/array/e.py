n = int(input())
A = list(map(int, input().split()))
flag = False
    
for i in range(1, n):
    if A[i - 1] * A[i] > 0:
        flag = True
        print("YES")
        break
    
if not flag:
    print("NO")