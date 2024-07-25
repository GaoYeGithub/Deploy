import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Contact 
                img="Owner.png"
                name="Felix"
                rating="5.0"
                reviewCount={6}
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                title="Renter"
                price={136}
              
            />
            <Contact 
                img="Owner2.png"
                name="Pumpkin"
                rating="5.0"
                reviewCount={5}
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                title="Rentee"
                price={100}
            />
            <Footer />
        </div>
    )
}