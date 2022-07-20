import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react";
function App() {
    return <Parent1 />;
  }
  
  function Parent1() {
    const [message, setMessage]=useState('');
    const handleRequest = (request) => {
      if (request.includes("car")) {
        setMessage('set by child');
      }
    };
  
    return (
      <div data-testid='parent1'>
        <h1>Parent</h1>
        <p data-testid='message1'>{message}</p>
        <Child onRequest={handleRequest} />
      </div>
    );
  }
  function Child(props) {
    const handleClick = () => {
      props.onRequest("Can I have the car?");
    };
  
    return (
      <div data-testid='child1'>
        <h2>Child</h2>
        <button data-testid='child1Btn' onClick={handleClick}>Ask for the car</button>
      </div>
    );
  }
  
//   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default Parent1;