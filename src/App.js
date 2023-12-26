import './App.css';
import Pro1 from './projects/weight-calculator/Pro1'
import Homepage from './projects/Homepage';
import Multi_page from './projects/Multi-page/Multi-page';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App(){
  return (
    <>
    <HashRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    </Routes>
    </HashRouter>
    
    </>
  );
}

export default App;