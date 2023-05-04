// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react'

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState();
  

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}


/*
THE STATE HOOK
Update Function Component State
Let’s get started with the State Hook, the most common Hook used for building React components. 
The State Hook is a named export from the React library, so we import with object destructuring like the following:

import React, { useState } from 'react';
When we call the useState() function, it returns an array with two values:

The current state: The current value of this state.
The state setter: A function that we can use to update the value of this state.
We can use these two values to track the current state of a data value or property and change it when we need to. 
To extract the two values from the array, we can assign them to local variables by using array destructuring. For example:

const [currentState, setCurrentState] = useState();
Let’s have a look at another example of a function component that uses the State Hook:

import React, { useState } from "react";
 
function Toggle() {
  const [toggle, setToggle] = useState();
 
  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
Notice how the state setter function, setToggle(), is called by our onClick event listeners. 
To update the value of toggle and re-render this component with the new value, all we need to do is call the setToggle() 
function with the next state value as an argument.

With the State Hook, updating the state is as simple as calling a state setter function. Calling the state setter signals to React that
the component needs to re-render, so the whole function defining the component is called again. The magic of useState() is that it allows 
React to keep track of the current value of the state from one render to the next!

Instructions
1.
Import the default export from the 'react' library and call it React. We also will be using the State Hook, so go ahead and import the named export 
useState from the 'react' library as well.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Use const to declare and assign the return values from calling useState() to color and setColor.

Checkpoint 3 Passed

Stuck? Get a hint
3.
In the JSX, use onClick event listeners to call the setColor() state setter function with the appropriate color when the user clicks on each of these buttons.

Checkpoint 4 Passed

Stuck? Get a hint
4.
Update the divStyle object so that the backgroundColor property is set to our current state value instead of always showing purple.

Checkpoint 5 Passed

Hint
There are lots of different ways to add styling to our React components. We’ll cover this in more detail in a later lesson. For now, 
let’s focus on using a variable instead of the hard-coded string value of 'purple' in the line below:

const divStyle = {backgroundColor: 'purple'};
Replace the 'purple' string value with our color current state variable, then click different buttons to see the background color change with our state variable!
*/
