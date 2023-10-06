import { useEffect } from "react"
import { useState } from "react"
import AxiosInstance from "../helpers/AxiosInstance"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"
import TestUpdate from "./TestUpdate"
const LabTests = () => {
     //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hooks
    const [lab_tests, setLabTests] = useState(null) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredData, setFilteredData] = useState([]); 
    const [query,setQuery] = useState('')  // Used to query 
    const {instance } = AxiosInstance()

    const [show , setShowDialog] = useState(false);

    const [test_id , setId] = useState('')
    const [test_name , setName] = useState('')
    const [test_description , setDescription] = useState('')
    const [test_cost , setCost] = useState('')
    const [test_discount , setDiscount] = useState('')
    const [availability , setAvailability] = useState('')
    const [more_info , setInfo] = useState('')


    useEffect(() => {
        instance.post("/view_lab_tests", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log("AX"+response);
                setLabTests(response.data)//important
                setFilteredData(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                 console.log(error);
                 setError(error.message)
                 setLoading(false)
        })//end catch
    }, [lab_id]);// end useeffect

    // lab_tests can be accessed here


            const handleLiveSearch = (value) => {
            //ABove value comes from the typing 

            setQuery(value); //query has something as long someone is searching
            //check if lab tests are not empty

            const filtered = lab_tests && lab_tests.filter((item) =>
            item.test_name.toLowerCase().includes(value.toLowerCase())
            );
                //update setFilteredData with filtered items
            setFilteredData(filtered);
  };//end

    return ( 
        <div>
            <Layout />
            <Main>
                <input type="text" placeholder="Search a test name" value={query} 
                onChange={(e)=> handleLiveSearch(e.target.value)} className="form-control m-2 mr-6"/> 
                
                <table className="table table-striped  table-hover m-2">
                    {loading && <div className="text-warning">Loading ...</div>}
                    {error && <div className="text-danger">An error occured. Try again later</div>}
                    <thead>
                         <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Discount</th>
                        <th>Available</th>
                        <th>More</th>
                    </tr>
                    </thead>
                   
                   <tbody>
                      {filteredData && filteredData.map((test) => (
                        <tr className="mt-5" key={test.test_id}>
                            <td>{test.test_name}</td>
                            <td>{test.test_description}</td>
                            <td>{test.test_cost}</td>
                            <td>{test.test_discount}</td>
                            <td>{test.availability}</td>
                            <td>{test.more_info}</td>
                            <td><button onClick = {() => handleDelete(test.test_id)}className="btn btn-danger btn-sm"> Remove</button></td>
                            <td><button onClick = {() => {
                                setId(test.test_id)
                                setDescription(test.test_description)
                                setName(test.test_name)
                                setCost(test.test_cost)
                                setDiscount(test.test_discount)
                                setInfo(test.more_info)
                                setAvailability(test.availability)
                                setShowDialog(true)
                            }}className="btn btn-warning btn-sm"> Update</button></td>
                        
                        </tr>    
                ))}

                <TestUpdate isOpen={show}
                    onClose={() => setShowDialog(false)}
                    test_id = {test_id}
                    test_description= {test_description}
                    test_name= {test_name}
                    test_cost= {test_cost} 
                    test_discount= {test_discount} 
                    availability = {availability}
                    more_info= {more_info}/>

                
                   </tbody>
                  
                </table>
              
            </Main>
            
             
        </div>
        
    );

    function handleDelete(test_id) {
        
        const confirmed = window.confirm('Are you sure you want to delete the test?');
        if (confirmed) {
            console.log(test_id)
            Delete(test_id);
        }
    }

    function Delete (test_id) { 
        instance.delete(`/delete_test?test_id = ${test_id}`)
        .then(function (response) {
                         alert(response.data.message);
                        
                    })
                    .catch(function (error) {
                        alert(error.message)    
        })//end catch
 }
}

 
export default LabTests;