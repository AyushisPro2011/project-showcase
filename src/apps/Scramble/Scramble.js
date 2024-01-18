import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import './Scramble.css'
import { useNavigate } from "react-router-dom";
import KBC from "../KBC/KBC";


class Word {
    word;
    jumble;
    hint;  
    constructor(a,b,c){
        this.word = a;
        this.jumble = b;
        this.hint = c
    }
}

const Scramble = () => {
    const navigate = useNavigate();
    const level1 = [
        new Word("Yes" , "eys" , "The opposite of No"),
            new Word("Cat", "tac", "A small, furry animal"),
            new Word("Dog", "god", "A loyal pet"),
            new Word("Sun", "nus", "The star at the center of our solar system"),
            new Word("Run", "nur", "To move swiftly on foot"),
            new Word("Blue", "lube", "A color"),
            new Word("Moon", "onom", "Earth's natural satellite"),
            new Word("Book", "boko", "A collection of written or printed pages"),
            new Word("Tree", "teer", "A woody perennial plant"),
            new Word("Rain", "niar", "Water falling from the sky"),
            new Word("Fish", "sihf", "An aquatic animal"),
    ];
    const level2 = [
        new Word("Charm", "mrach", "A quality that attracts or delights"),
        new Word("Spark", "kpras", "A small fiery particle thrown off from a fire"),
        new Word("Globe", "bgelo", "A spherical object"),
        new Word("Crisp", "ripsc", "Nicely firm and fresh"),
        new Word("Blaze", "azelb", "A strong, bright flame"),
        new Word("Breeze", "zerbe", "A gentle wind"),
        new Word("Glide", "ldegi", "To move smoothly and effortlessly"),
        new Word("Starry", "yrrsat", "Filled with stars"),
        new Word("Witty", "wyitt", "Quick and inventive in humor"),
        new Word("Quirk", "qurik", "A peculiar aspect of someone's character"),
    ];
    const level3 = [
        new Word("Adventure", "ntuaedvre", "Exciting or unusual experience"),
        new Word("Discovery", "sodcyeriv", "Finding something for the first time"),
        new Word("Rhythm", "htmhry", "A regular pattern of sounds or movements"),
        new Word("Serenade", "drenesae", "A musical performance given to someone special"),
        new Word("Cheerful", "ehrlfecu", "Full of happiness and joy"),
        new Word("Eclipse", "lpecise", "The partial or total blocking of one celestial body by another"),
        new Word("Marvel", "lramve", "To be filled with wonder or astonishment"),
        new Word("Giggle", "glgeig", "A light, silly laugh"),
        new Word("Twinkle", "lkentwi", "To shine with a flickering or sparkling light"),
        new Word("Whisper", "shirpew", "Speaking very softly or quietly"),
    ];
    const level4 = [
        new Word("Genuine", "ienugne", "Real and authentic"),
        new Word("Harmonize", "mniahzroe", "To form a harmonious or consistent whole"),
        new Word("Tranquil", "tinlqura", "Free from disturbance; calm"),
        new Word("Majestic", "majtesic", "Having grandeur, beauty, or dignity"),
        new Word("Efficient", "efecfinti", "Achieving maximum productivity with minimum wasted effort"),
        new Word("Creative", "raecvite", "Having the ability to produce through imaginative skill"),
        new Word("Optimism", "tmismiop", "A hopeful and positive outlook on life"),
        new Word("Inventive", "vetneitni", "Having the ability to create or design new things"),
        new Word("Vibrant", "vantibr", "Full of energy and enthusiasm"),
        new Word("Serene", "esreen", "Calm and peaceful"),
    ];
    const level5 = [
        new Word("Happy", "pyahp", "Feeling or showing pleasure and contentment"),
        new Word("Bright", "btrigh", "Full of light; shining strongly"),
        new Word("Gentle", "tlegne", "Mild, kind, or soft in temperament or behavior"),
        new Word("Clever", "lverce", "Quick to understand, learn, and devise or apply ideas"),
        new Word("Fresh", "rfesh", "Recently made or obtained; not stale or spoiled"),
        new Word("Joyful", "ofyluj", "Full of happiness and delight"),
        new Word("Friendly", "dlneirfy", "Kind and pleasant towards others"),
        new Word("Simple", "milspe", "Easily understood or done; presenting no difficulty"),
        new Word("Warm", "mwra", "Having or giving off a moderate degree of heat"),
    ];
    const level6 = [
        new Word("Calm", "mcla", "Peaceful and free from disturbance"),
        new Word("Gentle", "gletne", "Mild, kind, or soft in temperament or behavior"),
        new Word("Sincere", "sericen", "Genuine and honest in feelings or expression"),
        new Word("Brisk", "birsk", "Quick and energetic"),
        new Word("Cheer", "reche", "To express joy or happiness"),
        new Word("Pleasant", "teplsaan", "Agreeable and enjoyable"),
        new Word("Grateful", "fategrul", "Feeling thankful and appreciative"),
        new Word("Vivid", "divvi", "Bright and intense"),
        new Word("Soothing", "soogthin", "Calming or comforting"),
    ];
    const level7 = [
        new Word("Vivid", "dviiv", "Intensely bright and lively"),
        new Word("Amiable", "ablmeia", "Friendly and likable"),
        new Word("Whimsy", "syimwh", "Playfully quaint or fanciful behavior"),
        new Word("Luminous", "nolimus", "Glowing or emitting light"),
        new Word("Harmony", "hronyam", "A pleasing arrangement of parts"),
        new Word("Cheerful", "chfreleu", "Full of happiness and joy"),
        new Word("Tranquil", "tnqriula", "Calm and peaceful"),
        new Word("Grateful", "gertfual", "Feeling thankful and appreciative"),
        new Word("Radiant", "rdainta", "Sending out light; shining or glowing brightly"),
        new Word("Delight", "detilgh", "Great pleasure or joy"),
    ];


   const [level , setlevel] = useState(1)
   const [word , setword] = useState(level1[Math.floor(Math.random() * level1.length )])



   const check = () => {
    if (level == 1){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
            setword(level2[Math.floor(Math.random() * level2.length)])
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
    if (level == 2){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
            setword(level3[Math.floor(Math.random() * level3.length)])
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
    if (level == 3){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
            setword(level4[Math.floor(Math.random() * level4.length)])
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
    if (level == 4){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
            setword(level5[Math.floor(Math.random() * level5.length)])
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
    if (level == 5){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
            setword(level6[Math.floor(Math.random() * level6.length)])
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
    if (level == 6){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
            setword(level7[Math.floor(Math.random() * level7.length)])
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
    if (level == 7){
        if (document.getElementById("Scram-text").value.toLowerCase() == word.word.toLowerCase()){
            setlevel(level + 1)
        } else{
            navigate("/Scram-loss")
        }
        console.log(word);
    }
   }    


   useEffect(
    () => {
        if (level >7){
        navigate("/Scram-win")
    }},[level , navigate] 
   )

    return(
        <div id="Scram-main">
        <Navbar Text={"Word Unscramble"}/>
        <div id="Scram-level">{level}</div>
        <div id="Scram-box">
        <p id="Scram-word">Your word is<br/><div id="Scram-word-main">{word.jumble}</div></p>
        <p id="Scram-hint">Hint: <div id="Scramble-hint-main">{word.hint}</div></p>
        <input type="text" id="Scram-text"/>
        <button id="Scram-next" onClick={() => check()}>Next &rarr;</button>

        </div>
        </div>
    )
}
export default Scramble;