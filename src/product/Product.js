import React from 'react'


function Product(props){
    console.log(props);
    return(
        <div>
         
            <h3>name: {props.product.name}</h3>
            <h2>price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2>
            <p>description: {props.product.description}</p>
        </div>
    )
}

export default Product