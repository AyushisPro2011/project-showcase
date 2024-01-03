import './App.css';
import Pro1 from './projects/weight-calculator/Pro1'
import Homepage from './projects/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PlanetFacts from './projects/Planet-facts/Planet-facts.js';
import Contact from './projects/Contacts';
import PasswordGen from './projects/Currency-Converter/PasswordGen';
import KBC from './projects/KBC/KBC.js';


function App(){
  return (
    <>
    <HashRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    <Route exact path='/kbc' element = {<KBC/>}/>
    <Route exact path='/planet-facts' element = {<PlanetFacts/>}/>
    <Route exact path='/contact' element = {<Contact/>}/>
    <Route exact path='/Password-gen' element = {<PasswordGen/>}/>
    </Routes>
    </HashRouter>
    
    </>
  );
}

export default App;