import './Pro.css';
import Main from './main';
import Navbar from '../../components/navbar';
const Pro1 = () =>{
    return(
    <div className='Background' style={{textShadow : "1px 1px 10px magenta"}}>
      <Navbar Text = "What's Your weight on these Planets?"/>
      <Main />
    </div>)
}
export default Pro1;