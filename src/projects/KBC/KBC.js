import Navbar from '../../components/navbar.js'
import './KBC.css'
const KBC = () => {
    return(
        <div id='KBC-main'>
        <Navbar Text={"Quiz"}/>
        <div id='KBC-question'>Question</div>
        <div id='KBC-interaction'>
        <div id='KBC-options'>
            <button id='KBC-opt1'>Option1</button>
            <button id='KBC-opt2'>Option2</button>
            <button id='KBC-opt3'>Option3</button>
            <button id='KBC-opt4'>Option4</button>
            
        </div>
        <div id='KBC-lifelines'>

        </div>
        </div>

        <div id='KBC-points'>

        </div>
        </div>
    )
}
export default KBC;