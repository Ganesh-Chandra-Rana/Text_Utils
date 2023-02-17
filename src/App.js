import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/dismissed_Alert';
import About from './components/about';
  import {
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


function App() {
  
  const [alert, setAlert] = useState(null);
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
      
    } )
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='rgb(38 38 165 / 77%)';
      showAlert("Dark Mode has been enabled",'success');
      document.title="TextUtils - Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled",'success');
      document.title="TextUtils - Light Mode"
      setInterval(() => {
        document.title="Welcome To TextUtils";
      }, 3000);


    }
  }
  
  

  return (
    
   
    
     <Router>
    <Navbar title="TextUtil" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Navbar title={345} about="About Us" /> it will show that prop-type should be string in console  */}
     {/*<Navbar/> by default set props  */}
    <div className="container">
      <Routes>
   
     <Route exact path="/about"  element={ <About mode={mode}/>}/>
     <Route path="/"  element={ <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> }/>

   </Routes>
        </div>  
      </Router>
      
  );
  
}

export default App;
