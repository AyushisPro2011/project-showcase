import { useState } from 'react'
import wall1 from './Images/Img1.webp'
import wall2 from './Images/Img2.webp'

import wall3 from './Images/Img3.webp'

import wall4 from './Images/Img4.webp'

import wall5 from './Images/Img5.webp'

import wall6 from './Images/Img6.webp'

import wall7 from './Images/Img7.webp'

import wall8 from './Images/Img8.webp'

import wall9 from './Images/Img9.webp'












import WPTemp from './WP-Template';
import './Wallpaper.css'


class Image {
    src;
    author;
    constructor(a , b){
        this.src = a;
        this.author = b;
    }
}

const Images = () => {
    const LightWP = [
        new Image(wall4, "Irina Iriser"),
        new Image(wall5 , "Katja"),
        new Image(wall6, "Lisa Fotios"),
        new Image(wall7, "Maxime Francis"),
        
        new Image(wall9, "Simon Berger")
    ]
    const DarkWP = [
        new Image(wall1 , "Adrien Olichon"),
        new Image(wall3 , "Irina Iriser"),
        new Image(wall8, "Pixabay"),
    ]
    const NatureWP = [
        new Image(wall2, "Erberhard GrossGasteiger"),
        new Image(wall3 , "Irina Iriser"),
        new Image(wall4, "Irina Iriser"),
        new Image(wall5 , "Katja"),
        new Image(wall6, "Lisa Fotios"),
    ]
    const SpaceWP = [
        new Image(wall1 , "Adrien Olichon"),
        new Image(wall8, "Pixabay")

    ]
    const [topic , settopic] = useState(LightWP)





    




    return(
        <>
        <div id='WP-categories'>
        <button id='WP-light' onClick={() => {settopic(LightWP)}}>Light</button>
        <button id='WP-dark' onClick={() => {settopic(DarkWP)}}>Dark</button>
        <button id='WP-nature' onClick={() => {settopic(NatureWP)}}>Nature</button>
        <button id='WP-space' onClick={() => {settopic(SpaceWP)}}>Space</button>

        </div>

        <div id='wallpaper-box'>
        {
            
            topic.map((x) => (
                <>
                <WPTemp author={x.author} url={x.src}></WPTemp>
                </>
            ))
        }
        </div>
        </>
    )
   
    
}



export default Images