import './css-gen.css'
import Navbar from '../../components/navbar'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
function CSS_GEN(){
    // variable declaration
    const [elementname , setelementname] = useState("My_element")
    const [color , setcolor] = useState('Black')
    const [ display, setdisplay] = useState('Inline')
    const [bgcolor , setbgcolor] = useState('white')
    const [font , setfont] = useState('arial')
    const [fontsize , setfontsize] = useState('100%')
    const [ margin, setmargin] = useState('0')
    const [ padding, setpadding] = useState('0')
    const [border , setborder] = useState('0px solid black')
    const [width , setwidth] = useState('auto')
    const [height , setheight] = useState('auto')
    const [position , setposition] = useState('relative')
    const [top , settop] = useState('0')
    const [right, setright] = useState('0')
    const [ left, setleft] = useState('0')
    const [ bottom, setbottom] = useState('0')
    const [float , setfloat] = useState('none')
    const [ textalign, settextalign] = useState('left')
    const [lineheight , setlineheight] = useState('normal')
    const [overflow , setoverflow] = useState('auto')
    const [liststyle , setliststyle] = useState('disc')
    const [textdecoration , settextdecoration] = useState('none')
    const [boxshadow , setboxshadow] = useState('none')
    const [borderradius , setborderradius] = useState('1')
    const [ transition, settransition] = useState('none')
    const [flex , setflex] = useState('auto')
    const [justifycontent , setjustifycontent] = useState('baseline')
    const [ alignitems, setalignitems] = useState('center')
    const [flexdirection , setflexdirection] = useState('column')
    const [ grid, setgrid] = useState('initial')
    const [ texttransform, settexttransform] = useState('none')
    const [zindex , setzindex] = useState('1')
    const [cursor , setcursor] = useState('auto')
    const [opacity , setopacity] = useState('1.0')
    const [options , setoptions] = useState("")
    const divref = useRef(null)
    
    const handlename = (event)=>{
        setelementname(event.target.value)
    }

    const copytoclipboard =() => {
        if (!divref.current) return;
        const content = divref.current.innerText;
        
        navigator.clipboard.writeText(content).then(() => {
            alert('Content Copied')
        }).catch(err => {
            console.error('Couldn\'t copy text:' , err)
        })
    }



    //changing css text functions










    //useeffects
    useEffect(() => {
    
    },[])
    
    
    return(
    
    // initial
    <div id='background'>
    <Navbar Text={"CSS GENERATOR"}/>
    
    
    
    
    
    
    
    {/* The left bar */}
    <div id='leftwrapper'>
        <h1 style={{color : "red" , borderBottom : "4px solid grey" , textAlign : "center"}}>CSS PROPERTIES</h1>
    <div id='leftbar'>
        <ul>
            <li><button>Display</button></li>
            <li><button>Color</button></li>
            <li><button>Background Color</button></li>
            <li><button>Font</button></li>
            <li><button>Font-size</button></li>
            <li><button>Margin</button></li>
            <li><button>Padding</button></li>
            <li><button>Border</button></li>
            <li><button>Width</button></li>
            <li><button>Height</button></li>
            <li><button>Position</button></li>
            <li><button>Position : Absolute</button></li>
            <li><button>Float</button></li>
            <li><button>Text Alignment</button></li>
            <li><button>Line Height</button></li>
            <li><button>Content Overflow</button></li>
            <li><button>List Style</button></li>
            <li><button>Text Decoration</button></li>
            <li><button>Box Shadow</button></li>
            <li><button>Border Radius (curvature)</button></li>
            <li><button>Transition</button></li>
            <li><button>Postion : Flex (options)</button></li>
            <li><button>Postion : Grid</button></li>
            <li><button>Text Transformation</button></li>
            <li><button>Z index (layering)</button></li>
            <li><button>Cursor state on hover</button></li>
            <li><button>Opacity</button></li>
        </ul>
    </div>
    </div>      
   

   
   
   
   {/* The right bar section */}
    <div id='rightwrapper'>
        <h1 style={{color : "indigo" , borderBottom : "4px solid grey" , textAlign : "center"}}>PROPERTY OPTIONS</h1>
        Element-id :<input type='text' style={{margin: "2%"}} id='name' onChange={handlename}></input>
        <div id='rightbar'>
            {options}
        </div>
    </div>
   
   
   
   
    
    
    {/* the text copy section */}
    <div id='text-copy'>
    <button onClick={copytoclipboard} style={{border : "2px solid red" , borderRadius : "15px"}}>Copy CSS</button>
    <hr></hr>    
    <div ref={divref}>
        #{elementname}{" "}{'{'}<br/>
    <pre style={{paddingLeft : "20px"}}>
    <code id='indent'>
    color  : {color};<br/>
      display : {display};<br/>
     background-color  : {bgcolor};<br/>
     font  : {font};<br/>
     font-size  : {fontsize};<br/>
      margin : {margin};<br/>
      padding : {padding};<br/>
     border  : {border};<br/>
     width  : {width};<br/>
     height  : {height};<br/>
     position  : {position};<br/>
     top  : {top};<br/>
     right : {right};<br/>
      left : {left};<br/>
      bottom : {bottom};<br/>
     float  : {float};<br/>
      text-align : {textalign};<br/>
     line-height  : {lineheight};<br/>
     overflow  : {overflow};<br/>
     list-style  : {liststyle};<br/>
     text-decoration  : {textdecoration};<br/>
     box-shadow  : {boxshadow};<br/>
     border-radius  : {borderradius};<br/>
      transition : {transition};<br/>
     flex  : {flex};<br/>
     justify-content  : {justifycontent};<br/>
      align-items : {alignitems};<br/>
     flex-direction  : {flexdirection};<br/>
      grid : {grid};<br/>
      text-transform : {texttransform};<br/>
     z-index  : {zindex};<br/>
     cursor  : {cursor};<br/>
     opacity : {opacity};<br/>
     </code>
     </pre>
    {'}'}`
        </div>
    </div>
   
    </div>)
}   
export default CSS_GEN;