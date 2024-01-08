import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import './KBC.css'

const Win = () => {
    return(
        <div id='KBC-win-main'>
       <Navbar Text={"You won Yay"}/>
       <h1 style={{color : "blueviolet" , textAlign : "center" , fontSize : "400%"}} id='KBC-win-head1'>You have won the Game</h1>
       <h6 style={{color : "blue" , textAlign : "center" , fontSize : "200%"}} id = "KBC-win-head2">You scored 2000 Points Succesfully</h6>
       <button style={{background :"lightsalmon" , position : "absolute" , left : "38%", height : "10%"}} id='KBC-win-try-again'><Link to={"/KBC"} style={{textDecoration : "none" , color : "darkmagenta" , fontSize : "300%"}}>Try the quiz again</Link></button>
       <button  style={{background :"darkblue" , position : "absolute" , left : "40%", top : "80%",height : "10%"}} id = "KBC-win-homepage"><Link to={"/"} style={{textDecoration : "none" , color : "lightgoldenrodyellow" , fontSize : "300%"}}>Try other apps</Link></button>
       </div>
    )
}
export default Win;