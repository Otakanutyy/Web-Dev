a = [0] * 100
n = int(input())
c = 0
    
for i in range(n):
   a[i] = int(input())
    
for i in range(n):
    if i == 0 or i == n - 1:
        continue
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        c += 1
            
print(c)