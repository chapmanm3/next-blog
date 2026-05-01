# Terminal Setup and Basics

So maybe you've heard about this Claude Code thing or Codex or maybe even OpenCode and you want to see what they're all about. Well before using your first terminal application you need to get set up and comfortable in the 
terminal in general. Today we're going to go over some basics around the terminal and a few associated tools just to dip our toes into what is going on in the big black box that looks a bit like the matrix and is terrifying if you've
never touched one before. 

## It's not that scary

Okay I do have to admit if we're talking about Windows Terminals and PowerShell that actually does scare me, I have no clue what is happening when one of those opens up and I don't think I want to. On the bright side we won't be 
talking about those today! Today we're talking about Unix based terminals, the ones you'll have if you're using a Mac, or Linux, though you already know how to use the terminal if you installed Linux, and if you're like me up
until I was maybe 25 and had only ever used Windows [here is a document on how to set up WSL](https://learn.microsoft.com/en-us/windows/wsl/install). That will allow you to run a Linux distribution on your Windows PC and you can
follow along here again! So back to where we were, its not that scary! I promise, all a terminal is is a way to type in and run commands on your computer via text, the exact same as you could do via your mouse.
Right Click -> Create New File is the same as the `touch` command in the terminal, a new folder/directory is just `mkdir`. To move in and out of folders is just the `cd` command. Every action you can take via your mouse and keyboard
on your desktop you can also do in the terminal. Knowledge is power and the more commands you know the less scary it becomes. Pausing here for a warning: *NEVER* copy, paste and run a command from the internet if you do not know
explicitly what it is doing. *ONLY* run commands that you know about. Don't just trust the random Reddit comment that tells you `rm -rf /` will take you back to your home directory. You're gonna have a bad time. That being said the
terminal is fun and easy to learn, just like with learning anything you start small and expand your knowledge as you feel comfortable. Start with `cd` to move in and out of directories, use `mkdir` to make a few, `touch` to create new
files, `cat` to view files, `nano` to edit them, `cp` copies, `mv` moves, and there you go that's all of your file explorer needs done in the terminal. Start there expand out and the sky's the limit, I believe in you. Cheat sheets are
helpful and plentiful when it comes to the terminal, keep one handy so you can reach for it if you forget a command in a pinch. Here is one published by Ubuntu, if you're using WSL this is likely your Linux distribution, but most commands
will be applicable to all Unix terminals, [Terminal Cheat Sheet](https://assets.ubuntu.com/v1/d00791ae-ubuntu_cli_cheat_sheet_2025.pdf).

## How do I get a terminal?

Now that we've demystified the terminal and you're ready to start moving around your next question is going to be "How do I get in there?". Great question, Macs come default with iTerm I believe so you can start there, and I'm 
forgetting what Ubuntu comes with but it has one and you can certainly start there! Though, allow me to also supply some other recommendations. A terminal's job is to render text on the screen, how it does that differs with each one,
some use gpu acceleration to make things faster, some support niceties such as tabs out of the box, some are written in Rust if thats important to you, they're all a bit different and everyone has their favorite but I will link a few here for you to look at and decide which you want
to give a shot, tip: you can install multiple and play around with them in parallel to compare if you'd like. 

- [Alacritty](https://alacritty.org/): Alacritty is my personal favorite. Why? I forget, I picked it from a list like this at some point and have simply stuck with it ever since, I've never needed to do something I can't with it
and if I ever do then I will look elsewhere but until then this is the one I use.
- [Kitty](https://sw.kovidgoyal.net/kitty/): Kitty is another I've seen mentioned feel free to give it a go.
- [Ghostty](https://ghostty.org/): Ghostty is very new and seems to be the terminal of choice for many developers I know, if you want a popular req with lots of community support give it a shot.
- [Warp](https://www.warp.dev/): Warp is a terminal for the new age, it feels less like a terminal and more like an application. It's not my cup of tea personally, but people like it and if it fits your flow it's a great tool!
- and many others, feel free to look around and try as many as you want they can all be installed alongside eachother.

## Your next choice (Shell)
A shell? like from the beach? Close but no, a shell is the application you run in your terminal which translates commands into operations on your computer. So the commands I listed above for basic file system actions are all supported
by the bash shell syntax and other popular alternatives. I'll keep this section short because it can get complicated but does not need to. If you want to get fancy and look into alternative shells that use different commands you certainly
can, but my first req is going to be [zsh](https://zsh.sourceforge.io/). If you are on a Mac this should be your default and if you are on Linux it is simple enough to install. It combines the standard well known commands of bash
with a few quality of life improvements from other newer shells. There are exotic alternatives such as [fish](https://fishshell.com/) which, if you want to learn the shell, will provide even more quality of life improvements, but zsh
and its improvement system [Oh My Zsh](https://ohmyz.sh/) have done everything I've needed thus far. As such that is my simple recommendation to you, zsh and oh my zsh, give it a go.

## A few more pieces to round it out
### A package manager
A package manager is designed to do exactly that, manage packages. What that means is if you need to install anything, Claude, Neovim, Python, Node, and any other fun applications, you will need a package manager to 1. Install them, and 
2. Keep them up to date. The most popular macOs option will be [Homebrew](https://brew.sh/). This is the first and usually only package manager softwares will reference for Mac installs so its the easiest to go for. As far as Linux
each distribution will come with its own package manager, Ubuntu uses apt and documents it well.

### Tmux
[Tmux](https://github.com/tmux/tmux/wiki) is short for terminal multiplexer which is lingo for manager basically. What it allows you to do is manage multiple shell instances inside of itself. Tmux works sort of like Russian nesting
dolls, at the highest level you have Sessions, sessions can have one or many Windows, and windows can have one or many Panes, and panes are each a shell instance. There is certainly more to it than this but for just dipping your toes
in this is really all you need to know. A more practical example will maybe help to wrap your head around it. If I begin working on a new project I will start a new session, for that new project I will open a few windows, one for terminal
operations, one for my text editor, and one for a Claude Code instance if need be. Those three windows by default will have one pane and typically I keep it that way but if need be you can open two panes in the same window if you want to
view things side by side. Once you get in there and start using it you'll find your own mental model which works for you, but I highly recommend it if you find you're doing some serious terminal usage.

### Neovim
Any real terminal user worth their salt should know how to use [Neovim](https://neovim.io/), not actually, the vast majority of the developer community uses VS Code or another code editor, but a select few heard about the notorious challenge
of using Vim/Neovim and decided "Hey I can dedicate hours of time learning this obscure text editor just to say I am among the select few who know how to use it". It's like studying Latin, there is little to no practical use, but
if you want to be in the club you can be in the club. I find I personally enjoy the keybinds and mental model behind them. Once it clicks it really clicks and you won't look at another text editor the same. I don't need to
get on my soapbox about the joys of neovim. All I can say is give it a shot you may never go back.

## Go have fun!!
Above are all the tools to get started using the terminal. In today's age of poorly optimized Electron apps the terminal is becoming a dying tool. I implore you to give it a shot if you have any motivation to do so. Once you get in there
and begin to grasp the power and flexibility that the terminal and its associated tools provide you, you may begin to look at regular desktop applications as a bit more restrictive. I hope this blog has made you feel empowered enough
to be even slightly less scared of the terminal or even inspired to try it out, either way theres no wrong way to learn something other than not trying at all!
