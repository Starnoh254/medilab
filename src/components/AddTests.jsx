import React, {useState, useEffect} from "react";
import styled from "styled-components"
import Main from '../styles/Main'
import axios from 'axios'
import Layout from "../helpers/Layout";
import AxiosInstance from "../helpers/AxiosInstance";

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
    const [failure , setFailure] = useState(null)
    const [success , setSuccess] = useState(null)
    const [loading , setLoading] = useState(null)
     
    const submit = (e) =>{
            e.preventDefault();
           
            console.log("submitting")

                setLoading("We are Proccessing your Request.. Please Wait..")
                AxiosInstance.post("/add_tests", {

                    lab_id: lab_id,
                    test_name: test_name,
                    test_description: test_description,
                    test_cost: test_cost,
                    test_discount: test_discount,
                    availability: availability,
                    more_info: more_info

                } )
                .then(function (response) {
                    setLoading(null)
                    console.log( response.data)
                    setSuccess(response.data.message)
                    setTimeout((function (){
                        setSuccess('')
                    }),5000)
                    setName("");setDescription("");setCost("");setDiscount("");setAvailability("");setInfo("");
     
                })
                .catch(function (error) {
                    setSuccess(null)
                    setLoading(null)
                    setFailure(error)
                    console.log(error);  

                });

            
    }// end Submit

    return (  
        <div className="container">
            <Layout/>
            <Main>
                 <form onSubmit={submit} className="card shadow p-5 pt-4 m-5" >
                <div className="card-body">
                     <h1>Add Lab Test</h1>
                            {loading  && <div className="text-primary">{loading} </div>}
                            {success && <div className="text-success"> {success}</div>}  
                            {failure && <div className="text-danger"> { failure}</div>}
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

                </div>
               
            </form>
            </Main>
           
        </div>
            
        
        
    );
}
 
export default AddTests;