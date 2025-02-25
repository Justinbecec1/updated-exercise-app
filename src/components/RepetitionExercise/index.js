import React,{useState} from "react";

function Counter({name}) {
const [count, setCount] = useState(0);
return (
<div>
<h1>{name}</h1>
<p>Reps: {count}</p>
<button onClick={() => setCount(count + 1)}>Rep Complete</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
);
}

export default Counter;