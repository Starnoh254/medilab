import React, {useState, useEffect} from "react";
import styled from "styled-components"
import Main from '../styles/Main'
import axios from 'axios'

const AddTests = () => {
    // user must be logged in to be here
    // hooks

    const lab_id = localStorage.getItem("lab_id")
    const refresh_token = localStorage.getItem("refresh_token")

    const [test_name, setName] = useState(null)
    const [test_description, setDescription] = useState(null)
    const [test_cost, setCost] = useState(null)
    const [test_discount, setDiscount] = useState(null)
    const [availability, setAvailability] = useState(null)
    const [more_info, setInfo] = useState(null)
    
    const submit = (e) =>{
            e.preventDefault();
           
            console.log("submitting")

        
                axios.post("https://modcom.pythonanywhere.com/api/add_tests", {

                    lab_id: lab_id,
                    test_name: test_name,
                    test_description: test_description,
                    test_cost: test_cost,
                    test_discount: test_discount,
                    availability: availability,
                    more_info: more_info

                },{
                    headers: {
                        Authorization : `Bearer ${refresh_token}`
                    }
                })
                .then(function (response) {
                    console.log( "X "  + response.data)
                    console.log("Y " + response.data.message);
                    console.log("Refresh_token " + response.data.refresh_token);
                    console.log("Lab _id " + response.data.message.lab_id);
                   
                    //setSuccess(response.data.message)

                    localStorage.setItem("lab_id", response.data.message.lab_id)
                    localStorage.setItem("refresh_token", response.data.refresh_token)
                    console.log("saved " + localStorage.getItem("lab_id"))
                    console.log("saved2 " + localStorage.getItem("refresh_token"))
                    

                   
                })
                .catch(function (error) {
                    console.log(error);
                  
                    
                });

            
    }// end Submit

    return (  
        <Main>
            <form onSubmit={submit} className="card shadow p-5 pt-4 mt-5" >
                <h1>Add Lab Test</h1>
                            <input type="text" placeholder="Enter Test Name" value={test_name }
                                onChange={(e) => setName(e.target.value)} required className="form-control"/> <br /><br />
                    
                            <input type="text" placeholder="Enter Test Description" value={test_description}
                                onChange={(e) => setDescription(e.target.value)} required className="form-control"/> <br /><br />
                            
                            <input type="text" placeholder="Enter Test Cost" value={test_cost}
                                onChange={(e) => setCost(e.target.value)} required className="form-control"/> <br /><br />

                            <input type="text" placeholder="Enter Test Discount" value={test_discount}
                                onChange={(e) => setDiscount(e.target.value)} required className="form-control"/> <br /><br />

                            <input type="text" placeholder="Enter Availability" value={availability}
                                onChange={(e) => setAvailability(e.target.value)} required className="form-control"/> <br /><br />

                            <input type="text" placeholder="Enter More Information" value={more_info}
                                onChange={(e) => setInfo(e.target.value)} required className="form-control"/> <br /><br />

                    <button className="btn btn-outline-primary">Add LabTest</button>

            </form>
        </Main>
        
    );
}
 
export default AddTests;