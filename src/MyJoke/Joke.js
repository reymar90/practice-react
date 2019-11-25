import React from 'react'


function Joke(props){
    console.log(props)
    return(
        <div>
        <br/>
        <p style = {{display:!props.question && "none"}}>Question: {props.question}</p>
        <p style ={{color: !props.question && "gray"}}>PunchLine: {props.punchLine}</p>
        </div>
    )
}


export default Joke