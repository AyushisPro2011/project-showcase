import './App.css';
import Pro1 from './apps/weight-calculator/Pro1'
import Homepage from './apps/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PlanetFacts from './apps/Planet-facts/Planet-facts.js';
import Contact from './apps/Contacts';
import PasswordGen from './apps/Currency-Converter/PasswordGen';
import KBC from './apps/KBC/KBC.js';
import Win from './apps/KBC/win.js';
import Loss from './apps/KBC/loss.js';
import Quotes from './apps/Quote-Generator/Quotes.js';
import Wallpaper from './apps/Wallpaper/Wallpaper.js';
import Scramble from './apps/Scramble/Scramble.js';
import ScramWin from './apps/Scramble/Scram-win.js';
import ScramLoss from './apps/Scramble/Scram-loss.js';
function App(){
  return (
    <HashRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    <Route exact path='/kbc' element = {<KBC/>}/>
    <Route exact path='/planet-facts' element = {<PlanetFacts/>}/>
    <Route exact path='/contact' element = {<Contact/>}/>
    <Route exact path='/Password-gen' element = {<PasswordGen/>}/>
    <Route exact  path='/KBC-win' element = {<Win/>}/>
    <Route exact  path='/KBC-loss' element = {<Loss/>}/>
    <Route exact path='/Quotes' element = {<Quotes/>}/>
    <Route exact path='/Wallpapers' element = {<Wallpaper/>}/>
    <Route exact path='Scramble' element = {<Scramble/>}/>
    <Route exact path='/Scram-win' element = {<ScramWin/>}/>
    <Route exact path='/Scram-loss' element = {<ScramLoss/>}/>
    </Routes>
   </HashRouter>
  );
}

export default App;