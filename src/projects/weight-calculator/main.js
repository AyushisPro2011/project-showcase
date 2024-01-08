import './Pro.css'
import Sidebar from '../../components/sidebar';
import { useState  , useEffect} from 'react';
const Main = () => {
    const [selectedOption, setSelectedOption] = useState('______'); // State to track selected option
    const [inputValue, setInputValue] = useState(''); // State to track user input
    const [result, setResult] = useState(''); // State to store the calculated result
  
    const handleSelectChange = (option) => {
      setSelectedOption(option);
    ;}
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    ;}
    
useEffect(() => {
    switch (selectedOption) {

      
      case "Moon":
        setResult(inputValue * 0.165);break
      
      case "Mercury":
        setResult(inputValue * 0.3779);break
      
      case "Venus":
        setResult(inputValue * 0.9072);break
      
      case "Earth":
        setResult(inputValue * 1.0  );break
      
      case "Mars":
        setResult(inputValue * 0.3772);break
      
      case "Jupiter":
        setResult(inputValue * 2.5926);break
      
      case "Saturn":
        setResult(inputValue * 1.065);break
      
      case "Uranus":
        setResult(inputValue * 0.8865);break
      
      case "Neptune":
        setResult(inputValue * 1.137);break
      case "Pluto":
        setResult(inputValue * 0.0633);break
      
      case "Eris":
        setResult(inputValue * 0.06);break
      
      case "Haumea":
        setResult(inputValue * 0.40);break
      
      case "MakeMake":
        setResult(inputValue * 0.05);break
      
      case "Ceres":
        setResult(inputValue * 0.027);break
      
      case "Ganymede-Jupiter":
        setResult(inputValue *0.146);break
      
      case "Titan-Saturn":
        setResult(inputValue * 0.138);break
      
      case "Callisto-Jupiter":
        setResult(inputValue * 0.126);break
      
      case "Io-Jupiter":
        setResult(inputValue * 0.183);break
      
      case "Europa-Jupiter":
        setResult(inputValue * 0.134);break
      default:
        setResult(inputValue * 0)
    }}, [selectedOption, inputValue]);
    return(
       <>
       <Sidebar handleButtonClick = {handleSelectChange}/> 
       <div className='centralbox'>
        <input type='number' placeholder='weight in kilogram(kgs)' value={inputValue} onChange={handleInputChange} maxLength={10}></input>
        <p> Your weight on {selectedOption} is ~{result * 1} kgs or ~{result * 2.205} pounds</p>
        </div>
        </>
    )}
export default Main;