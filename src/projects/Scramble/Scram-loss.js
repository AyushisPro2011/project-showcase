import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

const ScramLoss = () =>{
    return(
    <div id="KBC-loss-main">
    <Navbar Text={"You Lost Lol"}/>
        
        <h1 style={{color : "blue" , fontSize : "400%" , textAlign : "center" , textShadow : "3px 2px 10px lightgrey"}} id="KBC-loss-head1">You have Lost</h1>
        <h6 style={{color : "green" , fontSize : "200%" , textAlign : "center" , textShadow : "3px 2px 10px lightgray"}} id="KBC-loss-head2">Your Input was Not correct</h6>
        <button  style={{color : "green" , fontSize : "200%" , textAlign : "center" , textShadow : "3px 2px 10px lightgray" , position :"absolute" , left : "38%" , background : "lightpink"}} id="KBC-loss-try-again"><Link to={"/Scramble"} style={{textDecoration : "none" , color : "darkgreen"}}>Go back and Try Again</Link></button>
        <button  style={{color : "green" , fontSize : "200%" , textAlign : "center" , textShadow : "3px 2px 10px lightgray" , position :"absolute" , left : "43.5%" , top : "80%" , background : "yellow"}}  id="KBC-loss-homepage"><Link to={"/"} style={{textDecoration : "none" , color : "violet"}}>Homepage</Link></button>
    
    </div>
)}
export default ScramLoss;