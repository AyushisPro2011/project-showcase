import './App.css';
import Pro1 from './projects/weight-calculator/Pro1'
import Homepage from './projects/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CSS_GEN from './projects/css-generator/css-gen.js';
import PlanetFacts from './projects/Planet-facts/Planet-facts.js';
import Contact from './projects/Contacts';
import UnitConverter from './projects/Unit-converter/unit-converter';


function App(){
  return (
    <>
    <HashRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    <Route exact path='/css-gen' element = {<CSS_GEN/>}/>
    <Route exact path='/planet-facts' element = {<PlanetFacts/>}/>
    <Route exact path='/contact' element = {<Contact/>}/>
    <Route exact path='/unit-converter' element = {<UnitConverter/>}/>
    </Routes>
    </HashRouter>
    
    </>
  );
}

export default App;