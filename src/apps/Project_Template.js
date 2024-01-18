import { Link } from "react-router-dom"
const ProTemp = ({num , title , logo,location}) => {
    return(
        <>
        <div id={"Pro" + num}>
        <h2 style={{color : "blue"}}>Project {num}: {title}</h2>
        <Link to={location}><img src={logo} style={{width : "90%", height : "40%" , border : "4px solid green" , borderRadius : "5px" , boxShadow : "2px 2px 3px brown"}} alt= {"Project" + num}></img>
        </Link>
        </div>
        </>
    )
}
export default ProTemp