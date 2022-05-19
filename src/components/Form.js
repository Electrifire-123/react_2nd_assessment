import React, { useState } from "react";
import Submit from "./Submit";
import { v1 as uuidv1 } from 'uuid';

const  Form = () => {
    const [submit, setSubmit] = useState([]);
    const [inpData, setInpData] = useState( [
        {userName : ""},
        {department: ""},
        {rating : (0)},
        // id : uuidv1()
    ]);
    const {userName, department, rating} = inpData;

    const userHandler = (user) => {
        const name = user.target.name;
        const value = user.target.value;
        setInpData({...inpData, [name]:value})
        // setInpData({...inpData, [user.target.name]:user.target.value})
        // console.log("called")
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // It is used to remove the default action of the form, that is nothing but, rerendering of our page, to avoid this we are going to use preventDefault funtion
        const updatedValues = {...inpData, id: uuidv1()}
        

        setSubmit([...submit,updatedValues]);
        setInpData({
            userName: '',
            department: '',
            rating: (0)
        })
    }
    return(
        <>
        
        
             <div className="form_container">
            <form onSubmit={submitHandler} >
            <div>
                 <label>Name:</label>
                <input 
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder="username"
                    onChange={userHandler}
                    required
                    
                />
            </div>
            <div>
                    <label>Department:</label>
                     <input 
                        type="text"
                        value={department}
                        name="department"
                        placeholder="department"
                        onChange={userHandler}
                        required

                     />
            </div>
             
            <div>
                    <label>Rating:</label>

                    <input 
                        type="number"
                        name="rating"
                        value={rating}
                        max={10}
                        min={0}
                        placeholder="rate"
                        onChange={userHandler}
                        required

                    />
            </div>
             <div>
                    <input 
                        className="button"
                        type="submit"
                    />
             </div>
            </form>
            </div>
            <Submit submit={submit}/>

        </>
    )

}

export default Form;