import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home"
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Coinspage from "./routes/Coinspage";
import axios from 'axios'
import Footer from "./components/Footer";
import ClockLoader  from "react-spinners/ClockLoader";



function App() {

const [coins,setCoins] = useState([])
const [loading, setLoading] = React.useState(false)

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
       setLoading(false)
  },4000)

},[])

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=true"

useEffect (() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
  })
},[url])


  return (
    <div className="">
     
  
      {                   
        loading ?  <div className="absolute top-[40vh] left-[35%] md:left-[45%]  "> <ClockLoader
         color="#36d7b7"   
        className=""
        loading={loading}
        size={150} 
        
      /> </div>
      
    :

    <div>

     <Navbar />
     <Routes >
      <Route path="/"  element={<Home coins={coins} />}/>
      <Route path="/signin"  element={<Signin />}/>
      <Route path="/signup"  element={<Signup />}/>
 
      <Route path="/coin/:coinId" element={<Coinspage />} />
      </Routes>
      <Footer />
   
      </div> }
 

    </div>
  );
}

export default App;
