# Intro to Github Basics

A friend of mine recently reached out for some advice as she was going to try her hand at vibe coding a web app.
Her and her friends have what is sort of like a fantasy football league for movies and she wanted to create a web app to help manage the scoring.
She was asking me what models to use and how to get started and over the course of my explaination I realized she would inevitably come into contact with Git in some form.
This got me thinking, over the course of my career I've explained the concept of git once or twice and people seemed to get it well enough, I've also been meaning to write here more
so I decided to take a minute to put together a quick primer on what is git. The hope with this being that if you are someone who want to give this vibe coding thing a shot or someone who wants to learn
a bit more about what git is in general feel free to stick around as I try to the best of my ability to explain all you'd need to know to functionally use git the same way a developer would.

### The Basics
Okay so what is Git? If you've never heard of git you may be familiar with other terms such as Github, GitLab, Bitbucket, etc. These are all providers of a technology know as git.
Git in its most basic sense is a version control system. It is most often used for software and files related to software but you could use it for anything. You have a file and over the course
of you working with that file you inevitably make changes to it. Well what happens if you don't like a change and for example want to "go back"? Maybe you'd click the undo button in your file editor of choice
or something like that. Well if you were using git you'd `git restore` to undo the changes you just made. On the other hand, say you made a change you did like and wanted to save that change.
First you'd actually save the file via your text editor, then you'd `git add` your file to `stage` the change, you'd then `git commit` the changes, and finally you'd `git push` to `publish` your new shiny
local commit to the remote `repository`. That is the very basic commands you need to know to get started with Git, thats really all there is too it, once you start doing fancy things with your version control
system then you need to break out the git manual and begin reading, but in the beginning `add` `commit` and `push` will be your most used commands. 

### "The Remote"
I mentioned in the previous section the term `remote repository`. You're probably a little confused as to what that means so lets dig into it. The remote repository refers to the copy of the code that
lives anywhere but on your personal hard drive. If your computer were to explode today the remote would persist and you could pick up right where you left off with a new computer.
The `remote` as you'll often hear it called exists as the primary source of truth for your software. It is the code that others will see if you give them access and it is the code that you will
package, bundle, build, etc and eventually deploy to the world, again if you so choose. It is also the code, like we've mentioned that will persist if anything happens to your computer. The remote will
always be there and should be treated as such. Push things you want recorded in the remote, don't push things you dont. The terms (companies) we mentioned above "Github", "Gitlab", "Bitbucket", etc are
all examples of different "providers" of `remotes`. This remote repository where I am writing this blog for example lives at `github.com/chapmanm3/next-blog` you'll notice the `github.com` portion of the URL.
That is because I am using Github as my remote repository provider of choice. You most likely will as well unless for some reason you have a particularly strong reason to use something else most people just use github.

