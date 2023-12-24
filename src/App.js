import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';


const App = ()=> {
  const [value , setValue] = useState('')

 
  return (
    <div className='Background'>
      <Navbar/>
      <Main />
        </div>
    
  );
}

export default App;