n=int(input())

dic={}

for i in range(n):
	line=input().split()
	dic[line[0]]=sum(map(float,line[1:]))/3.0

print ('%.2f' % dic[input()])