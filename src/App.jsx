import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

import './App.css'

export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Contact 
              img="src/images/Owner.png"
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
            />
            <Contact 
              img="src/images/Owner2.png"
              name="Pumpkin"
              phone="(0800) CAT KING"
              email="pumpkin@scrimba.com"
            />
            <Footer />
        </div>
    )
}