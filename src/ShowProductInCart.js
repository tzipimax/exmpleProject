import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";



function ShowProductInCart(props) {
  return ((
    <div>
        <li>תאור:{props.product.name} מחיר: {props.product.price} כמות: {props.product.quantity}</li>          
    </div>
)
)
  
}

export default ShowProductInCart;
