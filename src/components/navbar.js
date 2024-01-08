import "../App.css"
import { Link } from "react-router-dom"

const Navbar = ({Text , color}) =>{
    const handleDownload = () => {
        // Assuming you have the URL to your existing ZIP file
        const zipFileUrl = 'https://github.com/AyushisPro2011/React-Projects/archive/main.zip';
    
        // Create an anchor element
        const link = document.createElement('a');
        link.href = zipFileUrl;
        link.download = 'yourfile.zip'; // Set the filename
    
        // Simulate a click on the anchor element to trigger the download
        document.body.appendChild(link);
        link.click();
    
        // Clean up
        document.body.removeChild(link);}
    return(
        <div id="navbar" style={{backgroundColor : "black" , opacity : 0.45 , display : "flex"  ,justifyContent : "space-between" , flexDirection : "row" , padding : "0.5%",border : "2px solid white" , borderRadius : "5px" , boxShadow : "3px 3px 10px orange" , textShadow : "1px 1px 4px white" } }>
           <h2 style={{color:"white" , }} className="Nav-b1"><button style = {{border : "1px solid white" , width:"100%" , height : "100%" ,  borderRadius : "20px" ,backgroundColor: "pink"  }} className="Nav-b1"> <Link to = "/">Other apps</Link></button></h2>
            <h1  style={{color:"red" ,fontSize : "220%" , textDecoration : "underline"}} id="Nav-title">{Text}</h1>
            <h2 style={{color:"white" ,}} className="Nav-b2"><button style = {{border : "1px solid white",  height : "100%" , borderRadius : "20px" , width : "200%",backgroundColor: "pink"  }} className="Nav-b2"><Link to={"/contact"}>Extras</Link></button></h2>
            <h2 style={{color:"white" ,}} className="Nav-b3"><button  style = {{border : "1px solid white",  height : "120%" , borderRadius : "20px",width : "100%",backgroundColor: "pink" , cursor: "pointer" }} onClick={handleDownload} className="Nav-b3">Download Code</button></h2>
        </div>
    )
}
export default Navbar;