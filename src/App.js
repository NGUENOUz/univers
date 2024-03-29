
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './component/homes/homes'
import About from './component/about/about'
import Contacts from './component/contacts/contacts'
import Headers from './component/headers/headers'
import Footer from './component/footer/footer'
import Experience from './component/experience/experience'
import Skills from './component/skill/Skills'
import './App.css'


import {useTypewriter , Cursor} from 'react-simple-typewriter';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react'
import { useEffect } from 'react'
import NoPage from './component/PageError/noPage'
import Blog from './component/blog/blog';







const App = () => {

    const [isLoading , setIsLoading]= useState(true);
    const [name]= useTypewriter({
      words: ['Bienvenue dans mon univer ! '],
      typeSpeed:70,
    })
  const [counterOn , setConterOn]=useState(false)  

    useEffect( ()=>{
        setTimeout(() => {
          setIsLoading(false)  
        }, 6000);
    })

    const Loader=  ()=> {
      return(
      <div className='loader'>
             <h1>{name} <Cursor/></h1>
      </div>
      )
  }





  return (
    <div>
   
  

   <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Homes />} />
          <Route path="Home" element={<Homes/>} />
          <Route path="/Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
    </div>
  )
}

export default App
