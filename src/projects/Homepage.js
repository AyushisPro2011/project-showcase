import Navbar from "../components/navbar";
import Pro2logo from '../images/Pro2.png';
import Pro3logo from '../images/Pro3.png'
import { Link } from "react-router-dom";


import './Homepage.css'

const Homepage = () =>{
    return(
        <div id="homepage">
        <Navbar Text={"Homepage Of Collection"}/>
        <div id="intro_text">
        <p id="start">Hi , I am Ayush Gupta,
        <br/>   
        <div id="text">
        A beginner in front-end devlopment. These projects are made using React and simple client-side Scripting and my motive of creating these projects is to learn UI/UX design and react to build webpages.
        </div>  
        </p>
        </div>
        <div id = "projects"> 
            <h2 style={{color: "green" , textAlign : "center" ,  fontSize : "200%" , textDecoration : "underline"}}>My Projects</h2>
            <div id="Pro1">
            <h2 style={{color : "pink"}}>Project 1: Your Weight on Other Planets</h2>
            <Link to="Pro"><img src={Pro2logo} style={{width : "90%", height : "40%" , border : "2px solid white" , borderRadius : "5px"}} alt="Project2"></img>
            </Link>
            </div>
            <div id="Pro2">
            <h2 style={{color : "pink"}}>Project 2: CSS Generator (Work in progress)</h2>
            <Link to="css_gen"><img src={Pro3logo} style={{width : "90%", height : "40%" , border : "2px solid white" , borderRadius : "5px"}} alt="Project2"></img>
            </Link>
            </div>
        </div>
        
        </div>
    )
}
export default Homepage;