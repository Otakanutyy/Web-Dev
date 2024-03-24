import math

#task1
def calculate_hypotenuse():
    a = float(input())
    b = float(input())
    c = math.sqrt(a**2 + b**2)
    print(c)

#calculate_hypotenuse()

#task2
def next_prev():
    a = float(input())
    next = a+1
    prev = a-1
    print('The next number for the number ', a, ' is ', next,
          'The previous number for the number ', a, ' is ', prev)
    
#next_prev()

#task3
def apples():
    n = int(input())
    k = int(input())
    ans = k//n
    print(ans)
#apples()

#task4
def apples2():
    n = int(input())
    k = int(input())
    ans = k%n
    print(ans)
#apples2()

#task5
def biker():
    v = int(input())
    t = int(input())
    ans = (v*t)%109
    print(ans)
#biker()

#task6
def lastdigit():
    a = int(input())
    print(a%10)
#lastdigit()

#task7
def desyatki():
    a = int(input())
    print((a%100)//10)
#desyatki()

#task8
#desyatki()

#task9
def summma():
    a = int(input())
    print(a%10 + (a%100)//10 + a//100)
summma()

#task10
def nexteven():
    a = int(input())
    print((a+2) - a%2)
nexteven() 

#task11
def time():
    n = int(input())
    hours = n % (60 * 24) // 60
    minutes = n % 60
    print(hours, minutes)
time()

#task12
def time2():
    n = int(input()) 
    min1 = n // 60 
    hour = min1 // 60 
    min = min1 % 60 
    sec = n % 60 
    print (hour % 24, min, sec)
time2()

#task13
def switch():
    a = int(input())
    b = int(input())
    a,b = b,a  
    print(a,b)
switch()

#task14
def lesson():
    a = int(input())
    a = a*45 + (a//2)*5 + ((a+1)//2-1)*15
    print(a//60 + 9, a%60)  
lesson()

#task15
def value():
    a = int(input())
    b = int(input())
    n = int(input())
    cost = n * (100 * a + b)
    print(cost // 100, cost % 100)
value()

#task16
def timedif():
    a = int(input())
    b = int(input())
    c = int(input())
    x = int(input())
    y = int(input())
    z = int(input())
    print((x-a)*3600 + (y-b)*60 + z - c)
timedif()

#task17
def car():
    dis1 = int(input())
    dis2 = int(input())
    print((dis2 + dis1 - 1) // dis1)
car()

#task18
def apple3():
    n, k = int(input()), int(input())
    print((n - k % n) % n)
apple3()

#task19
def snail():
    h = int(input())
    a = int(input())
    b = int(input())
    print(int((h - a - 1) // (a - b) + 2))
snail()

#task20
def symm():
    n = int(input())
    p1 = n // 100
    p2 = n % 100
    p2 = p2 % 10 * 10 + p2 // 10
    print((p2 - p1) + 1)
symm()


#task21
def div():
    n = int(input())
    m = int(input())
    result = (n % m == 0) or (m % n == 0)  
    print(int(result) * 2 - 1) 
div()

#task22
def comp():
    a = float(input())
    b = float(input())
    result = (a*(a//b) + b*(b//a)) / (b//a + a//b)
    print(result)
comp()