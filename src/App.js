import React, {useState} from 'react';
import './App.css';
import Log from './Log';

function  prependPlusOne(array){
    let output = [(array.length + 1) + ". Eén erbij"];
    array.map((element) => output.push(element));
    return output;
}

function  prependMinusOne(array){
    let output = [(array.length + 1) + ". Eén eraf"];
    array.map((element) => output.push(element));
    return output;
}


function App() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);

    return (
        <>
            <div>
                <button
                    type="button"
                    className="countingbutton"
                    onClick={() => {
                        setHistory(prependMinusOne);
                        //console.log(prependMinusOne(history));
                        setCount(count - 1);
                    }}>
                    -
                </button>
                <span className="counter">{count}</span>
                <button
                    type="button"
                    className="countingbutton"
                    onClick={() => {
                        setHistory(prependPlusOne);
                        //console.log(prependPlusOne(history));
                        setCount(count + 1);
                    }}>
                    +
                </button>
            </div>
            <div>
                <button
                    type="button"
                    className="resetbutton"
                    onClick={() => {
                        setCount(0);
                        setHistory([]);
                        //console.clear();
                    }}
                >
                    Reset
                </button>
            </div>

            <div>
                <h2>Log</h2>
                <Log
                    history = {history}
                />
            </div>
        </>


    );
}

export default App;
