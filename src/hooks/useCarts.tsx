import {useContext} from 'react';
import {CartsContext} from '../context/CartsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCarts = () => {
  const [carts, setCarts] = useContext(CartsContext);

  async function loadCart(resId) {
    try {
      const jsonCart = await AsyncStorage.getItem(String(resId));
      return jsonCart !== null ? JSON.parse(jsonCart) : null;
    } catch (e) {
      console.log(e);
    }
  }

  async function updateCart(resId, cartCopy) {
    try {
      const jsonValue = JSON.stringify(cartCopy);
      await AsyncStorage.setItem(String(resId), jsonValue);
      console.log('carts updated');
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteCart(resId) {
    try {
      await AsyncStorage.removeItem(String(resId));
      console.log('cart deleted');
    } catch (e) {
      throw new Error(e.message, 'at deleteCart');
    }
  }

  return {
    carts,
    setCarts,
    loadCart,
    updateCart,
    deleteCart,
  };
};

export default useCarts;
