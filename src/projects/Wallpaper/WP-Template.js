import Compress from './Images/Compressed.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './Wallpaper.css'

const WPTemp = ({url , author}) => {

const download = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Wallpaper'; // Set the filename
    
        // Simulate a click on the anchor element to trigger the download
        document.body.appendChild(link);
        link.click();
}

    return(
        <div id="WP-main">
            <LazyLoadImage src={url} alt="lol" id="WP-img" placeholderSrc={Compress}/>
            <h1 id="WP-author">By - {author}</h1>
            <button onClick={download}>Download</button>
        </div>
        
    )
}
export default WPTemp