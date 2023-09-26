import { useEffect,useState } from "react";
import styled  from 'styled-components';
import {  Navigate , useNavigate } from 'react-router-dom'
import axios from "axios"

const SignUp = () => {
    // hooks 
    const navigate = useNavigate()
    const [lab_name, setName] = useState(null)
    const [permit_id, setPermit] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [failure, setFailure] = useState(null)

    // Validation 
    const submit = (e) =>{
            e.preventDefault();
            setLoading(true)
            setSuccess(null)
            setFailure(null)
            console.log("submitting")

        
                axios.post("https://modcom.pythonanywhere.com/api/lab_signup", {
                    lab_name: lab_name,
                    permit_id: permit_id,
                    email: email,
                    phone: phone,
                    password: password

                })
                .then(function (response) {
                    console.log(response);
                    setLoading(false)
                    setSuccess(response.data.message)
                    setTimeout((function (){
                        setSuccess('')
                    }),10000)

                    setEmail(''); setName('');setPassword('');setPermit('');setPhone('')
                    navigate("/sign_in")
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false)
                    setFailure(error.message)
                });

            
    }// end Submit
    return (  
    
        <div className="form">
            <Section>
                
                {loading  && <div className="loading"> We are Proccessing your Request.. Please Wait..</div>}
                {success && <div className="success"> {success}</div>}  
                {failure && <div className="failure"> { failure}</div>}  
                <form onSubmit={submit} className="card shadow p-5 pt-4 mt-5">
                    <h1>Register Your Lab</h1>

                    <div className="card-body pt-3">
                             <input type="text" placeholder="Enter Lab Name" value={lab_name}
                        onChange={(e) => setName(e.target.value)} required className="form-control"/> <br /><br />
                    
                            <input type="text" placeholder="Enter Permit ID" value={permit_id}
                                onChange={(e) => setPermit(e.target.value)} required className="form-control"/> <br /><br />
                            
                            <input type="email" placeholder="Enter Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} required className="form-control"/> <br /><br />

                            <input type="phone" placeholder="Enter Phone" value={phone}
                                onChange={(e) => setPhone(e.target.value)} required className="form-control"/> <br /><br />

                            <input type="password" placeholder="Enter Password" value={password}
                                onChange={(e) => setPassword(e.target.value)} required className="form-control"/> <br /><br />

                    <button className="btn btn-outline-primary">Create Account</button>
                    </div>
                   
            </form>
            </Section>
            
        </div>
    );
}
 
export default SignUp;
const Section = styled.section `
        display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 100px;
    justify-content: center;;
`
   
    