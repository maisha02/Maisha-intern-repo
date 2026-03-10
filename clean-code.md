# Clean Code Principles(#47)

## Simplicity
Simplicity means keeping code as simple as possible. It should be easier to write, understand, and debug. 

## Readability
Readability is a clean code that is easy to read. Proper variable names, a clear structure, and proper formatting makes the code easier to understand. It also helps us to quickly see what the program is doing.

## Maintainability
Maintainable code is easy to update in the future. This includes a organised code, avoid duplication, and writing functions that do one clear task.

## Consistency
Consistency means following a similair style across the whole project. This includes naming conventions, formatting, and coding patterns. 

## Efficiency
Efficiency means writing code that runs well and uses time and resources wisely. The code should avoid unnecessary work while still staying simple and easy to understand.


## Messy Code Example

def p(l):
    t=0
    for i in range(len(l)):
        if l[i] > 50:
            t=t+l[i]*0.9
        else:
            t=t+l[i]
    print(t)


## Clean code 
def calculate_total(prices):
    total = 0
    for price in prices:
        if price > 50:
            total += price * 0.9
        else:
            total += price
    return total

Explaination:- The cleaner code uses clear function and variable names, which makes it easier to understand. It also returns the result instead of printing it, making the function easier to reuse.