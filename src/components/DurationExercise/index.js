import React, { useCallback, useState, useEffect} from 'react';

export default function DurationExercise({ name }) {
let [timer, setTime] = useState(0)
let [curTime, setCurTime] = useState(0)
let [running, setRunning] = useState(false)

useEffect(() => {
let newTime = setInterval(()=>{
setCurTime(prev=>prev+1)}
, 1000)
setTime(newTime)
return () => clearInterval(newTime)
}, [running]);
let startButton= () => {
clearInterval(timer);
setCurTime(0);
setRunning(true);
}

let click = useCallback(
()=>{
setCurTime(0)
setRunning(true)
}, [])
return (
<div>
<h1>{name}</h1>
<p>Timer: {curTime}</p>
<button onClick={click}>Start</button>
</div>
)
}