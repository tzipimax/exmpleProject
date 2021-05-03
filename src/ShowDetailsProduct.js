import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

function ShoeDetailsProduct(props) {
    const products = useContext(productsContext);
    const { id } = useParams();
    console.log(id);
    const product = products.find((p) =>(p.name === id));
    console.log(products);
    console.log(product);

    const addToCart = () =>{
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart === null){
            cart = [];
        }
        cart.push(id);
        localStorage.setItem('cart',JSON.stringify(cart));
    }

    return (product ? <div>
        שם: {product.name}<br/>
        מחיר: {product.price}<br/>

        <button onClick={addToCart}>הוספה לסל</button>
    </div> : '')
}

export default ShoeDetailsProduct;