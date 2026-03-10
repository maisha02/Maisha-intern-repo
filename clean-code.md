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

----------

# Code Formatting & Style Guides(#48)

## Why code formatting is important
It makes it easier to read and understand. If the style remain same, it becomes easier to work together and maintain the code.

## Airbnb JavaScript Style Guide
It is a set of rules for writing JavaScript in a clean and consistent way. It ensures we follow the same structure, naming style, and formatting.

## ESLint and Prettier
ESLint is a tool that checks the code and tries to find problems like unused variables or missing semicolons. Prettier is a tool that automatically formats the code so that the code looks clean and consistent.

## What issues the linter detected
The linter found some spacing issues and missing semicolons. These problems usally don't break the code, but they make it harder to read.

## Did formatting make the code easier to read?
Yes, formatting does make the code easier to read. The spacing and structure became cleaner, which makes the code easier to understand.

----------

# Naming Variables & Functions(#49)

## What makes a good variable or function name?
A good variable clearly shows what the variable is storing or what the function really does.

## What issues can arise from poorly named variables?
Poor names can create confusion and makes the code harder to read. Can also lead to mistakes as the purpose of the variable is unclear.

## How did refactoring improve code readability?
By replacing unclear names with clear and meaningful ones, refactoring improved code readability. Making it easier to understand.

# unclear variable 
def f(x):
    y = 0
    for i in x:
        y += i
    return y

# refactoring
def calculate_total(numbers):
    total = 0
    for number in numbers:
        total += number
    return total

----------

