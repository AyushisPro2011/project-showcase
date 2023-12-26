import Navbar from "../components/navbar";
import Pro2logo from '../images/Pro2.png';
import { Link } from "react-router-dom";


import './Homepage.css'

const Homepage = () =>{
    return(
        <div id="homepage">
        <Navbar Text={"Homepage Of Collection"}/>
        <div id="intro_text">
        <p id="start">Hi , I am Ayush Gupta,</p>
        <br></br>
        <p id="main"> A beginner in front-end devlopment. These projects are made using React and simple client-side Scripting and my motive of creating these projects is to learn UI/UX design and react to build webpages.</p>
        
        </div>
        <div id = "projects"> 
            <h2 style={{color: "green" , textAlign : "center" ,  fontSize : "200%" , textDecoration : "underline"}}>My Projects</h2>
            <div id="Pro1">
            <h2 style={{color : "white"}}>Project 1: Your Weight on Other Planets</h2>
            <Link to="Pro"><img src={Pro2logo} style={{width : "90%", height : "40%" , border : "2px solid white" , borderRadius : "5px"}} alt="Project2"></img>
            </Link>
            </div>
        </div>
        
        </div>
    )
}
export default Homepage;