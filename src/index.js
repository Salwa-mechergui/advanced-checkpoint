import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';
import ProductTable from './components/ProductTable';
import * as serviceWorker from './serviceWorker';


let products=[{
    name:"Maxwell",
    price:1000,
  categorie:"electronics"
},
  {
    name:"sony",
    price:1000,
  categorie:"electronics"
},
  {
    name:"jeans",
    price:1000,
  categorie:"clothes"
},
  {
    name:"pullover",
    price:1000,
  categorie:"clothes"
}]

let styleTable={margin: "auto",  width:"500px",  alignItems: "center", justifyContent: "center"}

ProductTable.propTypes = {
    price: PropTypes.number,
    name: PropTypes.string,
    categorie: PropTypes.string
}
ProductTable.defaultProps = {
  name: "skirt",
  price: 800,
  categorie: "clothes"
};

ReactDOM.render(<ProductTable products={products} styleTable={styleTable}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
