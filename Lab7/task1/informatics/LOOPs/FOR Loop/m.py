import math

n = int(input())
b = 0
for i in range(n):
    a = int(input())
    if a == 0:
        b += 1
print(b)