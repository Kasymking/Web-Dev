n = int(input())
b = int(input())

mkad = 109
res = abs(mkad - (n * b))
if res > 108:
    print(108)
else: print(res)