S=input()
i,c=map(str,input().split())
i=int(i)
print (S[:i] + c + S[i+1:])