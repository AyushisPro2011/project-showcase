import './App.css';
import Pro1 from './projects/Pro1'
import Homepage from './projects/Homepage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;