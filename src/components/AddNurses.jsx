import React, {useState, useEffect} from "react";
import Main from '../styles/Main'
import Layout from "../helpers/Layout";
import AxiosInstance from "../helpers/AxiosInstance";
import CheckSession from "../helpers/CheckSession";

const AddNurses = () => {
    // user must be logged in to be here
    // hooks

    // const lab_id = localStorage.getItem("lab_id")
    // const refresh_token = localStorage.getItem("refresh_token")

    const { lab_name , lab_id , refresh_token } = CheckSession()
       

    const [surname, setName] = useState(null)
    const [others, setOthers] = useState(null)
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [failure , setFailure] = useState(null)
    const [success , setSuccess] = useState(null)
    const [loading , setLoading] = useState(false)
    const [selected , setSelected ] = useState('')

    const handleSelect = (e) => {
        setSelected(e.target.value)
    }
    console.log("Selected " + selected)
     
    const submit = (e) =>{
            e.preventDefault();
            setLoading(true)
            setSuccess(null)
            setFailure(null)
           
            console.log("submitting")

                setLoading("We are Proccessing your Request.. Please Wait..")
                AxiosInstance.post("/add_nurse", {

                    lab_id: lab_id,
                    surname: surname,
                    others: others,
                    gender: gender,
                    email: selected,
                    phone: phone,
                    

                } )
                .then(function (response) {
                    setLoading(false)
                    console.log( response.data)
                    setLoading(false)
                    setSuccess(response.data.message)
                    setTimeout((function (){
                        setSuccess('')
                    }),5000)
                    setName("");setGender("");setOthers("");setEmail("");setPhone("");
     
                })
                .catch(function (error) {
                    setSuccess(null)
                    setLoading(false)
                    setFailure(error.message)
                    console.log(error);  

                });

            
    }// end Submit

    return (  
        <div className="container">
            <Layout/>
            <Main>
                 <form onSubmit={submit} className="card shadow p-5 pt-4 m-5" >
                <div className="card-body">
                     <h1>Add a Nurse</h1>
                            {loading  && <div className="text-primary">Please wait .. </div>}
                            {success && <div className="text-success"> {success}</div>}  
                            {failure && <div className="text-danger"> { failure}</div>}
                        <input type="text" placeholder="Enter Nurse Name" value={surname }
                            onChange={(e) => setName(e.target.value)} required className="form-control"/> <br /><br />
                
                        <input type="text" placeholder="Enter Others" value={others}
                            onChange={(e) => setOthers(e.target.value)} required className="form-control"/> <br /><br />
                        
                        <label htmlFor="">Your Gender</label><br/>
                        <input type="radio" value="Male"
                        onChange={handleSelect}
                        checked={ selected === 'Male'} /> Male <br/>

                        
                        <input type="radio" value="Female"
                        onChange={handleSelect}
                        checked={ selected === 'Female'} /> Female <br/>


                        <input type="text" placeholder="Enter Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required className="form-control"/> <br /><br />

                        <input type="text" placeholder="Enter Phone" value={phone}
                            onChange={(e) => setPhone(e.target.value)} required className="form-control"/> <br /><br />

                    
                <button className="btn btn-outline-primary">Add Nurse</button>

                </div>
               
            </form>
            </Main>
           
        </div>
            
        
        
    );
}
 
export default AddNurses;