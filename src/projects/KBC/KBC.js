import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar.js'
import './KBC.css'
import {useNavigate} from 'react-router-dom';



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
    const navigate = useNavigate()
   
    const questions = [
        new Question(
            "Which ancient civilization built the pyramids?",
            "Greek",
            "Roman",
            "Egyptian",
            "Mayan",
            3
        ),
        new Question(
            "Who was the first President of the United States?",
            "Thomas Jefferson",
            "George Washington",
            "Abraham Lincoln",
            "John Adams",
            2
        ),
        new Question(
            "In which year did Christopher Columbus first reach the Americas?",
            "1492",
            "1500",
            "1525",
            "1600",
            1
        ),
        new Question(
            "Who was the first female Prime Minister of the United Kingdom?",
            "Margaret Thatcher",
            "Theresa May",
            "Indira Gandhi",
            "Queen Victoria",
            1
        ),
        new Question(
            "Which event marked the start of World War I?",
            "Assassination of Archduke Franz Ferdinand",
            "Battle of Stalingrad",
            "Treaty of Versailles",
            "Bombing of Pearl Harbor",
            1
        ),
        new Question(
            "Who was the founder of the Mongol Empire?",
            "Genghis Khan",
            "Kublai Khan",
            "Attila the Hun",
            "Timur",
            1
        ),
        new Question(
            "Who wrote 'The Communist Manifesto'?",
            "Karl Marx",
            "Joseph Stalin",
            "Vladimir Lenin",
            "Leon Trotsky",
            1
        ),
        new Question(
            "Which civilization is credited with the invention of writing?",
            "Sumerians",
            "Ancient Egyptians",
            "Mayans",
            "Greeks",
            1
        ),
        new Question(
            "Who was the longest-reigning monarch in British history?",
            "Queen Elizabeth II",
            "Queen Victoria",
            "King Henry VIII",
            "King George III",
            2
        ),
        new Question(
            "Which treaty officially ended World War I?",
            "Treaty of Versailles",
            "Treaty of Paris",
            "Treaty of Rome",
            "Treaty of Berlin",
            1
        ),
        new Question(
            "What is the largest mammal in the world?",
            "Elephant",
            "Blue whale",
            "Giraffe",
            "Hippo",
            2
        ),
        new Question(
            "What country is famous for kangaroos?",
            "New Zealand",
            "Australia",
            "Canada",
            "South Africa",
            2
        ),
        new Question(
            "Who wrote the famous play 'Romeo and Juliet'?",
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain",
            1
        ),
        new Question(
            "What is the largest planet in our solar system?",
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn",
            3
        ),
        new Question(
            "What is the capital of Japan?",
            "Shanghai",
            "Beijing 0",
            "Seoul",
            "Tokyo",
            4
        ),
        new Question(
            "What is the chemical symbol for gold?",
            "Au",
            "Ag",
            "Cu",
            "Fe",
            1
        ),
        new Question(
            "Who painted the famous artwork 'Starry Night'?",
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Pablo Picasso",
            "Claude Monet",
            2
        ),
        new Question(
            "What is the longest river in the world?",
            "Nile",
            "Amazon",
            "Mississippi",
            "Ganges",
            1
        ),
        new Question(
            "What is the largest desert in the world?",
            "Sahara Desert",
            "Arabian Desert",
            "Gobi Desert",
            "Kalahari Desert",
            1
        ),
        new Question(
            "Which country is known as the 'Land of the Rising Sun'?",
            "China",
            "South Korea",
            "Japan",
            "Thailand",
            3
        ),
        new Question(
            "Who invented the lightbulb?",
            "Thomas Edison",
            "Nikola Tesla",
            "Alexander Graham Bell",
            "Albert Einstein",
            1
        ),
        new Question(
            "Which continent is the least populated?",
            "Europe",
            "Asia",
            "Australia",
            "Antarctica",
            4
        ),
        new Question(
            "What is the chemical symbol for silver?",
            "Sv",
            "Si",
            "Ag",
            "Sr",
            3
        ),
        new Question(
            "Which is the largest species of tiger?",
            "Siberian Tiger",
            "Bengal Tiger",
            "Sumatran Tiger",
            "Malayan Tiger",
            1
        ),
        new Question(
            "Who wrote 'The Great Gatsby'?",
            "Ernest Hemingway",
            "F. Scott Fitzgerald",
            "William Faulkner",
            "John Steinbeck",
            2
        ),new Question(
            "What does CPU stand for?",
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Processor Unit",
            "Computerized Processing Unit",
            1
        ),
        new Question(
            "Which company developed the Python programming language?",
            "Microsoft",
            "Google",
            "Apple",
            "Dropbox",
            2
        ),
        new Question(
            "What does HTML stand for?",
            "Hyper Text Markup Language",
            "High Tech Markup Language",
            "Hyperlink Text Markup Language",
            "Hyper Transfer Markup Language",
            1
        ),
        new Question(
            "What is the function of RAM in a computer?",
            "Long-term storage of data",
            "Temporary storage of data",
            "Processing data",
            "Displaying data",
            2
        ),
        new Question(
            "Which programming language is often used for creating web pages?",
            "Java",
            "C++",
            "JavaScript",
            "Swift",
            3
        ),
        new Question(
            "What does URL stand for?",
            "Uniform Resource Locator",
            "Universal Reference Link",
            "Uniform Reference Link",
            "Universal Resource Locator",
            1
        ),
        new Question(
            "What does LAN stand for?",
            "Local Access Network",
            "Local Area Network",
            "Large Access Network",
            "Large Area Network",
            2
        ),
        new Question(
            "Who is known as the father of modern computer science?",
            "Alan Turing",
            "Bill Gates",
            "Steve Jobs",
            "Tim Berners-Lee",
            1
        ),
        new Question(
            "What is the primary purpose of an operating system?",
            "Manage hardware",
            "Control the internet",
            "Run applications",
            "Process data",
            1
        ),
        new Question(
            "Which of the following is an example of a high-level programming language?",
            "Assembly Language",
            "Binary Code",
            "Machine Language",
            "C++",
            4
        ),
        new Question(
            "What is the most commonly used language for web development?",
            "Python",
            "Java",
            "C#",
            "JavaScript",
            4
        ),
        new Question(
            "Which company developed the Java programming language?",
            "Microsoft",
            "Sun Microsystems",
            "Apple",
            "IBM",
            2
        ),
        new Question(
            "What is the file extension for a JavaScript file?",
            ".java",
            ".js",
            ".html",
            ".css",
            2
        ),
        new Question(
            "What does GUI stand for?",
            "Graphical User Interface",
            "General User Interaction",
            "Global User Interface",
            "Graphical User Interconnection",
            1
        ),
        new Question(
            "Which programming language is commonly used for developing mobile apps?",
            "Ruby",
            "Swift",
            "Perl",
            "Rust",
            2
        ), new Question(
            "What is the unit of measurement for electric current?",
            "Watt",
            "Volt",
            "Ampere",
            "Ohm",
            3
        ),
        new Question(
            "Which gas is known as laughing gas?",
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Nitrous Oxide",
            4
        ),
        new Question(
            "What is the study of fossils called?",
            "Paleontology",
            "Geology",
            "Anthropology",
            "Archaeology",
            1
        ),
        new Question(
            "What is the hardest natural substance on Earth?",
            "Iron",
            "Diamond",
            "Gold",
            "Titanium",
            2
        ),
        new Question(
            "What causes the phenomenon of the Northern Lights?",
            "Volcanic eruptions",
            "Electricity",
            "Solar wind",
            "Global warming",
            3
        ),
        new Question(
            "What is the chemical symbol for gold?",
            "Go",
            "Gl",
            "Au",
            "Ag",
            3
        ),
        new Question(
            "Which planet is known as the 'Red Planet'?",
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn",
            2
        ),
        new Question(
            "What is the main function of red blood cells in the human body?",
            "Carry oxygen",
            "Fight infections",
            "Produce hormones",
            "Digest food",
            1
        ),
        new Question(
            "What is the process by which plants make their food called?",
            "Photosynthesis",
            "Respiration",
            "Transpiration",
            "Digestion",
            1
        ),
        new Question(
            "What is the chemical symbol for silver?",
            "Sv",
            "Si",
            "Ag",
            "Sr",
            3
        ),new Question(
            "What is the value of π (pi) to two decimal places?",
            "3.14",
            "3.16",
            "3.18",
            "3.12",
            1
        ),
        new Question(
            "What is the square root of 144?",
            "10",
            "12",
            "14",
            "16",
            2
        ),
        new Question(
            "What is the sum of the interior angles of a triangle?",
            "180 degrees",
            "90 degrees",
            "360 degrees",
            "270 degrees",
            1
        ),
        new Question(
            "What is the value of 'x' in the equation 2x + 5 = 15?",
            "5",
            "7",
            "10",
            "8",
            1
        ),
        new Question(
            "What is the area of a square with a side length of 6 units?",
            "36 square units",
            "24 square units",
            "30 square units",
            "12 square units",
            1
        ),
        new Question(
            "What is the value of 5 factorial (5!)?",
            "10",
            "20",
            "120",
            "25",
            3
        ),
        new Question(
            "What is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, ...?",
            "8",
            "6",
            "7",
            "10",
            1
        ),
        new Question(
            "What is the value of 'y' in the equation y = 3x + 2 when x = 4?",
            "14",
            "12",
            "16",
            "10",
            1
        ),
        new Question(
            "What is the product of 7 and 9?",
            "56",
            "63",
            "72",
            "81",
            2
        ),
        new Question(
            "What is the circumference of a circle with a radius of 5 units? (Use π as 3.14)",
            "31.4 units",
            "15.7 units",
            "25 units",
            "10 units",
            1),
            new Question(
                "Who wrote the famous novel 'To Kill a Mockingbird'?",
                "Mark Twain",
                "Harper Lee",
                "J.D. Salinger",
                "F. Scott Fitzgerald",
                2
            ),
            new Question(
                "Which country is known as the Land of the Rising Sun?",
                "China",
                "South Korea",
                "Japan",
                "Thailand",
                3
            ),
            new Question(
                "What is the chemical symbol for gold?",
                "Go",
                "Gl",
                "Au",
                "Ag",
                3
            ),
            new Question(
                "Who is the first person to step on the moon?",
                "Buzz Aldrin",
                "Yuri Gagarin",
                "Neil Armstrong",
                "John Glenn",
                3
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
                "What is the capital city of Brazil?",
                "Rio de Janeiro",
                "São Paulo",
                "Brasília",
                "Salvador",
                3
            ),
            new Question(
                "Who painted the Mona Lisa?",
                "Leonardo da Vinci",
                "Vincent van Gogh",
                "Pablo Picasso",
                "Claude Monet",
                1
            ),
            new Question(
                "What is the largest ocean on Earth?",
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean",
                4
            ),
            new Question(
                "What is the largest desert in the world?",
                "Sahara Desert",
                "Arabian Desert",
                "Gobi Desert",
                "Kalahari Desert",
                1
            ),
            new Question(
                "Which river is the longest in the world?",
                "Amazon River",
                "Nile River",
                "Mississippi River",
                "Yangtze River",
                2
            ),
            new Question(
                "Who is known as the 'Father of Physics'?",
                "Isaac Newton",
                "Galileo Galilei",
                "Albert Einstein",
                "Nikola Tesla",
                2
            ),
            new Question(
                "In which year did World War II end?",
                "1943",
                "1945",
                "1947",
                "1950",
                2
            ),
            new Question(
                "What is the largest mammal in the world?",
                "Elephant",
                "Blue whale",
                "Giraffe",
                "Hippo",
                2
            ),
            new Question(
                "Who is the author of '1984'?",
                "George Orwell",
                "Aldous Huxley",
                "F. Scott Fitzgerald",
                "Ernest Hemingway",
                1
            ),
            new Question(
                "What is the capital city of Canada?",
                "Toronto",
                "Ottawa",
                "Vancouver",
                "Montreal",
                2
            ),
            new Question(
                "Who developed the theory of general relativity?",
                "Isaac Newton",
                "Albert Einstein",
                "Stephen Hawking",
                "Galileo Galilei",
                2
            ),
            new Question(
                "What is the currency of Russia?",
                "Euro",
                "Dollar",
                "Ruble",
                "Pound",
                3
            ),
            new Question(
                "Which country is famous for tulips?",
                "Netherlands",
                "France",
                "Germany",
                "Belgium",
                1
            ),
            new Question(
                "What is the smallest continent in the world?",
                "North America",
                "Europe",
                "Asia",
                "Australia",
                4
            ),
            new Question(
                "What is the capital city of Australia?",
                "Sydney",
                "Melbourne",
                "Canberra",
                "Brisbane",
                3
            ), new Question(
                "What is the largest organ in the human body?",
                "Liver",
                "Brain",
                "Skin",
                "Heart",
                3
            ),
            new Question(
                "Who is known as the 'Father of Modern Science'?",
                "Isaac Newton",
                "Galileo Galilei",
                "Charles Darwin",
                "Albert Einstein",
                2
            ),
            new Question(
                "Which country is known as the 'Land of a Thousand Lakes'?",
                "Sweden",
                "Finland",
                "Norway",
                "Denmark",
                2
            ),
            new Question(
                "Who composed the famous musical piece 'Symphony No. 9'?",
                "Wolfgang Amadeus Mozart",
                "Ludwig van Beethoven",
                "Johann Sebastian Bach",
                "Johannes Brahms",
                2
            ),
            new Question(
                "What is the capital city of South Korea?",
                "Seoul",
                "Busan",
                "Incheon",
                "Daegu",
                1
            ),
            new Question(
                "Which planet is known as the 'Morning Star'?",
                "Mars",
                "Venus",
                "Mercury",
                "Jupiter",
                2
            ),
            new Question(
                "Who is the author of 'Pride and Prejudice'?",
                "Jane Austen",
                "Charlotte Brontë",
                "Emily Dickinson",
                "Virginia Woolf",
                1
            ),
            new Question(
                "What is the largest bone in the human body?",
                "Femur",
                "Tibia",
                "Humerus",
                "Radius",
                1
            ),
            new Question(
                "Which country is the largest producer of coffee in the world?",
                "Brazil",
                "Colombia",
                "Vietnam",
                "Ethiopia",
                1
            ),
            new Question(
                "Who is the current CEO of Tesla?",
                "Elon Musk",
                "Jeff Bezos",
                "Tim Cook",
                "Satya Nadella",
                1
            ),
            new Question(
                "What is the tallest mountain in Africa?",
                "Mount Kilimanjaro",
                "Mount Everest",
                "Mount McKinley",
                "Mount Elbrus",
                1
            ),
            new Question(
                "Who painted the famous artwork 'The Starry Night'?",
                "Vincent van Gogh",
                "Leonardo da Vinci",
                "Pablo Picasso",
                "Claude Monet",
                1
            ),
            new Question(
                "What is the largest living bird by wingspan?",
                "Ostrich",
                "Bald Eagle",
                "Albatross",
                "Condor",
                3
            ),
            new Question(
                "Who founded Microsoft?",
                "Bill Gates",
                "Steve Jobs",
                "Larry Page",
                "Mark Zuckerberg",
                1
            ),
            new Question(
                "Which river is the longest in the United States?",
                "Missouri River",
                "Colorado River",
                "Columbia River",
                "Mississippi River",
                4
            ),
            new Question(
                "Which famous scientist developed the theory of gravity?",
                "Isaac Newton",
                "Galileo Galilei",
                "Albert Einstein",
                "Stephen Hawking",
                1
            ),
            new Question(
                "What is the largest moon in the solar system?",
                "Titan",
                "Ganymede",
                "Europa",
                "Callisto",
                2
            ),
            new Question(
                "Who wrote the play 'Romeo and Juliet'?",
                "William Shakespeare",
                "Charles Dickens",
                "Mark Twain",
                "Jane Austen",
                1
            ),
            new Question(
                "What is the capital city of Egypt?",
                "Cairo",
                "Alexandria",
                "Luxor",
                "Giza",
                1
            ),
            new Question(
                "Which country is known as the 'Land of the Rising Sun'?",
                "China",
                "South Korea",
                "Japan",
                "Thailand",
                3
            )
 
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
   const [canskip , setskip] = useState(false)
    



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
            navigate('/KBC-loss')
        }
    }




    //lifelines
    const skip = (event) =>{
        setqindex(qindex + 1)
        event.target.textContent = 'Skip the question(disabled)';
        setpoints(points + 200)
        setskip(true)
    }
    
    function getanswer(qno){
        window.open("https://en.wikipedia.org/wiki/Main_Page")
    }




















    //useffects
    useEffect( () => {
        
        
        
        setcurrentquestion( qindex + ". " +curquestion.q)
        setcurrentopt1(curquestion.opt1)
        setcurrentopt2(curquestion.opt2)
        setcurrentopt3(curquestion.opt3)
        setcurrentopt4(curquestion.opt4)
        if (qindex >=12){
            navigate('/KBC-win')
    
        }


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
            default:
                return
        }
        
    },[qindex, curquestion.q, curquestion.opt1, curquestion.opt2, curquestion.opt3, curquestion.opt4 , points,navigate])























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
            <button onClick={skip} disabled = {canskip} id='skip'>Skip The question</button>
            <button onClick={getanswer} id='Wiki'>Get the correct answer</button>

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