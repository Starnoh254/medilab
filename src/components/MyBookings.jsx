import { useEffect } from "react"
import { useState } from "react"
import AxiosInstance from "../helpers/AxiosInstance"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"
const MyBookings = () => {
     //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hooks
    const [bookings, setBooking] = useState(null) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredData, setFilteredData] = useState([]); 
    const [query,setQuery] = useState('')  // Used to query 


    useEffect(() => {
        AxiosInstance.post("/view_bookings", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log("AX"+response);
                setBooking(response.data)//important
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

            const filtered = bookings && bookings.filter((item) =>
            item.appointment_date.toLowerCase().includes(value.toLowerCase())||
            item.invoice_no.toLowerCase().includes(value.toLowerCase())

            );
                //update setFilteredData with filtered items
            setFilteredData(filtered);
  };//end

    return ( 
        <div>
            <Layout />
            <Main>
                <input type="text" placeholder="Search by date/ Invoice Number" value={query} 
                onChange={(e)=> handleLiveSearch(e.target.value)} className="form-control m-2 mr-6"/> 
                
                <table className="table table-striped  table-hover m-2">
                    {loading && <div className="text-warning">Loading ...</div>}
                    {error && <div className="text-danger">An error occured. Try again later</div>}
                    <thead>
                         <tr>
                        
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Member</th>
                        <th>Where Taken</th>
                        <th>Test</th>
                        
                    </tr>
                    </thead>
                   
                   <tbody>
                      {filteredData && filteredData.map((booking) => (
                        <tr className="mt-5" key={booking.book_id}>
                        
                            <td>{booking.appointment_date}</td>
                            <td>{booking.appointment_time}</td>
                            <td>{booking.member.surname}</td>
                            <td>{booking.where_taken}</td>
                            <td>{booking.test_details.test_name}</td>
                            <td><button className="btn btn-danger btn-sm"> Accept</button></td>
                            <td><button className="btn btn-warning btn-sm"> Decline</button></td>
                        
                        </tr>    
                ))}
                   </tbody>
                  
                </table>
              
            </Main>
            
             
        </div>
        
    );
}
 
export default MyBookings;