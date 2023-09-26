import React, { useState, useEffect } from 'react';
import styled  from 'styled-components';
import {AiFillAppstore,  AiFillAccountBook, AiFillAlert, AiOutlineAppstore, AiOutlineLogout, AiOutlineWhatsApp } from 'react-icons/ai'
import {AiOutlineBank,AiOutlinePlusCircle,AiOutlineUser,AiTwotoneCopy} from 'react-icons/ai'
import {Link} from "react-router-dom"
import LogOut  from '../helpers/LogOut';
// sudo npm install react-router-dom@latest  - Installation



// Hooks 

const Section = styled.section`
    background-color: blue;
    display: flex;
    position: fixed;
    overflow: auto;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    left: 0;
    width: 25%;
    color: white;
    height: 100vh;
    padding-top: 10px;
    .top{
        display:flex;
        flex-direction: column;
        width: 100%;

        .brand{
        display:flex;
        justify-content: center;
        align-items: center;
            span{
            font-weight: bolder;
            font-size: 1.5rem;
            }
            svg{
                font-size: 2.5rem;
            }
        }

        .links{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            ul{
            list-style-type: none;
            padding: 1rem;
            text-align: left;
                li {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    margin: 5px;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    
                    
                    &:hover{
                        padding: 1rem;
                        background-color: rgba(255,255,255,0.5);
                            a{
                                color: white;
                                text-decoration: none;
                                font-size: larger;
                                svg{
                                    font-size: 3.0rem;
                                }
                            }
                    }
                    a{
                        color: beige;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        svg{

                            fill: pink;
                            margin-right: 10px;
                            font-size: 1.5rem;
                        }
                    
                    }
                }
            }
            .active{
                background-color: rgba(255,255,255,0.5);
                a{
                    font-size: large;
                    svg{
                        font-size: 1.5rem;
                    }
                }
            }
            
        }
    }

    .bottom{
        width: 90%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: center;
        background-color: #f165d3;
        align-items: center;
        border-radius: 10px;
        span{
            font-weight: bolder;
            font-size: 1rem;
        }
        svg{
            font-size: 3rem;
            fill: #fafcfd;
        }

    }
    .logout{
        display: flex;
        background-color: white;
        padding: 5px;width: 6em;display: inline;
        margin-top: 10px;
        border-radius: 20px;
        margin-bottom: 10px;
        a{
            text-decoration: none   ;
        }
    }
   
    
    
`

const SideBar = () => {
    const { logout } = LogOut()
    const[currentLink , setCurrentLink] = useState(null)

    const handleClick = (link) => {
        setCurrentLink(link)
    }
    console.log(currentLink)
    return (  
        <Section>
            <div className="top">
                <div className="brand">
                    <AiOutlineBank />
                    <span>MEDILAB</span>
                </div>

                <div className="links">
                    <ul >
                        <li className={currentLink === 1 ? "active": ""}>
                            <Link  onClick={() => handleClick(1)} to="/"><AiOutlinePlusCircle />Dashboard</Link> 
                        </li>

                         <li className={currentLink === 2 ? "active": ""} >
                            <Link onClick={() => handleClick(2)} to="/profile"><AiOutlineAppstore />My Profile</Link> 
                        </li>

                         <li className={currentLink === 3 ? "active": ""} >
                            <Link onClick={() => handleClick(3)} to="/add_tests"><AiTwotoneCopy />Add Tests</Link> 
                        </li>

                        <li className={currentLink === 4 ? "active": ""} >
                            <Link onClick={() => handleClick(4)} to="/lab_tests"><AiOutlineUser />Lab Tests</Link> 
                        </li>

                         <li className={currentLink === 5 ? "active": ""}>
                            <Link onClick={() => handleClick(5)} to="/my_bookings"><AiOutlinePlusCircle />My Bookings</Link> 
                        </li>

                         <li className={currentLink === 6 ? "active": ""} >
                            <Link  onClick={() => handleClick(6)} to="/add_nurses"><AiFillAccountBook />Add Nurses</Link> 
                        </li>

                       <li className={currentLink === 7 ? "active": ""}>
                            <Link onClick={() => handleClick(7)} to="/nurses"><AiFillAlert /> Nurses</Link> 
                        </li>
                    </ul>
                </div>

            </div>
            
            {/* End topdiv */}
            <div className="bottom">
                <AiOutlineAppstore />
                <span>Unlock for more features.<br/> <button>Go Pro</button></span> 
              
                <span><strong>Upgrade Now</strong></span> <br/>
            </div>

            <div className="p-4">
                <a href="" onClick={logout} className='btn btn-primary '>
                    <AiOutlineLogout/> Log Out
                </a>
            </div>


        </Section>
    );
}
 
export default SideBar;