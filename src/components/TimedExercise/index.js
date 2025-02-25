// created a new component, I added 2 new buttons reset and record lap, the record lap button, record the lap, and the reset button resets the timer, making for a perfect workout timer for laps, there is also a reset lap button that resets the array of recorded laps, this is my vision of how a workout app would work.

import React, {  useState, useEffect} from 'react';

export default function DurationExercise({ name }) {
let [timer, setTime] = useState(0)
let [curTime, setCurTime] = useState(0)
let [running, setRunning] = useState(false)
let [lapTime, setLapTime]=useState([])

useEffect(() => {
let newTime = setInterval(()=>{
if (running) {
setCurTime(prev=>prev+1)}
}
, 1000)
setTime(newTime)

return () => clearInterval(newTime)
}, [running]);

let resetButton = () => {
clearInterval(timer);
setCurTime(0)
setRunning(false)
};


let startButton= () => {
setRunning(true);
};

let lapRecord = () => {
if (running) {
setLapTime((tim) => [...tim, curTime])
setCurTime(0);
}
};

let lapReset = () => {
setLapTime([])
}
//let click = useCallback(
//()=>{
//setCurTime(0)
//setRunning(true)
//}, [])
return (
<div>
<h1>{name}</h1>
<p>Timer: {curTime}</p>
<div>
{lapTime.map((lap, index) => (
<div key={index}>
Lap {index + 1}: {lap}
</div>
))}
</div>
<button onClick={startButton}>Start</button>
<button onClick={lapRecord}>Record Lap</button>
<button onClick={resetButton}>Reset</button>
<button onClick={lapReset}>Reset Laps</button>
</div>
)
}