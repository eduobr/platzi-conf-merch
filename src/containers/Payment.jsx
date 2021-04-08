import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart, buyer }, addNewOrder,} = useContext(AppContext);

  const history = useHistory();

  const paypalOptions = {
    clientId: String(process.env.CLIENT_ID_PP),
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    console.log('status: ', data.status);

    if (data.status === 'COMPLETED') {
      console.log('entró en completado')
      
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      
      addNewOrder(newOrder);
      
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            onClick={() => {
              console.log('Start Payment');
            }}
            onSuccess={(data) => {
              handlePaymentSuccess(data);
            }}
            onError={(error) => {
              console.log(error);
            }}
            onCancel={(data) => {
              console.log(data);
            }}
          />
          Boton de pago con Paypal
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
