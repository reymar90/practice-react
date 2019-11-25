import React from 'react'
import ReactDOM from 'react-dom'

function ContactCard(props){
    console.log(props)
    return(
        <div>
            <div className="contact-card">
                <h2>{props.contact.name}</h2>
                <img src={props.contact.imgUrl}/>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

export default ContactCard