What caused the conflict?
The conflict occured as I changed the same line in the same file on two different branches (main and conflict-branch),which would lead to an issue as Git could not choose which change to go with.

How did I resolve it?
Firstly, I opened the conflicted file, checked both the versions, and decided to go with the final text I wanted. I then removed the conflict markers and saved the file. Lastly, I committed the merge in GitHub Desktop.

What did I learn?
I learned, a conflict can occur when changes overlap in the same part of the file. I also learned how to read the conflict markers and fix the file by choosing version i want.






TASK [Merge Conflicts & Conflict Resolution #40]

What is the difference between staging and committing?
Staging means choosing a file that contain changes to be included in the next commit. When a file is staged using `git add`, Git marks that version of the file to be saved.
Committing means permanently saving the staged changes into the repo history using `git commit`.

Why does Git separate these two steps?
Git separates staging and committing so that we can control what changes to be included in a commit. This helps to create a cleaner  commit instead of saving every change at once.

When would you stage changes without committing?
We do this when we want to review the changes before committing, or when we want to group related changes together before creating a commit.





Branching & Team Collaboration

Why is pushing directly to main problematic?
Pushing directly to the main branch can be very risky because changes go straight into the main codebase without a chance to review it. If the code contains bugs or breaks something, it would affect everyone's work in the repository.

How do branches help with reviewing code?
Branches allow us to work on changes separately from the main branch. The changes can then be reviewed by pull requests before being merged, this ensures mistakes do not happen and improves code quality.

What happens if two people edit the same file on different branches?
Git would then try to merge the changes automatically. However if both people modify the same part of the file, a merge conflict would occur and someone would have to manually decide which change to keep.






Advanced Git Commands & When to Use Them #43

git checkout main -- <file>
This command restores a specific file from the main branch without changing other files. I could potentially use it, if accidentally I changed or broke a file and want to return it to the version in main.

git cherry-pick <commit>
This command apply one specific commit from another branch to the current branch. I could use it if I only need one fix or change from another branch without merging the whole branch.

git log
This basically shows the commit history of the repository. It allows me see what changes were made, when they were made, and who made them.

git blame <file>
This command shows who last modified a line in the file and when. It is specially useful when we are trying to find where a piece of code came from or why it was added.

What surprised me
I was mainly surprised to find out, how git blame shows us that who is respinsilble for a line, and that cherry-pick can copy a single commit instead of merging an entire branch.






Understand git bisect #44
What does git bisect do?
we use bisect to find the first commit that introduced the bug, and we do this by testing commits using a binary search.


When would you use it in a real-world debugging situation?
In real-world, projects usually conatins multiple commint, we use bisect when we can not identify what caused a certain bug.


How does it compare to manually reviewing commits?
It uses binanry search, it cuts the search into half as it continues to look for the bug. 
