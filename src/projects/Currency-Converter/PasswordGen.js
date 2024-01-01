import Navbar from "../../components/navbar";
import './password.css'
const PasswordGen = () => {

    const passwordarray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ1234567890,./;'[]\\=-`\"\'~_+:\"<>?{}"
    return(
        
        <body>
        <div id="gradient">
        <Navbar Text={"Password Generator"}/>
        <p id="title">THE PASSWORD GAME</p>

        <div id="options"><button id="chars"></button></div>
        <div>{passwordarray[Math.floor(Math.random() * passwordarray.length)]}</div>
        </div>
        </body>
    )
}
export default PasswordGen;