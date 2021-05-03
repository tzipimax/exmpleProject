import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import ShowProduct from './ShowProduct';


function Search(props) {
  let searchBy = '';
  return (
      <div>
          <input type="text" placeholder="חיפוש" onChange={e => {searchBy = e.target.value; props.clearFind(searchBy)}} ></input><br />
          <button onClick={e=> props.searchProduct(searchBy)}>חפש</button>
      </div>
  );
}

export default Search;

