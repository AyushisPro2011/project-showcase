import Navbar from '../components/navbar'
import '../App.css'
const Contact = () => {
    return(
        <body style={{ background: 'linear-gradient(to right, #ff0000, #0000ff)' , width : '100vw' , height : "100vh" , textShadow : "2px 2px 15px yellow"}}>
        <Navbar Text={"Extras"}/>
        <div style={{border : "2px solid wheat" , borderRadius : "15px" , paddingLeft : "2%"}} id='Extras-info'>
        <p style={{color : "darkblue" , margin : "2%"}}>
            Github repository : <a  style = {{color : "white"}} href='https://github.com/AyushisPro2011/React-Projects'>https://github.com/AyushisPro2011/React-Projects</a><br/>
            Website Production Build :  <a  style = {{color : "white"}} href='https://ayushispro2011.github.io/React-Projects/'>https://ayushispro2011.github.io/React-Projects/</a>
        </p>
        <br/>
        <h1>Technologies used:</h1>
        <ul>
        <li>Vs Code :<a  style = {{color : "white"}} href='https://code.visualstudio.com/'>Official vs code site</a><br/></li>
        <li> Node.js : <a  style = {{color : "white"}} href='https://nodejs.org/en'>Official NPM site</a><br/></li>
        <li>Javascript<br/></li>
        <li>Html<br/></li>
        <li>CSS<br/></li>
        <li>React.js :<a  style = {{color : "white"}} href='https://react.dev/'>https://react.dev/</a><br/></li>
        <li>Git (Version Control System) :<a  style = {{color : "white"}} href='https://git-scm.com/'>https://git-scm.com/</a><br/></li>
        <li> Special Thanks to  Unsplash and pexels for providing all the images:   <a style={{color: 'white'}} href='https://unsplash.com'>https://unsplash.com</a>    <a style={{color: 'white'}} href='https://pexels.com'>https://pexels.com</a>          </li>
        </ul>
        <p>Created by Me(All of the code was written by me)</p>
        <p>Some ideas given by Tirth and Hriday (8th class)</p>
        </div>
        </body>
    )
}
export default Contact;