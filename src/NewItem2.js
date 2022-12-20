import React, { useState } from "react";

const NewItem2 = ( { addItem }) => {

    const INITIAL_STATE = {
        item: "",
        qty: ""
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [isValid, setIsValid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    const handleChange = (e) => {
        setIsTouched(true)
        const { name, value } = e.target
        if (value === "") {
            setIsValid(false)
        }
        else {setIsValid(true)}
        setFormData(formData => (
            {...formData, 
            [name]: value}
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            addItem(formData.item, formData.qty)
            setFormData(INITIAL_STATE)
            setIsValid(false)
        } else {
            alert("Items cannot be blank")
        }
       
    }
    return (
        <div>
            <form>
                <label htmlFor="addItem">Add Item:</label>
                    <input
                    id="addItem"
                    type="text"
                    name="item"
                    placeholder="Add Item"
                    value={formData.item}
                    onChange={handleChange}
                    />
                    {!isValid && isTouched && <span style={{color:"red"}}>!Cannot be blank!</span>}
                <label>Add Quantity:</label>
                    <input
                    id="Quantity"
                    type="number"
                    min={0}
                    name="qty"
                    placeholder="Quantity"
                    value={formData.qty}
                    onChange={handleChange}
                    />
                <button onClick={handleSubmit}>Add to List</button>
            </form>

        </div>
    )
}
export default NewItem2;