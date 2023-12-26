import './File-Reader.css'
import path from 'path-browserify'
const FileRead = () =>{
    let value;
    return(
       <>       
        <input type='file' name='input' id='input'  value={value}></input>
        <button></button>
        <h1></h1>
        </>

    )
}
export default FileRead;