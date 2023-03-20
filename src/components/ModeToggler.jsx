function Btn(props) {
 const darkMode = true;
 const darkModeOn = <h3>Dark Mode is On</h3>;
 const lightModeOn = <h3>Light Mode is On</h3>;


 return (
  <div> 
    {darkMode ? darkModeOn : lightModeOn}
  </div>
 );
};

export default Btn;