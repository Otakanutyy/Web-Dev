def task1():
    a = int(input())
    b = int(input())
    if a > b:
        print(a)
    elif a < b:
        print(b)
    else:
        print('equal')
task1()

def task2():
    year = int(input())
    if (year % 4 == 0) and (year % 100 != 0) or (year % 400 == 0):
        print('YES')
    else:
        print('NO')
task2()

def task3():
    a = int(input())
    b = int(input())
    if(a != 1 and b != 1):
        print("YES")
    else:
        print("NO")
task3()

def task4():
    a = int(input())
    if (a>0):
        print('1')
    elif(a<0):
        print('-1')
    else:
        print('0')
task4()

def task5():
    a = int(input())
    b = int(input())
    if a > b:
        print('1')
    elif a < b:
        print('2')
    else:
        print('0')
task5()

def task6():
    a = int(input())
    b = int(input())
    c = int(input())
    if(a>b and a>c):
        print(a)
    elif(b>a and b>c):
        print(b)
    else:
        print(c)
task6()

def task7():
    rook_row = int(input())
    rook_col = int(input())
    other_row = int(input())
    other_col = int(input())

    if rook_row == other_row or rook_col == other_col:
        print("YES")
    else:
        print("NO")
task7()

def task8():
    bishop_row = int(input())
    bishop_col = int(input())
    other_row = int(input())
    other_col = int(input())

    if abs(bishop_row - other_row) == abs(bishop_col - other_col):
        print("YES")
    else:
        print("NO")
task8()

def task9():
    queen_row = int(input())
    queen_col = int(input())
    other_row = int(input())
    other_col = int(input())
    if queen_row == other_row or queen_col == other_col or abs(queen_row - other_row) == abs(queen_col - other_col):
        print("YES")
    else:
        print("NO")
task9()

def task10():
    start_col = int(input())
    start_row = int(input())
    end_col = int(input())
    end_row = int(input())

    if abs(start_col - end_col) <= 1 and abs(start_row - end_row) <= 1:
        print("YES")
    else:
        print("NO")

task10()

def task11():
    knight_row = int(input())
    knight_col = int(input())
    other_row = int(input())
    other_col = int(input())
    if (abs(knight_row - other_row) == 2 and abs(knight_col - other_col) == 1) or \
    (abs(knight_row - other_row) == 1 and abs(knight_col - other_col) == 2):
        print("YES")
    else:
        print("NO")

task11()


def task12():
    n = int(input())
    m = int(input())
    k = int(input())

    if k % n == 0 and k <= n * m:
        print("YES")
    elif k % m == 0 and k <= n * m:
        print("YES")
    else:
        print("NO")

task12()

def task13():
    n = int(input())
    if(n==1 or n%4 ==0):
        print("YES")
    else:
        print("NO")
task13()

def task14():
    a = int(input())
    b = int(input())

    if a == 0:
        if b == 0:
            print("INF")
        else:
            print("NO")
    else:
        solution = -b / a
        print(solution)
task14()

def task15():
    a, b, c, d = int(input()), int(input()), int(input()), int(input())
    if a == 0 and b == 0:
        print('INF')
    elif a == 0 or b * c == a * d:
        print('NO')
    elif b % a == 0:
        x = -b // a
        print(x)
    else:
        print('NO')
task15()

def task16():
    a=int(input())
    b=int(input())
    c=int(input())
    d=int(input())
    e=a-c

    if b<d:
        e=e-1
        b=b+100
        f=b-d
    else:
        f=b-d

    print(e)
    print(f)
task16()

def task17():
    k = int(input(""))
    if k==3 or k==5:
        print("Yes")
    else:
        print("No")
task17()

def task18():
    k, m, n = int(input()), int(input()), int(input())
    if n <= k:
        t = 2 * m
    elif (n * 2) % k == 0:
        t = m * (n * 2 // k)
    else:
        t = m * (1 + (n * 2 // k))
    print(t)
task18()

def task19():
    x1 = int(input())
    y1 = int(input())
    x2 = int(input())
    y2 = int(input())
    if x1*x2>0 and y1*y2>0:
        print("YES")
    else:
        print("NO")
task19()

def task20():
    a = int(input())
    b = int(input())
    c = int(input())
    if a + b > c and b + c > a and a + c > b:
        print('YES')
    else:
        print('NO')
task20()

def task21():
    a = int(input())
    b = int(input())
    c = int(input())
    if a == b == c:
        print(3)
    elif a == b or b == c or a == c:
        print(2)
    else:
        print(0)
task21()

def task22():
    a = int(input())
    b = int(input())
    c = int(input())
    if a == b == c:
        print(3)
    elif a == b or b == c or a == c:
        print(2)
    else:
        print(0)
task22()

def task23():
    a = int(input())
    b = int(input())
    c = int(input())

    d = (b**2) - (4*a*c)
    l = 2 * a

    if d == 0:
        print(-b/(2*a))
    elif d > 0:
        print((-b + (d**(1/2))) / l, (-b - (d**(1/2))) / l)
task23()

def task24():
    a = int(input())
    b = int(input())
    c = int(input())
    if (a*a + b*b == c*c) or (a*a + c*c == b*b) or (c*c + b*b == a*a):
        print("right")
    elif (a*a + b*b < c*c) or (a*a + c*c < b*b) or (c*c + b*b < a*a):
        print("obtuse")
    else:
        print("acute")
task24()

def task25():
    n = int(input())
    if n >= 11 and n <= 14:
            print(n, 'korov')
    else:
            temp = n % 10
            if temp == 0 or (temp >= 5 and temp <= 9):
                    print(n, 'korov')
            if temp == 1:
                    print(n, 'korova')
            if temp >=2 and temp <=4:
                    print(n, 'korovy')
task25()

def task26():
    n = int(input())
    a = n % 60
    if a >= 40:
        t = n // 60 + 1
        n = 0
        m = 0
    else:
        t = n // 60
        if (a % 10) >= 9:
            n = a // 10 + 1
            m = 0
        else:
            n = a // 10
            m = a % 10
    print(m, n ,t)
task26()

def task27():
    n = int(input())
    n60 = n//60
    n = n%60
    n20 = n//20
    n = n%20
    n10 = n//10
    n = n%10
    n5 = n//5
    n1 = n%5
    if n1 and n1*15 >= 70:
        n5 += 1
        n1 = 0
    if n5*70 + n1*15 >= 125:
        n10 += 1
        n5 = 0
        n1 = 0
    if n10*125 + n5*70 + n1*15 >= 230:
        n20 += 1
        n10 = 0
        n5 = 0
        n1 = 0     
    if n20*230 + n10*125 + n5*70 + n1*15 >= 440:
        n60 += 1
        n20 = 0
        n10 = 0
        n5 = 0
        n1 = 0
    print(n1, n5, n10, n20, n60)
task27()

def task28():
    M, N, x, y = int(input()), int(input()), int(input()), int(input())
    if N > 1:
        if y == 1:
            print(x, y + 1)
        elif y == N:
            print(x, y - 1)
        else:
            print(x, y - 1)
            print(x, y + 1)
    if M > 1:
        if x == 1:
            print(x + 1, y)
        elif x == M:
            print(x - 1, y)
        else:
            print(x - 1, y)
            print(x + 1, y)
task28()

def task29():
    N = int(input())
    M = N % 100
    if M <= 10 or M >= 20:
        if (N % 10) == 0 or ((N % 10) >= 5 and (N % 10) <= 9):
            print(str(N) + " bochek")
        elif (N % 10) == 1:
            print(str(N) + " bochka")
        else:
            print(str(N) + " bochki")
    else:
        print(str(N) + " bochek")
task29()

def task30():
    a = int(input())
    b = int(input())
    c = int(input())
    if (a % 2 == 0 and b % 2 != 0) or (a % 2 != 0 and b % 2 == 0):
        print("YES")
    elif (a % 2 == 0 and c % 2 != 0) or (a % 2 != 0 and c % 2 == 0):
        print("YES")
    elif (b % 2 == 0 and c % 2 != 0) or (b % 2 != 0 and c % 2 == 0):
        print("YES")
    else:
        print("NO")
task30()

def task31():
    n = int(input())
    if n == 100:
        print("C")
    else:
        tens_digit = n // 10
        units_digit = n % 10

        if tens_digit == 1:
            print("X", end="")
        elif tens_digit == 2:
            print("XX", end="")
        elif tens_digit == 3:
            print("XXX", end="")
        elif tens_digit == 4:
            print("XL", end="")
        elif tens_digit == 5:
            print("L", end="")
        elif tens_digit == 6:
            print("LX", end="")
        elif tens_digit == 7:
            print("LXX", end="")
        elif tens_digit == 8:
            print("LXXX", end="")
        elif tens_digit == 9:
            print("XC", end="")

        if units_digit == 1:
            print("I")
        elif units_digit == 2:
            print("II")
        elif units_digit == 3:
            print("III")
        elif units_digit == 4:
            print("IV")
        elif units_digit == 5:
            print("V")
        elif units_digit == 6:
            print("VI")
        elif units_digit == 7:
            print("VII")
        elif units_digit == 8:
            print("VIII")
        elif units_digit == 9:
            print("IX")
task31()

def task32():
    a = int(input())
    b = int(input())
    c = int(input())
    if a > b:
        a, b = b, a
    if b > c:
        b, c = c, b
    if a > b:
        a, b = b, a
    print(a, b, c)
task32()