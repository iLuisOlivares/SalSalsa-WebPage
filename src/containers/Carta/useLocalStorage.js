import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [carrito, setCarrito] = useState(() => {
    try {
      const item = window.localStorage.getItem("Carrito");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setCarrito(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
    return [carrito, setValue];
  };
}
