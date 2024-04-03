import Hero from "./Components/Herobanner/herobanner";
import Navbar from "./Components/Navbar/navbar";
import About from "./Components/Aboutus/about";
import Feature from "./Components/Features/features";
import './App.css'

const App=()=>{
  return(
   <div className="main">
    <div className="landing">
       <Navbar/>
       <Hero/>
     </div>
     <div className="aboutus">
     <About/>
     </div>
     <div className="features">
      <Feature/>
     </div>
   </div>
  )
}

export default App;