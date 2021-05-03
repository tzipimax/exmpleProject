import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import NewProduct from './NewProduct';
import Products from './Products';
import Search from './Search';
import MyCart from './MyCart';
import { productsContext } from './ProductsContext';
import Settings from './Settings';
import { settingsContext } from './SettingsContext';
import  SettingsContext  from './SettingsContext';
import Clock from './Clock';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const settings = useContext(settingsContext);
  const products = useContext(productsContext);
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const searchProduct = (word) => {
    let results = products.filter(x => x.name.includes(word));
    setUpdatedProducts(results);
  }


  const clearFind = (word) => {
    if (word === '')
      setUpdatedProducts([...products]);
  }
  const addNewProduct = (product) => {
    products.push(product);
    setUpdatedProducts([...products]);
  }

  return (
    <Router>
      <div className="app" style = {{fontSize: `${settings.size}px`}}>
        <Header />
        <Clock/>
        {/* בניית תפריט */}
        <nav>
          <ul>
            <li>
              {/* בניית לינק - קישור */}
              {/* לא נשתמש בקישור הרגיל - a href
              אלא נשתמש בקומפוננטה מיוחדת מתוך ספריית הניווט
              שמקבלת פרופרטי בשם to שמכיל את הניווט */}
              <Link to="/">בית</Link>
            </li>
            <li>
              <Link to="/products">מוצרים</Link>
            </li>
            <li>
              <Link to="/myOrder">סל הקניות</Link>
            </li>
          </ul>
        </nav>
        {/* switch - דומה ברעיון ללואת switch case */}
        {/* יציג לנו את הקומפוננטה המתאימה, בהתאם לניווט המתאים ב url */}
        {/*הסדר מאוד חשוב, כי ברגע שהוא מוצא ניווט מתאים הוא מציג אותו מיד ולא בודק אם יש משהו יותר מתאים */}
        {/*
        <NewProduct addNewProduct={addNewProduct}/>
        <Products products={updatedProducts} />
        <Search searchProduct={searchProduct} clearFind={clearFind}></Search> */}

        <Switch>
          {/* ניתן להוסיף מאפיין שנקרא exact
              מאפיין זה קובע שיהיה ניתן להיכנס לנייוט זה רק אם הניווט מתאים ב 100% לשורת ה url
          */}
          <Route path="/" exact>
            <h1>שלום וברכה זה העמוד הראשי</h1>
          </Route>
          {/* בתוך הקומפוננטה יש להציג את כל אפשרויות הינווט השונות, לכל אפשרות יש ליצור קומפוננטה route
          ולהוסיף לה את המאפיינים המתאימים */}
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/myOrder">
            <MyCart products={products} />
          </Route>
        </Switch>
          <Settings />
      </div>
    </Router>

  );
}

export default App;


