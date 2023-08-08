import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {

    const [entities,setEntities] = useState([]);
    const token = localStorage.getItem('token') || null
    let url = `https://plv2.bizhueslabs.com/apis/entities/?format=json`
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', 
      };
    

       const getEntitiesData=()=>{
        axios.get(url,{headers})
            .then(response => {
                console.log('Response data:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

    useEffect(()=>{
        getEntitiesData();
    },[])    


  return (
    <div>
      Home
    </div>
  )
}

export default Home
