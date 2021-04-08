import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index);
  };

  //debemos convertirla en un utils
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Lista de pedidos - Platzi Conf Merch</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}
          {cart.map((item, i) => (
            <div className="Checkout-item" key={i}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item, i)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio Total: $ {handleSumTotal()}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar Pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
