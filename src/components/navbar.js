function Navbar(){
    return(
        <div style={{backgroundColor : "black" , opacity : 0.45 , display : "flex" , justifyContent : "space-between" , flexDirection : "row" , padding : "0.5%"}}>
            <h2 style={{color:"white" , }}><button onclick = "alert()" style = {{border : "1px solid white"}}>Other apps</button></h2>
            <h1  style={{color:"whitesmoke" ,fontSize : "200%" , }}>What's your weight? On other planets</h1>
            <h2 style={{color:"white" ,}}><button onclick = "alert()" style = {{border : "1px solid white"}}>Contact</button></h2>
        </div>
    )
}
export default Navbar;