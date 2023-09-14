import { useEffect,useState } from "react";
import styled  from 'styled-components';
import axios from "axios"

const SignIn = () => {
    // hooks 
  

    const [email, setEmail] = useState(null)
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

        
                axios.post("https://modcom.pythonanywhere.com/api/lab_signin", {

                    email: email,
                    password: password

                })
                .then(function (response) {
                    console.log( "X "  + response.data)
                    console.log("Y " + response.data.message);
                    console.log("Refresh_token " + response.data.refresh_token);
                    console.log("Lab _id " + response.data.message.lab_id);
                    setLoading(false)
                    //setSuccess(response.data.message)

                    localStorage.setItem("lab_id", response.data.message.lab_id)
                    localStorage.setItem("refresh_token", response.data.refresh_token)
                    console.log("saved " + localStorage.getItem("lab_id"))
                    console.log("saved2 " + localStorage.getItem("refresh_token"))
                    setTimeout((function (){
                        setSuccess('')
                    }),10000)

                    setEmail('');setPassword('');
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
                        <input type="email" placeholder="Enter Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required className="form-control" /> <br /><br />


                        <input type="password" placeholder="Enter Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required className="form-control"/> <br /><br />

                        <button className="btn btn-outline-primary">Login Account</button>
                    </div>
                   
                </form>
            </Section>
        </div>
    );
}
 
export default SignIn;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 55px;
    width: 75%;
    right: 0;
    justify-content: center;
`