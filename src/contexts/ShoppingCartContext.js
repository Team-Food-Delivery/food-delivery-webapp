import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export default ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [stores, setStores] = useState([]);

    // Get local storage of stores and count

    values ={
        count,
        setCount,
        stores,
        setStores,
    }

    return (
        <ShoppingCartContext.Provider value={values}>
            {children}
        </ShoppingCartContext.Provider>
    )
}