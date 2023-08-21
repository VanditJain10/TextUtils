
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';  
import React,{useState} from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [SwitchText, setSwitchText] = useState("dark")
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setmode('dark')
      setSwitchText('light')
      document.body.style.backgroundColor="grey"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light');
      setSwitchText('dark');
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
  <>
  {/* <Router> */}
    <Navbar title="Textutils" theme={mode} togglemode={toggleMode} switch={SwitchText}/>
    <Alert alert={alert}/>

    <div className="container my-3">

        {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={}/>
        </Routes> */}
        <TextForm showalert={showAlert} heading="Enter the title below" theme={mode}/>
    </div>

  {/* </Router> */}
  </>
    
  );
}

export default App;
