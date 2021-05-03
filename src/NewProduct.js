import React,{ useState } from "react";
import PropTypes from 'prop-types';


function NewProduct(props) {
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductQuantity, setNewProductQuantity] = useState(0);
  const [newProductCategory, setNewProductCategory] = useState('');

  const addNewProductControlled=(event)=>{
    event.preventDefault();
    const newProduct={
      name:newProductName,
      price:newProductPrice,
      quantity:newProductQuantity,
      category:newProductCategory,
    }
    props.addNewProduct(newProduct);
    setNewProductName('');
    setNewProductPrice(0);
    setNewProductQuantity(0);
    setNewProductCategory('');
  }
  

  return (
    <div>
      <form onSubmit={addNewProductControlled}>
      <input type="text" placeholder="תאור המוצר" value={newProductName} onChange={e =>setNewProductName(e.target.value)}></input>
      <br/>
      <input type="number" placeholder="מחיר המוצר" value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)}></input>
      <br/>
      <input type="number" placeholder="כמות המוצר" value={newProductQuantity} onChange={e => setNewProductQuantity(e.target.value)}></input>
      <br/>
      <input type="text" placeholder="קטגוריית המוצר" value={newProductCategory} onChange={e => setNewProductCategory(e.target.value)}></input>
      <br/>
      <button type="submit">צור מוצר</button>
      </form> 
    </div>
  )
}



export default NewProduct;

NewProduct.propTypes = {
  addNewProduct: PropTypes.func.isRequired,
}

