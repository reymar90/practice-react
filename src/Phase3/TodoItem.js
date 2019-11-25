import React from "react"


function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todosData.completed} />
            <p>{props.todosData.text}</p>
        </div>
    )
}

export default TodoItem