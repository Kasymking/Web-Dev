import math

a = int(input())
b = int(math.sqrt(a))
for i in range(2,b + 1):
    if a % i == 0:
        print(i)
        break