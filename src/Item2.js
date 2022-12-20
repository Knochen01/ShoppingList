import React from "react";


const Item2 = ({ name, qty, id }) => {
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                <li>ProductName: {name}</li>
                <li>Quantity: {qty}</li>
            </ul>

        </div>
    )
}
export default Item2;