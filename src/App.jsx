import Hero from "./Components/Herobanner/herobanner";
import Navbar from "./Components/Navbar/navbar";
import './App.css'
import About from "./Components/Aboutus/about";

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
   </div>
  )
}

export default App;