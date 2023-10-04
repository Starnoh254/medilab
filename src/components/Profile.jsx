import React, {useState, useEffect} from "react";
import styled from "styled-components"
import Main from '../styles/Main'
import Layout from "../helpers/Layout";
import  AxiosInstance  from "../helpers/AxiosInstance";
import CheckSession from "../helpers/CheckSession"

const Profile = () => {

    const { lab_name , lab_id , refresh_token} = CheckSession()
    const [user_details , setDetails] = useState({})
    const [loading , setLoading ] = useState(null)
    const [error , setError]  = useState(null)
    const {instance } = AxiosInstance()

    useEffect(() => {
        instance.post("/lab_profile",{
            lab_id: lab_id
        })
        .then(function (response) {
            console.log(response.data.message);
            setDetails(response.data.message)
            setLoading(false)
        })
        .catch(function (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
            
        })

    } , [lab_id])

    const boolean = Object.keys(user_details).length > 0
    console.log("Result " + boolean)


    return (  
        <div>
            <Layout />
             <Main>
            <div className="main">
                <h1>Welcome to the Profile page</h1>
                {loading && <div className="text-warning">Loading ...</div>}
                {error && <div className="text-danger">An error occured. Try again later</div>}

                {
                    boolean ? (
                        <div className="card shadow card-body m-3  text-start col-md-11">
                                <span> <b>ID :</b>&nbsp; {user_details.lab_id}</span> <br />
                                <span> <b>Email :</b>&nbsp; {user_details.email}</span> <br />
                                <span className="text-warning">  <b>Permit ID :</b>&nbsp; {user_details.permit_id} </span> <br />
                                <span className="text-dark">  <b>Tel :</b>&nbsp; {user_details.phone} </span> <br />
                                <span className="text-dark">  <b>Reg Date :</b>&nbsp; {user_details.reg_date} </span> <br />

                                <button className="btn btn-info btn-sm">Edit Details</button> <br/>
                                <button className="btn btn-info btn-sm">Change Password</button>
                        </div>
                    ) : (
                        <span>No Profile Data Found</span>
                    ) 
                    
                }
                
            </div>
        </Main>
            
        </div>
       
        
    );
}
 
export default Profile;