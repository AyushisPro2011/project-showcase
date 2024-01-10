import './Wallpaper.css'
import Navbar from '../../components/navbar'
import WPTemp from './WP-Template'
import Images from './Images'




const Wallpaper = () => {
    








    return(
        <div id='wallpaper-main'>
            <div id='wallpaper-gradient'>
            <Navbar Text={"Free Wallpaper download"}/>
            <div id='wallpaper-box'>
           <WPTemp url={"none"} author={"none"}/>
           <WPTemp url={"none"} author={"none"}/>
           <WPTemp url={"none"} author={"none"}/>
           <WPTemp url={"none"} author={"none"}/>
           <WPTemp url={"none"} author={"none"}/>
           <WPTemp url={"none"} author={"none"}/>
            </div>
            </div>
        </div>
    )
}
export default Wallpaper