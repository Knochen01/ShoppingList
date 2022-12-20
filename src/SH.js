import React, { useState } from "react";
import Item2 from "./Item2";
import NewItem2 from "./NewItem2";
import uuid from 'react-uuid';


const SH = () => {

    const INITIAL_STATE = [
        {id: uuid(), name:"PlaceHolder", qty:3}
    ]

    const [items, setItems] = useState(INITIAL_STATE )

    const addItem = (name, qty) => {
        setItems(items => [...items, { name, qty,  id: uuid() }] )
    }

    return (
        <div>
            <h3>ShoppingList</h3>
            <NewItem2 addItem={addItem} />
            {items.map(({ name, qty }) => <Item2 name={name} qty={qty} id={uuid()} key={uuid()} />)}
        </div>
    )
}
export default SH;