import React, {useContext} from 'react'
import Product from './Product'

import AppContext from '../context/AppContext';

import '../styles/components/Products.css'

const Products = () => {
    const {state, addToCart} = useContext(AppContext);
    const {products} = state;

    //Función que llama a otra Función
    //Si no fuera una función que llama a otra se 
    //ejecutaría sin esperar el click del boton
    const handleAddToCart = (product) => () => {
        addToCart(product)
    }
    
    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    )
}

export default Products
