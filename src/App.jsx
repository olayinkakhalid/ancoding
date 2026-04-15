import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import Landing from "./Component/HomePage/landing"
import Course from "./Component/CoursePage/Course"
import Practice from "./Component/PractisePage/Practice"

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Landing />}  />
          <Route path='/courses' element={<Course />}  />
          <Route path='/practice' element={<Practice />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App