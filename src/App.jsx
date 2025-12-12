import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import Landing from "./Component/HomePage/landing"

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='' element={<Landing />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App