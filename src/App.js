import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

 const showAlert = (message, type) => {
  setAlert({
    msg : message,
    type : type
  });

  setTimeout(() => {
    setAlert(null)
  }, 1500);

 }

  const toggleMode = () => {
   
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#455f91';
      showAlert('Dark mode successfully enabled....', 'success');
      document.title = "Textutil - Dark mode";
    //   setInterval(() => {
    //     document.title = "Textutil - Dark mode";
    //   }, 2000);
    //   setInterval(() => {
    //     document.title= "Textutil - Light mode";
    //  }, 1500);
    }else{
      setMode('light');  
      document.body.style.backgroundColor = "white";
      showAlert('Dark mode successfully disabled...', 'success');
      document.title= "Textutil - Light mode";
    }
    
  }

  const toggleThemeColor = () =>{

    if(mode !== 'Indigo'){
      setMode('Indigo');
      document.body.style.backgroundColor = "Indigo";
      showAlert('Indigo mode successfully enabled...', 'success');
    }
    
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="textUtilText" abouttext="About us" mode={mode} toggleMode={toggleMode} toggleThemeColor={toggleThemeColor}/>
      <Alert alert={alert} />
      <div className={`container my-3 text-${mode ==='dark'?'light':'dark'}`}>
      {/* <Routes> */}
          {/* <Route path="/about" element={<About heading="Our vision"/>} /> */}
          <TextForm showAlert={showAlert} heading="Enter the text of Analys" mode={mode}/>
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}  

export default App;
