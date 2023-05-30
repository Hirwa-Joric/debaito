import React from "react";
import { AboutUs, ContactUs, Home, PopularBlog, PrivacyPolicy } from "./components/index"
import Layout from "./components/layout";
import {Route , Router, Routes} from 'react-router-dom'



function App() {
  // return (
  //     <div classNamte="App">
  //     <AboutUs />
  //     <ContactUs />
  //     <Home />
  //     <PopularBlog />
  //     <PrivacyPolicy /> 
  //     <Sidebar/>
  //     </div>
  // )
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index elment={ <Home/>} />
          <Route path="/AboutUs" elment={ <AboutUs/>} />
          <Route path="/ContactUs" elment={ <ContactUs/>} />
          <Route path="/PopularBlog" elment={ <PopularBlog/>} />
          <Route path="/PrivacyPolicy" elment={ <PrivacyPolicy/>} />
        </Route>
      </Routes>
    </>
  )
}
export default App;