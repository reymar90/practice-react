import React from 'react'
import productsData from './productsData'
import Product from './Product'


function AppProduct(){
    const productsComponents = productsData.map(prod => <Product  key={prod.id}  product={prod} /> )
    console.log(productsComponents);

    return(

        <div>
            {productsComponents}
        </div>
      
    )
}

export default AppProduct