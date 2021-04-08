import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({ 
        ...state,
        cart: [...state.cart, payload]
     });
  };

  const addToBuyer = payload => {
      setState({
          ...state,
          buyer: [...state.buyer, payload]
      })
  }

  const addNewOrder = (payload) => {
      console.log(payload);
      setState({
          ...state,
          orders: [...state.orders, payload]
      })
  }

  const removeFromCart = (payload, indexToRemove) =>{
      setState({
          ...state,
          cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove)  
      });
  }

  return {
      addToCart,
      addToBuyer,
      addNewOrder,
      removeFromCart,
      state
  }
};

export default useInitialState;
