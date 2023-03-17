function Heading(props) {
  return (
<div className="hero">
  <div className="container">
    <div className="header"> 
      <h1>{props.greet} My Header Page</h1>
 <p>This is a paragraph</p>    
    </div>
  </div>
</div>
  );
};

export default Heading;