import React, { useState, useEffect } from 'react';
import styled  from 'styled-components';
import {AiFillAppstore,  AiFillAccountBook, AiFillAlert, AiOutlineAppstore, AiOutlineLogout, AiOutlineWhatsApp, AiFillCalendar, AiFillBell } from 'react-icons/ai'
import {AiOutlineBank,AiOutlinePlusCircle,AiOutlineUser,AiTwotoneCopy} from 'react-icons/ai'
import { AiOutlineCalendar } from 'react-icons/ai';
import Avatar from "../images/profile-picture.webp"

const TopBar = () => {
    const lab_name = localStorage.getItem("lab_name")
    return ( 
        <Nav>
            <div className='title'>
                <span className="fs-6 ml-1"> You are logged in as {lab_name}</span>
            </div>

            <div className="search">
                <form action="">
                    <input className='input' type="text" placeholder='Search'/>
                </form>
            </div> 

            <div className="content">

                <div className="date">
                    <AiFillCalendar/>
                    <span>Sept , 11 , 2023</span>
                </div>


                 <AiOutlineAppstore/>
                 <AiFillBell/>
              
                <div className="image">
                        <img src={Avatar} alt="" width={20}/>
                    </div>

            </div>

            
        </Nav>
     );
}
 
export default TopBar;
const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 75%;
    right: 0;
    height: 10%;
    z-index: 1000;
    align-items: center;
    background-color: aliceblue;
    justify-content: space-between;
    

    .title{
        color: orange;
        margin-left: 5px;
        font-size: 5px;
        flex: 1;
    }
    .search{
        flex: 1;
        .input{
            border-radius: 25px;
            padding: 10px;
            border-color: transparent;
        }
    }
    .content{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 2;
        .date{
            display: flex;
            align-items: center;
            span {
                color: grey;
                margin-left: 5px;
            }
        }
    }
`