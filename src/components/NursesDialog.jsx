import { useState , useEffect } from "react";
import styled from 'styled-components'
import CheckSession from "../helpers/CheckSession";
import Main from "../styles/Main";
import AxiosInstance from "../helpers/AxiosInstance";
import Modal from 'react-modal'

// Prop is passing data from one component to another
const NursesDialog = ({isOpen , onClose , invoice_no}) => {
    //check session 
    const { lab_name , lab_id , refresh_token } = CheckSession()

    // below hook will show picked nurse as first option
    const [selected , setSelected] = useState('')

    const handleSelection = (e) => {
        setSelected(e.target.value)
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
    }

    const [nurses , setNurses] = useState([]) // empty
    const { instance } = AxiosInstance()

    useEffect(() => {
        instance.post("/view_nurses",{
            lab_id:lab_id
        }).then(function (response) {
            console.log("Response", response);
            setNurses(response.data) // Update nurses hook
        }).catch(function (error){
            alert("Error is " + error)
        })
    },[lab_id])

    const custom = {
        content: {
            top: '15%',
            left:'30%',
            bottom: '40%'
        }
    }

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={()=>onClose()} 
        contentLabel="Nurse Popup"
        style={custom}>
            <h4>Assignment Section</h4>
            <div className="text-center">
                Inv No: {invoice_no} <br></br>
                <label htmlFor="">Select a Nurse</label> <br/>
                <select className="form-control" value = {selected} onChange={(e)=>handleSelection(e)}>
                    <option value=""> -- Select --</option>
                    {/* Map through the array of nurses */}
                    {nurses && nurses.map((nurse) => {
                        return <option key = {nurse.nurse_id} >{nurse.surname} {nurse.others}</option>
                    })}

                </select> <br></br>
                <button className="btn btn-primary">Assign Nurse</button>
            </div>

        </Modal>

    );
}
 
export default NursesDialog;