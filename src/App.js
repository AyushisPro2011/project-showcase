import './App.css';
import Pro1 from './projects/weight-calculator/Pro1'
import Homepage from './projects/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PlanetFacts from './projects/Planet-facts/Planet-facts.js';
import Contact from './projects/Contacts';
import PasswordGen from './projects/Currency-Converter/PasswordGen';
import KBC from './projects/KBC/KBC.js';
import Win from './projects/KBC/win.js';
import Loss from './projects/KBC/loss.js';
import Quotes from './projects/Quote-Generator/Quotes.js';
import Wallpaper from './projects/Wallpaper/Wallpaper.js';
import Scramble from './projects/Scramble/Scramble.js';
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
    </Routes>
   </HashRouter>
  );
}

export default App;