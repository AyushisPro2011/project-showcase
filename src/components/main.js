import '../App.css'
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useState  , useEffect} from 'react';
const Main = () => {
    const [selectedOption, setSelectedOption] = useState('option1'); // State to track selected option
    const [inputValue, setInputValue] = useState(''); // State to track user input
    const [result, setResult] = useState(''); // State to store the calculated result
  
    const handleSelectChange = (option) => {
      setSelectedOption(option);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
useEffect(() => {
      if (selectedOption == "Moon"){
        setResult(inputValue * 0.165)
      }
      else if(selectedOption == "Mercury"){
        setResult(inputValue * 0.3779)
      }
      else if (selectedOption == "Venus"){
        setResult(inputValue * 0.9072)
      }
      else if (selectedOption == "Earth"){
        setResult(inputValue * 1.0  )
      }
      else if (selectedOption == "Mars"){
        setResult(inputValue * 0.3772)
      }
      else if (selectedOption == "Jupiter"){
        setResult(inputValue * 2.5926)
      }
      else if (selectedOption == "Saturn"){
        setResult(inputValue * 1.065)
      }
      else if (selectedOption == "Uranus"){
        setResult(inputValue * 0.8865)
      }
      else if (selectedOption == "Neptune"){
        setResult(inputValue * 1.137)
      }
      else if (selectedOption == "Pluto"){
        setResult(inputValue * 0.0633)
      }
    });
    return(
       <>
       <Sidebar handleButtonClick = {handleSelectChange}/> 
       <div className='centralbox'>
        <input type='number' placeholder='weight in kilogram(kgs)' value={inputValue} onChange={handleInputChange} maxLength={10}></input>
        <p> You weight on {selectedOption} is ~{result} kgs or ~{result * 2.205} pounds</p>
        </div>
        </>
    )}
export default Main;