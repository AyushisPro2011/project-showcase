import Navbar from "../../components/navbar";
import "./KBC.css"
import { Link } from "react-router-dom";

const Loss = (val) =>{
    return(
    <div id="KBC-loss-main">
    <Navbar Text={"You Lost Lol"}/>
        <h1 style={{color : "blue" , fontSize : "400%" , textAlign : "center" , textShadow : "3px 2px 10px lightgrey"}}>You have Lost with {val} points</h1>
        <h6 style={{color : "green" , fontSize : "200%" , textAlign : "center" , textShadow : "3px 2px 10px lightgray"}}>You chose the wrong Option</h6>
        <button  style={{color : "green" , fontSize : "200%" , textAlign : "center" , textShadow : "3px 2px 10px lightgray" , position :"absolute" , left : "38%" , background : "lightpink"}}><Link to={"/KBC"} style={{textDecoration : "none" , color : "darkgreen"}}>Go back and Try Again</Link></button>
        <button  style={{color : "green" , fontSize : "200%" , textAlign : "center" , textShadow : "3px 2px 10px lightgray" , position :"absolute" , left : "43.5%" , top : "80%" , background : "yellow"}}><Link to={"/"} style={{textDecoration : "none" , color : "violet"}}>Homepage</Link></button>
    </div>
)}
export default Loss;