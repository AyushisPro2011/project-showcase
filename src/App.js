import './App.css';
import Pro1 from './projects/weight-calculator/Pro1'
import Homepage from './projects/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FileRead from './projects/file-reader/File-reader';


function App(){
  return (
    <>
    <HashRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Pro' element = {<Pro1/>}/>
    <Route path='/File-Reader' element = {<FileRead/>}/>
    </Routes>
    </HashRouter>
    
    </>
  );
}

export default App;