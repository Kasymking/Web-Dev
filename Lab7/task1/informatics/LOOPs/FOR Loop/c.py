import math

a = int(input())
b = int(input())
res = []

for i in range(a,b+1):
    c = int(math.sqrt(i))
    if c * c == i:
        res.append(i)

print(*res)