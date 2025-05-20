# React: The parts we take for granted

When using React in our day to day web developer lives its often we take certain things React gives us for granted or over look them. I wanted to take some time to dive a bit deeper into React myself and outline a few things that in React "just work", but really take some lifting under the hood to get done.

### JSX
---
How can we talk about features of React that we take for granted without talking about the new file / component 
format that React brought to the masses in JSX. Before React frameworks such as AngularJS and jQuery kept your 
javascript and html very much separate with your JS doing some sort of referencing of the HTML elements it needed 
to update. For example a basic piece of jQuery to update a button would look like so:

`<button class="retry">`

`$( "button.retry" ).html( "Try Again" )`

This piece of jQuery finds a button with a class name "retry" and updates it's text to "Try Again". 
Now obviously you'd have to have a different piece of HTML to accompany this file which actually created the button 
with a class name of "retry" in order to even reference it via jQuery. A similar example in Angularjs would look something like:

`<button>{{button.text}}</button>`

`button.text = "Submit"; 
button.onClick = function () {
  button.text = "Try Again"
}`

Again in this Angular example you'd have to have a separate HTML file which initializes the button, and attaches the buttons text to the above variable we just created. Now with React we can have our JS create our HTML for us:

`function Button() {
  return (<button>Try Again</button>);
}`

In React's original docs introducing [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) they callout that the intention behind JSX was to provide an alternative solution to code structure than what was currently available.
Current solutions at the time split code by technology (html vs JS) whereas with JSX your html and js are now combined allowing you to separate code by concerns or however else you want.
