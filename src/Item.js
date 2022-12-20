import React from "react";
import './Item.css'

const Item = ({name, qty, id}) => {
    return (
        <div>
            <ul>
                <li className="Item">Product Name: {name}</li>
                <li className="Item">Product Quantity: {qty}</li>
                <li className="Item">Product Id: {id}</li>
            </ul>
        </div>
    )
}
export default Item;