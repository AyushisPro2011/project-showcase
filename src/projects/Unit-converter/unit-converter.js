import Navbar from "../../components/navbar";
import './app.css'
const UnitConverter = () => {
    return(
        <body>
        <Navbar Text={"Unit converter"}/>
            <div id="sidebar">
                <button>Length</button>
                <button>Volume</button>
                <button>Mass</button>
                <button>Area</button>
                <button>Indian numbers 
                    <br/>
                    {'->'} 
                    <br/>
                    American numbers</button>
                <button>Temprature</button>
                <button>Time</button>
                <button>Currency</button>
            </div>

            <div id="main">
                <input type="number" id="val1"/>
                <input type="number" id="val2"/>
            <div id="text"><pre> cm </pre></div>
            <div id="equal">=</div>
            <div id="sign2">m</div>
                <select id="U1">

                </select>
                <select id="U2">

                </select>
            </div>
        </body>
    )
}
export default UnitConverter;