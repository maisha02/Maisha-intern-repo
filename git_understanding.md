What caused the conflict?
The conflict occured as I changed the same line in the same file on two different branches (main and conflict-branch),which would lead to an issue as Git could not choose which change to go with.

How did I resolve it?
Firstly, I opened the conflicted file, checked both the versions, and decided to go with the final text I wanted. I then removed the conflict markers and saved the file. Lastly, I committed the merge in GitHub Desktop.

What did I learn?
I learned, a conflict can occur when changes overlap in the same part of the file. I also learned how to read the conflict markers and fix the file by choosing version i want.

TASK [Merge Conflicts & Conflict Resolution #42]

What is the difference between staging and committing?
Staging means choosing a file that contain changes to be included in the next commit. When a file is staged using `git add`, Git marks that version of the file to be saved.
Committing means permanently saving the staged changes into the repo history using `git commit`.

Why does Git separate these two steps?
Git separates staging and committing so that we can control what changes to be included in a commit. This helps to create a cleaner  commit instead of saving every change at once.

When would you stage changes without committing?
We do this when we want to review the changes before committing, or when we want to group related changes together before creating a commit.