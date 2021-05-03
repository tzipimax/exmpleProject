import React, { createContext } from 'react';

export const productContext = createContext([]);

const products = [{ name: "d", price: 20, quantity: 50, category: "shirts" },
{ name: "חולצה שחורה", price: 20, quantity: 50, category: "shirts" },
{ name: "חצאית נחמדה", price: 20, quantity: 50, category: "skirts" },
{ name: "כפכפים", price: 20, quantity: 50, category: "shoes" }
];



export default function ProductContext(props) {
    
    console.log(products)
    return (
        <productContext.Provider value={products}>
            { props.children}
        </productContext.Provider>
    );
}