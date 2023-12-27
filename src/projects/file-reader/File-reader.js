import './File-Reader.css'
import path from 'path-browserify'
import { useState } from 'react'
import Navbar from '../../components/navbar'
const FileRead = () =>{
    const [content , setcontent] = useState('Not selected')
    
    //rendering logic
    const render = (event) =>{
        const file = event.target.files[0]
        const reader = new FileReader();
        if (file){
        
        //image rendering
            if(path.parse(reader.result).ext === ".jpg" || ".png"||".jpeg" ||".gif" || ".svg" || ".bmp" || "webp" || ".ico" || ".tiff" || ".tif"){
            reader.onloadend = () =>{setcontent(
            <img src={reader.result} style={{maxWidth : "98%" , maxHeight : "95%" , margin : "1%"}}></img>
        )}
            reader.readAsDataURL(file)
    
        }

        //
    
        }
    }
    //rendering logic end
    return(
       
       
       <body>       
       <Navbar Text={"File Reader"}/>
       <div id='supported'>
        <ul>
        <li>Images
            <ol>
            <li>JPEG/JPG (.jpg, .jpeg)</li>
            <li>PNG</li>
            <li>GIF (.gif)</li>
            <li> SVG (.svg)</li>
            <li>BMP (.bmp)</li>
            <li>WebP (.webp)</li>
            <li>ICO (.ico)</li>
            <li>TIFF (.tiff, .tif)</li>
            </ol>
            </li>
            
        
        </ul>
       </div>
       <div  id='renderer'>
        <input type='file' onChange={render} id='path'></input>
        <div id='content'>
        {content}
        </div>
       </div>
        </body>
    )
}
export default FileRead;