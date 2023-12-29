import './css-gen.css'
import Navbar from '../../components/navbar'
import { useState } from 'react';
function CSS_GEN(){
    const [color , setcolor] = useState('Blue')
    return(
    <>
    <Navbar/>
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
    <div id='text-copy'>
        <div  >
        #my-element {'{'}
        <pre>
            {'      '}color : {color};
        </pre>
        {'}'}
        </div>
    </div>
    <div id='example'>

    </div>
    <div id='rightbar'>

    </div>
    </>)
}   
export default CSS_GEN;