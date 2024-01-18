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
        <p id="start">Hi! I am Ayush,
        <br/>   
        <div id="text" style={{color : "yellow"}}>
        
        <br/> <div style={{display : "inline-block" , color : "red"}}>&rarr; </div> A student of 8th Grade and a programming enthusiast.
        <br/> <div style={{display : "inline-block" , color : "red"}}>&rarr; </div> A beginner in the world of Programming. 
        <br/> <div style={{display : "inline-block" , color : "red"}}>&rarr; </div> These projects are made using various technologies that i learn and apply.
        <br/> <div style={{display : "inline-block" , color : "red"}}>&rarr; </div> My motive of creating these projects is to learn different technologies and skills and make projects with them.
        </div>  
        </p>
        </div>
        <div id = "web-projects"> 
            <h1 style={{color: "whitesmoke" , textAlign : "center" ,  fontSize : "250%", textShadow : "3px 3px 4px red"}}>Web Projects</h1>
            <ProTemp num = {"1"} title = {"Your weight on other planets"} logo = {Pro1logo} location = {"Pro"}/>
            <ProTemp num = {"2"} title = {"Facts about different Planet"} logo = {Pro2logo} location = {"planet-facts"}/>
            <ProTemp num = {"3"} title = {"Password Generator"} logo = {Pro3logo} location = {"Password-gen"}/>
            <ProTemp num = {"4"} title = {"Quiz App"} logo = {Pro4logo} location = {"kbc"}/>
            <ProTemp num={"5"} title={"Quotes Generator"} logo={Pro5logo} location={"Quotes"}/>
            <ProTemp num={"6"} title={"Wallpaper download(Not for Mobile)"} logo={Pro6logo} location={"Wallpapers"}/>
            <ProTemp num={"7"} title={"Word Unscramble"} logo={Pro7logo} location={"Scramble"}/>
            </div>
            <div id = "app-projects">
            <h1 style={{color: "whitesmoke" , textAlign : "center" ,  fontSize : "250%", textShadow : "3px 3px 4px red"}}>Application Projects</h1>
                <h3 style={{color : "white" , textAlign : "center"}}>In Progress</h3>
                {/* Put Pro_temp components to link the landing sites */}
            </div>
             <div id = "idk-projects">
             {/* Change the id afterwards */}
            <h1 style={{color: "whitesmoke" , textAlign : "center" ,  fontSize : "250%", textShadow : "3px 3px 4px red"}}>Coming soon....</h1>
                
                {/* Put Pro_temp components to link the landing sites */}
            </div>
        </div>
    )
}
export default Homepage;