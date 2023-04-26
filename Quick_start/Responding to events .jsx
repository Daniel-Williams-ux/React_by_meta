//You can respond to events by declaring event handler functions inside your components:
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

/*
Updating the screen 
Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

First, import useState from React:
*/
import { useState } from 'react';
//Now you can declare a state variable inside your component:

function MyButton() {
  const [count, setCount] = useState(0);
  // ...
/*
You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount).
You can give them any names, but the convention is to write [something, setSomething].

The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount()
and pass the new value to it. Clicking this button will increment the counter:
*/

 
//App.jsx
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

//To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest 
//component containing all of them.
//In this example, it is MyApp:
const Button = ({count, onClick}) => {
  return (
    <>
      <h1>Button Count</h1>
      <button onClick={onClick}>
        You clicked me {count} times
      </button>
      </>
  );
};

export default Button;


import React from 'react';
import { useState } from 'react';
import Button from './components/Button'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function handleClicked() {
    setCount(count + 1)
  }  
  return (
    <div>
      <Button count={count} onClick={handleClicked} />
       <Button count={count} onClick={handleClicked} />
    </div>
  );
}
export default App;
