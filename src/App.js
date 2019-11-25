import React from 'react';

import './App.css';


function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const weekday = new Array(7);
  const styles = {
  fontSize:20
}
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const myday = weekday[date.getDay()];
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color ="green"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color="black"
  } else {
    timeOfDay = "night"
    styles.color ="yellow"
  }
  
  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
      <h2>Happy {myday}</h2>
    </div>

  )
}
export default App;
