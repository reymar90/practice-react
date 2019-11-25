import React from 'react'
import TodoItem from './TodoItem'
import  todosData from './todosData'

function AppTodo(){
const todoComponents = todosData.map(item => <TodoItem key={item.id} todosData={item} /> )
console.log(todoComponents);
    return(
            <div>
                {todoComponents}
            </div>
    )
}


export default AppTodo