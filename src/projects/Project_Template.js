import { Link } from "react-router-dom"
const Pro_Temp = ({num , title , logo,location}) => {
    return(
        <>
        <div id={"Pro" + num}>
        <h2 style={{color : "pink"}}>Project {num}: {title}</h2>
        <Link to={location}><img src={logo} style={{width : "90%", height : "40%" , border : "2px solid white" , borderRadius : "5px"}} alt= {"Project" + num}></img>
        </Link>
        </div>
        </>
    )
}
export default Pro_Temp