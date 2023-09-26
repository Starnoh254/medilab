import { useEffect } from "react"
import { useState } from "react"
import AxiosInstance from "../helpers/AxiosInstance"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"
const Nurses = () => {
     //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hooks
    const [nurses, setNurses] = useState(null) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredData, setFilteredData] = useState([]); 
    const [query,setQuery] = useState('')  // Used to query 


    useEffect(() => {
        AxiosInstance.post("/view_nurses", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log("AX"+response);
                setNurses(response.data)//important
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

            const filtered = nurses && nurses.filter((item) =>
            item.surname.toLowerCase().includes(value.toLowerCase())||
            item.email.toLowerCase().includes(value.toLowerCase())

            );
                //update setFilteredData with filtered items
            setFilteredData(filtered);
  };//end

    return ( 
        <div>
            <Layout />
            <Main>
                <input type="text" placeholder="Search a Nurse / Email" value={query} 
                onChange={(e)=> handleLiveSearch(e.target.value)} className="form-control m-2 mr-6"/> 
                
                <table className="table table-striped  table-hover m-2">
                    {loading && <div className="text-warning">Loading ...</div>}
                    {error && <div className="text-danger">An error occured. Try again later</div>}
                    <thead>
                         <tr>
                        <th>Name</th>
                        <th>Others</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        
                    </tr>
                    </thead>
                   
                   <tbody>
                      {filteredData && filteredData.map((nurse) => (
                        <tr className="mt-5" key={nurse.nurse_id}>
                            <td>{nurse.surname}</td>
                            <td>{nurse.others}</td>
                            <td>{nurse.email}</td>
                            <td>{nurse.phone}</td>
                            <td>{nurse.gender}</td>
                            <td><button className="btn btn-danger btn-sm"> Remove</button></td>
                            <td><button className="btn btn-warning btn-sm"> Update</button></td>
                        
                        </tr>    
                ))}
                   </tbody>
                  
                </table>
              
            </Main>
            
             
        </div>
        
    );
}
 
export default Nurses;