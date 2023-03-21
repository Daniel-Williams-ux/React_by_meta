function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h3>Dark Mode is On</h3>;
  const lightMode = <h3>Light Mode is On</h3>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Dark Mode is On")
    } else {
      console.log("Light Mode is On")
    }
  }
  
  return (
    <div> 
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick} >
        Click Me!
      </button>
    </div>
  );
};

export default ModeToggler;