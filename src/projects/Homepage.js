import Navbar from "../components/navbar";
import Pro2logo from '../images/Pro2.png';
import Pro3logo from '../images/Pro3.png'
import Pro4logo from '../images/Pro4.png'
import { Link } from "react-router-dom";
import Pro_Temp from "./Project_Template";


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
            <h1 style={{color: "green" , textAlign : "center" ,  fontSize : "200%" , textDecoration : "underline"}}>My Projects</h1>
            <Pro_Temp num = {"1"} title = {"Your weight on other planets"} logo = {Pro2logo} location = {"Pro"}/>
            <Pro_Temp num = {"2"} title = {"Facts about different Planet"} logo = {Pro4logo} location = {"planet-facts"}/>
            <Pro_Temp num = {"3"} title = {"Unit Converter"} logo = {Pro2logo} location = {"unit-converter"}/>
            <Pro_Temp num = {"4"} title = {"CSS Generator(In progress)"} logo = {Pro3logo} location = {"css-gen"}/>
            {/* <div id="Pro3">
            <h2 style={{color : "pink"}}>Project 2 :Facts about different planets</h2>
            <Link to="planet-facts"><img src={Pro4logo} style={{width : "90%", height : "40%" , border : "2px solid white" , borderRadius : "5px"}} alt="Project3"></img>
            </Link>
            </div>
            <div id="Pro2">
            <h2 style={{color : "pink"}}>Project 3: CSS Generator (Work in progress)</h2>
            <Link to="css_gen"><img src={Pro3logo} style={{width : "90%", height : "40%" , border : "2px solid white" , borderRadius : "5px"}} alt="Project2"></img>
            </Link> */}
           
            </div>
        </div>
    )
}
export default Homepage;