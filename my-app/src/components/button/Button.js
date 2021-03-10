import React from 'react';
import './Button.css';



function ButtonComp(props) {
    return <button className={props.class}>Click Me</button>
}

function Button (){
    return <div>

        <table>
            <tr>
                <td><ButtonComp /></td>
                <td><ButtonComp class="hoverOne" /></td>
            </tr>
            <tr>
                <td><ButtonComp class="outline" /></td>
                <td> <ButtonComp class="outline-hover"/></td>
            </tr>
            <tr>
                <td><ButtonComp class="outline" /></td>
                <td> <ButtonComp class="outline-hover"/></td>
            </tr>
            <tr>
                <td><ButtonComp class="outline" /></td>
                <td> <ButtonComp class="outline-hover"/></td>
            </tr>
        </table>

       
        
        
       
    </div>
}

export default Button;