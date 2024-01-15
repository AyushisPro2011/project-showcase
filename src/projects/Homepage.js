import Navbar from "../components/navbar";
import Pro1logo from '../images/Pro1.png'
import Pro2logo from '../images/Pro2.png'
import Pro3logo from '../images/Pro3.png'
import Pro4logo from '../images/Pro4.png'
import Pro5logo from '../images/Pro5.png'
import Pro6logo from '../images/Pro6.png'
import Pro7logo from '../images/Pro7.png'



import ProTemp from './Project_Template'


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
            <ProTemp num = {"1"} title = {"Your weight on other planets"} logo = {Pro1logo} location = {"Pro"}/>
            <ProTemp num = {"2"} title = {"Facts about different Planet"} logo = {Pro2logo} location = {"planet-facts"}/>
            <ProTemp num = {"3"} title = {"Password Generator"} logo = {Pro3logo} location = {"Password-gen"}/>
            <ProTemp num = {"4"} title = {"Quiz App"} logo = {Pro4logo} location = {"kbc"}/>
            <ProTemp num={"5"} title={"Quotes Generator"} logo={Pro5logo} location={"Quotes"}/>
            <ProTemp num={"6"} title={"Wallpaper download(Not for Mobile)"} logo={Pro6logo} location={"Wallpapers"}/>
            <ProTemp num={"7"} title={"Word Unscramble"} logo={Pro7logo} location={"Scramble"}/>
            </div>
        </div>
    )
}
export default Homepage;