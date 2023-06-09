class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  // Change code below this line
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };
  // Change code above this line

  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

//or
import React, { useState } from 'react';

const ControlledInput = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <h4>Controlled Input:</h4>
      <p>{input}</p>
    </div>
  );
};

export default ControlledInput;
