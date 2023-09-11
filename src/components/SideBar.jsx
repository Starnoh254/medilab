import React, { useState, useEffect } from 'react';
import styled  from 'styled-components';
import {AiFillAppstore,  AiFillAccountBook, AiFillAlert, AiOutlineAppstore, AiOutlineLogout, AiOutlineWhatsApp } from 'react-icons/ai'
import {AiOutlineBank,AiOutlinePlusCircle,AiOutlineUser,AiTwotoneCopy} from 'react-icons/ai'


// Hooks 

const Section = styled.section`
    background-color: blue;
    display: flex;
    position: fixed;
    overflow-y: auto;
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
            
                padding: 1rem;
                border-radius: 0.5rem;
                
                
            &:hover{
                padding: 1rem;
                background-color: black;
                a{
                    color: white;
                    text-decoration: none;
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
    const[currnetLink , setCurrentLink] = useState(1)
    return (  
        <Section>
            <div className="top">
                <div className="brand">
                    <AiOutlineBank />
                    <span>MEDILAB</span>
                </div>

                <div className="links">
                    <ul >
                        <li>
                            <a href=""><AiOutlinePlusCircle />Dashboard</a> 
                        </li>
                         <li>
                            <a href=""><AiOutlineAppstore />My Profile</a> 
                        </li>
                         <li>
                            <a href=""><AiTwotoneCopy />Add Tests</a> 
                        </li>
                         <li>
                            <a href=""><AiOutlineUser />Lab Tests</a> 
                        </li>
                         <li>
                            <a href=""><AiOutlinePlusCircle />My Bookings</a> 
                        </li>
                         <li>
                            <a href=""><AiFillAccountBook />Add Nurses</a> 
                        </li>
                        <li>
                            <a href=""><AiFillAlert /> Nurses</a> 
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

            <div className="logout">
                <a href="">
                    <AiOutlineLogout/> Log Out
                </a>
            </div>


        </Section>
    );
}
 
export default SideBar;