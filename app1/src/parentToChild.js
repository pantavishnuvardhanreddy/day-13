import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
    return <Parent />;
  }
function Parent() {
    const [words, setWords] = React.useState("");
    const [wordss,setWordss] = React.useState("");

    const handleClick = () => {
        setWords("Did you do your homework?");
    };
    const replyClick = () =>{
        setWordss("i am working on it i will doit by EOD");
    };

    return (
        <div>
            <h1>Parent</h1>
            <button onClick={handleClick}>Ask</button>
            <Child hears={words} />
            <button onClick={replyClick}>Reply</button>
            <Reply hearss={wordss} />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <h2>Child</h2>
            <p>{props.hears}</p>
        </div>
    );
}
function Reply(props){
    return(
        <div>
            <p>{props.hearss}</p>
        </div>
    )
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default Parent;