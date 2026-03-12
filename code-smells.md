# Identifying & Fixing Code Smells (#56)

## Before 
def process_scores(scores):
    total = 0
    for s in scores:
        if s > 50:
            total = total + s
        else:
            total = total + 0
    return total / len(scores)

## After (refactoring)
PASS_MARK = 50

def calculate_average(scores):
    valid_scores = [score for score in scores if score > PASS_MARK]
    return sum(valid_scores) / len(scores)


## What code smells did you find in your code?
I found several common code smells such as magic numbers, long functions, duplicate code, and unclear variable names. These issues made the code harder to read and understand.

## How did refactoring improve the readability and maintainability of the code?
Refactoring improved the code by replacing magic numbers with constants, breaking long functions into smaller ones, and removing duplicate code. It allows the structure to be clearer and maintainable.

## How can avoiding code smells make future debugging easier?
This is because the code is clearer and more organized. When each part of the code has a clear purpose, it becomes easier to find and fix problems.