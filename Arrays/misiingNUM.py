def simpleArraySum(ar):
    # Write your code here
    sum = 0
    n = len(ar)
    for i in range(n):
        sum += ar[i]
    return sum

make  = simpleArraySum([1,2,3])
print(make)