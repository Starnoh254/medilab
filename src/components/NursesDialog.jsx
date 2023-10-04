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
    const [nurses , setNurses] = useState([]) // empty
    
    const [selectedID , setSelectedID] = useState(0)

    // below hook will show picked nurse as first option
    const [selected , setSelected] = useState('')
    const { instance } = AxiosInstance()


    const handleSelection = (e) => {
        setSelected(e.target.value)
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setSelectedID(e.target.value);
    }

    const Allocate = (selectedId , invoice_no) => {
        instance.post("/task_allocation",{
            nurse_id:selectedId,
            invoice_no:invoice_no
        }).then(function (response) {
            console.log("Response", response);
            alert("Allocated " + response.data.message)
        }).catch(function (error){
            alert("Error is " + error)
        })

    }



    useEffect(() => {
        instance.post("/view_nurses",{
            lab_id:lab_id
        }).then(function (response) {
            console.log("Response", response);
            setNurses(response.data) // Update nurses hook
            console.log(response.data)
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

    function handleAllocate() {
        const confirmed = window.confirm('Are you sure you want to assign the nurse?');
        if (confirmed) {
            Allocate(selectedID, invoice_no);
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
                <select className="form-control" value={selected} onChange={(e) => handleSelection(e)}>
                <option > -- Select --</option>
                    {nurses && nurses.map((nurse) => (
                        <option key={nurse.nurse_id} value={nurse.nurse_id}>
                            {nurse.surname} {nurse.others}
                        </option>
                    ))}
                 </select>
 <br></br>
                Selected : {selectedID} and {invoice_no}<br></br>
                {selectedID && (
                    <button className="btn btn-dark btn-sm"
                        onClick={handleAllocate}>
                    Assign Nurse
                </button>
                )} <br /> <br />               
                 <button className="btn btn-dark btn-sm" onClick={onClose}>Close</button>
            </div>

        </Modal>

    );

     
}

 
export default NursesDialog;