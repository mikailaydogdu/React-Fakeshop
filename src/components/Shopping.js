import {useState,createContext, useContext, useEffect} from 'react';

const Shopping = createContext();
const defaultShopping = JSON.parse(localStorage.getItem("shopping")) || [];

const ShoppingProvider = ({children}) => {
    const [items, setItems] = useState(defaultShopping);

    useEffect(() => {
        localStorage.setItem("shopping", JSON.stringify(items));
    }, [items]);

    const addShopping = (data, findShopping) => {
        if(!findShopping){
           return setItems((prev) => [data, ...items]);
        }
        const filtered = items.filter((item) => item.id !== findShopping.id);
        setItems(filtered);
    };

    const removeShopping = (item_id) =>{
        const filtered = items.filter((item) => item.id !== item_id);
        setItems(filtered);
    };


    const values = {
        items,
        setItems,
        addShopping,
        removeShopping,
    };

    return(
        <Shopping.Provider value = {values}>{children}</Shopping.Provider>
    );
};

const useShopping = () => useContext(Shopping);

export {ShoppingProvider, useShopping};
