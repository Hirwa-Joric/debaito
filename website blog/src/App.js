import React from "react";
import { AboutUs, ContactUs, Home, PopularBlog, PrivacyPolicy, Sidebar } from "./components/index"
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
        <Route>
          <Route/>
        </Route>
      </Routes>
    </>
  )
}
export default App;