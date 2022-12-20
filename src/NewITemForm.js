import React, { useState } from "react";


const NewItemForm = ({ onChange, onChange2 }) => {

    const INITIAL_STATE = {
        name:"",
        qty: "",
        id: "",
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value} = e.target
        setFormData(formData => (
            {...formData, 
            [name]: value}
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onChange2({...formData})
        setFormData(INITIAL_STATE)
    }


  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product:</label>
                    <input 
                    id="product"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ItemName">
                    </input>
           
                <label htmlFor="quantity">Quantity:{formData.qty}</label>
                    <input
                    id="quanity"
                    type="range"
                    min="1"
                    max="10"
                    step='1'
                    name="qty"
                    value={formData.qty}
                    onChange={handleChange}
                    placeholder="How many">
                    </input>
            </form>
            <button onClick={handleSubmit}>Add Item</button>
        </div>
    )
}
export default NewItemForm;