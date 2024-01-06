import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar.js'
import './KBC.css'
class Question {
    q;
    opt1;
    opt2;
    opt3;
    opt4;
    correct;


    constructor(a , b , c , d , e , f){
        this.q = a;
        this.opt1 = b;
        this.opt2 = c;
        this.opt3 = d;
        this.opt4 = e;
        this.correct = f;
    }
}




const KBC = () => {
    //questions

    const questions = [
        new Question(
            "What is the capital of Japan?",
            "Tokyo",
            "Seoul",
            "Beijing",
            "Bangkok",
            1
        ),
        new Question(
            "Who wrote 'Romeo and Juliet'?",
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
            "Mark Twain",
            2
        ),
        new Question(
            "What is the largest planet in our solar system?",
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn",
            3
        ),
        new Question(
            "Which country is known as the Land of the Rising Sun?",
            "China",
            "Japan",
            "Thailand",
            "India",
            2
        ),
        new Question(
            "Who painted the Mona Lisa?",
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Michelangelo",
            2
        ),
        new Question(
            "What is the powerhouse of the cell?",
            "Nucleus",
            "Mitochondria",
            "Endoplasmic Reticulum",
            "Ribosome",
            2
        ),
        new Question(
            "Which gas is most abundant in the Earth's atmosphere?",
            "Nitrogen",
            "Oxygen",
            "Carbon Dioxide",
            "Helium",
            1
        ),
        new Question(
            "Who developed the theory of relativity?",
            "Isaac Newton",
            "Albert Einstein",
            "Stephen Hawking",
            "Galileo Galilei",
            2
        ),
        new Question(
            "What is the chemical symbol for gold?",
            "Au",
            "Ag",
            "Ge",
            "Gd",
            1
        ),
        new Question(
            "Which planet is known as the Red Planet?",
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn",
            2
        ),
        new Question(
            "Which is the largest mammal?",
            "Blue Whale",
            "Elephant",
            "Giraffe",
            "Hippopotamus",
            1
        ),
        new Question(
            "Who is known as the 'Father of Computer'?",
            "Bill Gates",
            "Charles Babbage",
            "Steve Jobs",
            "Mark Zuckerberg",
            2
        ),
        new Question(
            "What year did World War II end?",
            "1943",
            "1945",
            "1947",
            "1950",
            2
        ),
        new Question(
            "What is the chemical symbol for silver?",
            "S",
            "Si",
            "Ag",
            "Sr",
            3
        ),
        new Question(
            "What causes tides in the ocean?",
            "Moon's Gravity",
            "Wind",
            "Sun's Gravity",
            "Rainfall",
            1
        ),
        new Question(
            "What is the capital of Australia?",
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane",
            3
        ),
        new Question(
            "Who wrote 'To Kill a Mockingbird'?",
            "Harper Lee",
            "Ernest Hemingway",
            "Mark Twain",
            "F. Scott Fitzgerald",
            1
        ),
        new Question(
            "What is the tallest mountain in the world?",
            "Mount Everest",
            "Mount Kilimanjaro",
            "K2",
            "Kangchenjunga",
            1
        ),
        new Question(
            "What is the study of fossils called?",
            "Biology",
            "Zoology",
            "Geology",
            "Paleontology",
            4),
 
    ]
    
    
    
   
   //usestate
   let curquestion = questions[Math.floor(Math.random() * questions.length)]
   let [points , setpoints] = useState(0);
   const [qindex , setqindex] = useState(1) 
   const [currentquestion , setcurrentquestion] = useState(qindex +". "  + curquestion.q)
   const [currentopt1 , setcurrentopt1] = useState(curquestion.opt1)
   const [currentopt2 , setcurrentopt2] = useState(curquestion.opt2)
   const [currentopt3 , setcurrentopt3] = useState(curquestion.opt3)
   const [currentopt4 , setcurrentopt4] = useState(curquestion.opt4)
    



    //functions
    const handleanswer = (event) => {
        
        const a = event.target.textContent
        if (parseInt(a[0]) === curquestion.correct){
                console.log("true")
                setqindex(qindex + 1)
                setpoints(points + 200)
                console.log(points)
        }
        else{
            console.log("False");
            return <p style={{position : "absolute" , left : "50%" , top : "50%"}}>You lost lol</p>
        }
    }

    useEffect( () => {
        setcurrentquestion( qindex + ". " +curquestion.q)
        setcurrentopt1(curquestion.opt1)
        setcurrentopt2(curquestion.opt2)
        setcurrentopt3(curquestion.opt3)
        setcurrentopt4(curquestion.opt4)



        switch(points){
            case 0:
                document.getElementById("point1").style.backgroundColor = "red"
                break;
            case 200:
                document.getElementById("point1").style.backgroundColor = "transparent"
                document.getElementById("point2").style.backgroundColor = "red"
                break;
            case 400:
                document.getElementById("point2").style.backgroundColor = "transparent"
                document.getElementById("point3").style.backgroundColor = "red"
                break;
            case 600:
                document.getElementById("point3").style.backgroundColor = "transparent"
                document.getElementById("point4").style.backgroundColor = "red"
                break;
                case 800:
                document.getElementById("point4").style.backgroundColor = "transparent"
                document.getElementById("point5").style.backgroundColor = "red"
                break;
                case 1000:
                document.getElementById("point5").style.backgroundColor = "transparent"
                document.getElementById("point6").style.backgroundColor = "red"
                break;
                case 1200:
                document.getElementById("point6").style.backgroundColor = "transparent"
                document.getElementById("point7").style.backgroundColor = "red"
                break;
                case 1400:
                document.getElementById("point7").style.backgroundColor = "transparent"
                document.getElementById("point8").style.backgroundColor = "red"
                break;
            case 1600:
                document.getElementById("point8").style.backgroundColor = "transparent"
                document.getElementById("point9").style.backgroundColor = "red"
                break;
            case 1800:
                document.getElementById("point9").style.backgroundColor = "transparent"
                document.getElementById("point10").style.backgroundColor = "red"
                break;
            case 2000:
                document.getElementById("point10").style.backgroundColor = "transparent"
                document.getElementById("point11").style.backgroundColor = "red"
                break;
                    
            
                                                    

        }
        if (qindex >=12){
            document.write("lol")
        }
    },[qindex, curquestion.q, curquestion.opt1, curquestion.opt2, curquestion.opt3, curquestion.opt4 , points])























//main
    return(
        <div id='KBC-main'>
        <Navbar Text={"Quiz"}/>
        
        
        
    
        
        
        
        <div id='KBC-question'>{currentquestion}</div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id='KBC-interaction'>
        
        
        
        
        
        <div id='KBC-options'>
            <button id='KBC-opt1' onClick={handleanswer}><div style={{display:"inline" , color:"cyan"}}>1. </div>{currentopt1}</button>
            <button id='KBC-opt2' onClick={handleanswer}><div style={{display:"inline" , color:"cyan"}}>2. </div>{currentopt2}</button>
            <button id='KBC-opt3' onClick={handleanswer}><div style={{display:"inline" , color:"cyan"}}>3. </div>{currentopt3}</button>
            <button id='KBC-opt4' onClick={handleanswer}><div style={{display:"inline" , color:"cyan"}}>4. </div>{currentopt4}</button>
            
        </div>
        
        
        
        
        
        
        
        <div id='KBC-lifelines'>
            <button>Skip The question</button>
            <button>Get the correct answer</button>
            <button>50/50</button>
            <button>Quit</button>
        </div>
        </div>

        
        
        
        
        
        
        
        
        
        
        
        <div id='KBC-points'>
            <table>
                <th style={{fontSize : "200%"}}>Scored Points</th>
                <tr id='point11'><td>2000 Points</td></tr>
                <tr id='point10'><td>1800 Points </td></tr>
                <tr id='point9'><td>1600 Points</td></tr>
                <tr id='point8'><td>1400 Points</td></tr>
                <tr id='point7'><td>1200 Points</td></tr>
                <tr id='point6'><td>1000 Points</td></tr>
                <tr id='point5'><td>800 Points</td></tr>
                <tr id='point4'><td>600 Points</td></tr>
                <tr id='point3'><td>400 Points</td></tr>
                <tr id='point2'><td>200 Points</td></tr>
                <tr id='point1'><td>0 Points</td></tr>
            </table>
        </div>
        </div>
    )
}
export default KBC;