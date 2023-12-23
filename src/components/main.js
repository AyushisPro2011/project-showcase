import '../App.css'

import { useState  , useEffect} from 'react';
const Main = () => {
    const [selectedOption, setSelectedOption] = useState('option1'); // State to track selected option
    const [inputValue, setInputValue] = useState(''); // State to track user input
    const [result, setResult] = useState(''); // State to store the calculated result
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
useEffect(() => {
      if(selectedOption == "mercury"){
        setResult(inputValue * 0.3779)
      }
      else if (selectedOption == "venus"){
        setResult(inputValue * 0.9072)
      }
      else if (selectedOption == "earth"){
        setResult(inputValue * 1 + ", What else would it be?")
      }
      else if (selectedOption == "mars"){
        setResult(inputValue * 0.3772)
      }
      else if (selectedOption == "jupiter"){
        setResult(inputValue * 2.5926)
      }
      else if (selectedOption == "saturn"){
        setResult(inputValue * 1.065)
      }
      else if (selectedOption == "uranus"){
        setResult(inputValue * 0.8865)
      }
      else if (selectedOption == "neptune"){
        setResult(inputValue * 1.137)
      }
      else if (selectedOption == "pluto"){
        setResult(inputValue * 0.0633)
      }
    });
    return(
        <div className='centralbox'>
        <select onChange= {handleSelectChange} value = {selectedOption}>
            <option value="mercury">Mercury</option>
            <option value="venus">Venus</option>
            <option value="earth">Earth</option>
            <option value="mars">Mars</option>
            <option value="jupiter">Jupiter</option>
            <option value="staurn">Saturn</option>
            <option value="uranus">Uranus</option>
            <option value="neptune">Neptune</option>
            <option value="pluto">Pluto</option>
        </select>
        <input type='number' placeholder='weight in kilogram(kgs)' value={inputValue} onChange={handleInputChange}></input>
        <p> You weight on planet {selectedOption} is {result}</p>
        </div>
    )}
export default Main;