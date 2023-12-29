import './App.css';
import Pro1 from './projects/weight-calculator/Pro1'
import Homepage from './projects/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CSS_GEN from './projects/css-generator/css-gen.js';


function App(){
  return (
    <>
    <HashRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    <Route exact path='/css_gen' element = {<CSS_GEN/>}/>
    </Routes>
    </HashRouter>
    
    </>
  );
}

export default App;