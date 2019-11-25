import React from 'react';
import TodoItem from './TodoItem'
import './App.css';
import Contacts from './Contacts'
import AppJoke from './MyJoke/AppJoke'
import AppProducts from './product/AppProducts'
import AppTodo from './Phase3/AppTodo'


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
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <Contacts/>
      <AppJoke/>
      <AppProducts/>
      <AppTodo/>
      
    </div>

  )
}
export default App;
