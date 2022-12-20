import React, { useState } from "react";

const UserForm = () => {


    // const [username, setUsername] = useState("Chick3n")
    // const [onlyFans, setOnlyFans] = useState("No Account yet")

    const [formData, setFormData] = useState({
        username:"Chicken",
        onlyFans:"NotYet",
        amountOfFood:""
    })
 
    // const handleChange = e => {
    //     setUsername(e.target.value)
    // }
    // const handleChange2 = e => {
    // setOnlyFans(e.target.value)
    // }

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value} = e.target
        setFormData(data => (
            {...data, 
            [name]: value}
        ))

      
    }




    const handleSubmit = (e) => {
        e.preventDefault()
    }
     

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Type name here:</label>
                <input 
                id="Name" 
                type='text' 
                placeholder="username" 
                value={formData.username} 
                name="username" 
                onChange={handleChange} ></input>

                <label htmlFor="OnlyFans">OnlyFansAccount:</label>
                <input 
                id="OnlyFans" 
                type="text" 
                placeholder="HornyandRatchet" 
                value={formData.onlyFans} 
                name="onlyFans" 
                onChange={handleChange} ></input>

                <label>How hungry are you?</label>
                <input
                id="hungry"
                type="text"
                name='amountOfFood'
                placeholder="food"
                value= {formData.amountOfFood}
                onChange={handleChange}
                >
                </input>
                
                <button  onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default UserForm;