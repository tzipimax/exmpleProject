import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ShowProduct from './ShowProduct';
import ShowProductDetails from './ShowProductDetails';
import {
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { useParams } from 'react-router-dom'
import { productsContext } from './ProductsContext';

const categories=[{name:"shirts",text:"חולצות"},{name:"skirts",text:"חצאיות"},{name:"pants",text:"מכנסיים"},{name:"shoes",text:"מכנסיים"}];

function Products(props) {
  const products = useContext(productsContext);

  let { path, url } = useRouteMatch();

  return (
    <div>
      {categories.map((c)=>(
              <Link to={`${url}/${c.name}`} className="link">{c.text}</Link> 
      ))}
      <br />
      
      

      {categories.map((c)=>(
        <Route path={`${path}/${c.name}`}>
          <ul>
            {/* { products.map((product,index) => (product.category===c.name?<ShowProduct product={product} key={product.name+index} />:'')) } */}
            { products.map((product,index) => (product.category===c.name?<ShowProduct product={<Link to={`${url}/${product.name}` } >{product.name}</Link>} key={product.name+index} />:'')) }
          </ul>
        </Route>
      ))}
      <div className="product-details">
                <Route path={`${path}/:id`}>
                    <ShowProductDetails products={products}/>
                </Route>
      </div>
    </div>
  )
}

export default Products;

Products.propTypes = {
  products:PropTypes.array.isRequired
}