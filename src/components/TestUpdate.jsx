import Modal from 'react-modal'
import { useState } from "react"
import AxiosInstance from '../helpers/AxiosInstance'

const TestUpdate = (props) => {
            const custom = {
        content: {
            top: '15%',
            left:'30%',
            bottom: '40%'
        }
    }



    const [failure , setFailure] = useState(null)
    const [success , setSuccess] = useState(null)
    const [loading , setLoading] = useState(null)

    const [name, setName] = useState(props.test_name)
    const [description, setDescription] = useState(props.test_description)
    const [cost, setCost] = useState(props.test_cost)
    const [discount, setDiscount] = useState(props.test_discount)
    const [availability1, setAvailability] = useState(props.availability)
    const [more_info1, setInfo] = useState(props.more_info)
    console.log("Here" + name)

    const {instance} = AxiosInstance()
    const submit = () => {
        setLoading(true)
        instance.put('/update_nurse',{
            test_id: props.test_id,
            test_name: name,
            test_description: description,
            test_cost: cost,
            test_discount: discount,
            availability: availability1,
            more_info: more_info1


        })
    }

    return ( 
        <Modal 
        isOpen={props.isOpen} 
        onRequestClose={props.onClose} 
        contentLabel="Nurse Popup"
        style={custom}>

             <form  className="card shadow p-5 pt-4 m-5" >
                <div className="card-body">
                     <h1>Update Lab Test</h1>
                            {loading  && <div className="text-primary">{loading} </div>}
                            {success && <div className="text-success"> {success}</div>}  
                            {failure && <div className="text-danger"> { failure}</div>}
                        <input type="text" placeholder="Enter Test Name"value={name}
                            onChange={(e) => setName(e.target.value)} required className="form-control"/> <br /><br />
                
                        <input type="text" placeholder="Enter Test Description" value={description}
                            onChange={(e) => setDescription(e.target.value)} required className="form-control"/> <br /><br />
                        
                        <input type="text" placeholder="Enter Test Cost" value={cost}
                            onChange={(e) => setCost(e.target.value)} required className="form-control"/> <br /><br />

                        <input type="text" placeholder="Enter Test Discount" value={discount}
                            onChange={(e) => setDiscount(e.target.value)} required className="form-control"/> <br /><br />

                        <input type="text" placeholder="Enter Availability" value={availability1}
                            onChange={(e) => setAvailability(e.target.value)} required className="form-control"/> <br /><br />

                        <input type="text" placeholder="Enter More Information" value={more_info1}
                            onChange={(e) => setInfo(e.target.value)} required className="form-control"/> <br /><br />

                <button className="btn btn-outline-primary">Add LabTest</button>

                </div>
               
            </form>
        
        </Modal>
     );
}
 
export default TestUpdate;