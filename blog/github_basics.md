# Intro to Github Basics

A friend of mine recently reached out for some advice as she was going to try her hand at vibe coding a web app.
Her and her friends have what is sort of like a fantasy football league for movies and she wanted to create a web app to help manage the scoring.
She was asking me what models to use and how to get started and over the course of my explaination I realized she would inevitably come into contact with Git in some form.
This got me thinking, over the course of my career I've explained the concept of git once or twice and people seemed to get it well enough, I've also been meaning to write here more
so I decided to take a minute to put together a quick primer on what is git. The hope with this being that if you are someone who want to give this vibe coding thing a shot or someone who wants to learn
a bit more about what git is in general feel free to stick around as I try to the best of my ability to explain all you'd need to know to functionally use git the same way a developer would.

## The Basics
Okay so what is Git? If you've never heard of git you may be familiar with other terms such as Github, GitLab, Bitbucket, etc. These are all providers of a technology know as git.
Git in its most basic sense is a version control system. It is most often used for software and files related to software but you could use it for anything. You have a file and over the course
of you working with that file you inevitably make changes to it. Well what happens if you don't like a change and for example want to "go back"? Maybe you'd click the undo button in your file editor of choice
or something like that. Well if you were using git you'd `git restore` to undo the changes you just made. On the other hand, say you made a change you did like and wanted to save that change.
First you'd actually save the file via your text editor, then you'd `git add` your file to `stage` the change, you'd then `git commit` the changes, and finally you'd `git push` to `publish` your new shiny
local commit to the remote `repository`. That is the very basic commands you need to know to get started with Git, thats really all there is too it, once you start doing fancy things with your version control
system then you need to break out the git manual and begin reading, but in the beginning `add` `commit` and `push` will be your most used commands. 

## "The Remote"
I mentioned in the previous section the term `remote repository`. You're probably a little confused as to what that means so lets dig into it. The remote repository refers to the copy of the code that
lives anywhere but on your personal hard drive. If your computer were to explode today the remote would persist and you could pick up right where you left off with a new computer.
The `remote` as you'll often hear it called exists as the primary source of truth for your software. It is the code that others will see if you give them access and it is the code that you will
package, bundle, build, etc and eventually deploy to the world, again if you so choose. It is also the code, like we've mentioned that will persist if anything happens to your computer. The remote will
always be there and should be treated as such. Push things you want recorded in the remote, don't push things you dont. The terms (companies) we mentioned above "Github", "Gitlab", "Bitbucket", etc are
all examples of different "providers" of `remotes`. This remote repository where I am writing this blog for example lives at `github.com/chapmanm3/next-blog` you'll notice the `github.com` portion of the URL.
That is because I am using Github as my remote repository provider of choice. You most likely will as well unless for some reason you have a particularly strong reason to use something else most people just use github.

## Getting Started

### Creating your first repository
So you're familiar with what a "remote" is, but how do you get your own remote? Like we talked about above Github is a good place to start. First you'll want to create an account, next once you have an account you can create
a new repository via the Github Website. After you've followed the onscreen prompts you'll reach an instructions page that explains how to use your new remote, keep these handy. TaDa you now have your very own "remote" repository.
You can use this to push whatever code you would like. Typically you keep one repository per project so if you have multiple projects I suggest creating multiple remotes for each of them this helps keep things organized.

### Pushing Code
Okay now you should have your repository setup in the remote and that should give you some instructions for adding that remote to your local, but you may not have a local set up yet so lets do that. First you'll want to find or create
a directory or folder for your code to live. If you are using a terminal, which you should be, I'll make another post about good terminal setups for now whatever comes with your operating system is fine. You will want to change
directories until you are in the new project folder. You may need to install `git` locally for these next steps, Windows you can find the download page from github, macos I believe `brew install git` should work, brew is its own 
blog post but install that and then use that to install git. Okay now that you have the prerequisits installed we can begin by initializing git in the repo with `git init` this creates the necessary git files in the folder and creates
a local repository. Now that you have a local git repository setup we can create our first commit. If this folder already has files in it git will pick them up as new or changed, you can check this with `git status`, this will give you
a quick snapshot of your local repository. So if git status shows you have files noted as changed we can begin by "staging" our changes with `git add .` the `.` here will stage all your changed files alternatively your can specify
individual files to stage by their name. Now with files staged you can create a commit. To create a commit you will use `git commit` this will open up a text editor and prompt you for a commit message, this is typically a short 
description of the changes in this commit. Alternatively you can use `git commit -m "commit message"` to pre specify the commit message. Now we should have a fresh commit created locally and to send this to the remote we will "push"
it with `git push`. If you have just created the remote repo you will want to add your remote repo to your local repo with `git remote add origin <remote url>`. This allows your local repository to push changes to your new remote repository.
To recap you will make new changes, add / stage them with `git add .`, create a new commit with `git commit -m "commit message"`, and push your new commit to your remote with `git push`. And now you have code stored in the remote repository!

## Important Concepts

### Commits and Git History
Everytime you make a commit a snapshot of the code in time is captured and stored in a log which is know as the git history. Each one of these snapshots is tagged with a unique `hash` that allows it to be identified from other commits.
These commits are unique and distinct states of the repository over time and can be "checked out" in order to view the state of the code at a given time. This is an important concept to understand about commits because once you
get the mental model of what they represent down you will have a much better idea of when a commit is ready to be made vs when a change is either too small or too large. A commit will represent a moment of the code in time so make sure
before you create a commit you have the code in a state worth recording in time!

### Branches and Pull Requests
The last piece we'll briefly touch on, if you're working solo on a project you may not use these as much as a team does, but they're still good to know, are branches and pull requests. Imagine you have a document and that document has
a table or a graph on it, maybe you want to try out a different graph in that spot, or to play around with formatting the table differently, but you don't want that to affect the current state of the document, you just want to
try something out and throw it away if you don't like it. Now the example of a single document is a bit simple here, but stick with me. In this case if you were using git you can create what is called a "branch". A branch is a copy
of the code at the point in time from where you "branched" off of. For example if you branched off of the document in this example and added the new table to your branch of the document and then later someone else adds a new page
to the main branch of the document, your branch would not have the new page because it only contains the history of the main document up until the point you branched off. This is nice because it allows you to take a "copy" of the code
or repo and do some experimenting. Now say your experimental branch is a success, Great!, now you need to get those changes back into the main document. You're going to want a "pull request", this is what is used to reguest changes
from one branch get included in another. In our example you would create a pull request from your experiment branch into your main branch, and once merged, given there are no conflicts (thats for a different post), you can "merge"
your experimental changes into the main branch and now they are part of the main document. On larger teams pull requests will often be reviewed by other members of the team and certain checks against the new code will be run
to ensure quality. When its just you on a personal project they're less important and mostly good for practice, house keeping, and making your github stats look good.

## Closing (TLDR)
- You need to make an account for a git provider (Github is my recommendation)
- `git init` to make a new repo
- `git add .` to stage all changes
- `git commit -m "message"` to create a commit from your staged changes
- `git push` to push your changes to the remote

And thats it! You now have all you need to start using git for version control like a real developer! Remember if you every get stuck, ask your agent, or google it, thats what we do.

- Matt Chapman
