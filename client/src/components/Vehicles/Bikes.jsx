import React from 'react'
import './vehicles.css'
import BitemList from '../List/BlistItem'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Bikes = () => { 

  const [bikes,setBikes]=useState([{}])
  const [text,setText]=useState("")
  
  

  useEffect(()=>{
    const fetchBikes = async ()=>{
      const res = await axios.get(`/allbikes`);
      console.log(res);
      setBikes(res.data);
  
    }
     fetchBikes()
  },[])
 
  return (
    <>
      <div className="search">
         <input type="text" value={text} onChange={(e)=>setText(e.target.value.toLowerCase())} placeholder="Search for Bikes"/>
     </div>
    
        <div className="data">
          {bikes.map((b) => (<BitemList key={b.toString()} bike={b} /> ))}
        </div>
      
     
    </>
  )
}

export default Bikes