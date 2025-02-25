import './App.css';
import React, {useState} from 'react';
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import TimedExercise from "./components/TimedExercise";

function App() {
const [screen, setScreen] = useState("menu");
const [selectedExercise, setSelectedExercise] = useState("");


const exerCise = [
  {exercisename:"Push Ups",type:"repetition"},
  {exercisename:"Bicycling",type:"duration"},
  {exercisename:"Jumping Jacks",type:"repetition"},
  {exercisename:"Running",type:"duration"},
  {exercisename:"Sit Ups",type:"repetition"},
  {exercisename: "Laps",type:"timed"}
];

const ExerciseSelection = (exercise) => {
setSelectedExercise(exercise.exercisename);

setScreen(exercise.type);
}

let content;
if (screen === "menu") {
content = (
<div>
<h1>Go Do Something!</h1>
<h2>Select an exercise:</h2>
<div id="exercises-list">
{exerCise.map((exercise, index) => (
<button key={index} onClick={() => ExerciseSelection(exercise)}>
  {exercise.exercisename}
</button>

))}
</div>
</div>
);
} else if (screen === "repetition") {
return (
<div>
<RepetitionExercise name={selectedExercise}/>

<button onClick={() => setScreen("menu")}>Return</button>
</div>
)
} else if (screen === "duration") {
  return (
  <div>
  <DurationExercise name={selectedExercise}/>
  <button onClick={() => setScreen("menu")}>Return</button>
  </div>
  )
} else if (screen === "timed") {
  return (
  <div>
  <TimedExercise name={selectedExercise}/>
  <button onClick={() => setScreen("menu")}>Return</button>
  </div>
  )
}
return content;
}







export default App;
