import React, {useState, useEffect} from "react";
import styled from "styled-components"
import Main from '../styles/Main'
import Layout from "../helpers/Layout";

const Profile = () => {
    return (  
        <div>
            <Layout />
             <Main>
            <div className="main">
                <h1>Welcome to the Profile page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate, inventore fuga nobis, magni temporibus corporis labore atque ut culpa nam eveniet. Ratione quod modi dicta unde, ullam non repellendus?</p>
            </div>
        </Main>
            
        </div>
       
        
    );
}
 
export default Profile;