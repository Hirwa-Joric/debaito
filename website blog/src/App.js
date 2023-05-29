import React from "react";
import { AboutUs , ContactUs , Home , PopularBlog , PrivacyPolicy , Sidebar } from "./components/index"

function App() {
  return (
    <div className="App">
      <AboutUs />
      <ContactUs />
      <Home />
      <PopularBlog />
      <PrivacyPolicy /> 
      <Sidebar/>
      </div>
  )
}
export default App;