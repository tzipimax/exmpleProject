import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";



function ShowProduct(props) {
  let { path, url } = useRouteMatch();

  return (


   ( 
     <div> 
       <li>
            {/* <Link to={`${url}/${props.product.name}` } >{props.product.name}</Link> */}
            {
              props.product
            }
       </li>
   </div>  
   )
  )
}

export default ShowProduct;
ShowProduct.propTypes = {
  product: PropTypes.object.isRequired,
}
