import React from "react";
import { AboutUs, ContactUs, Home, PopularBlog, PrivacyPolicy } from "./components/index"
import Layout from "./components/layout";
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Home/>}/>
          <Route path="/AboutUs" element={ <AboutUs/>} />
          <Route path="/ContactUs" element={ <ContactUs/>} />
          <Route path="/PopularBlog" element={ <PopularBlog/>} />
          <Route path="/PrivacyPolicy" element={ <PrivacyPolicy/>} />
        </Route>
      </Routes>
    </>
  )
}
export default App;