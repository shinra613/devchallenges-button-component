import React from 'react';
import './input.css';


const InputComp = (props) => {
    return (<div className="inpcon"><label>Label</label><input type="text" placeholder='placeholder'></input></div>)
}

const  Input=() => {
   
    return (<div>
        <table>
            <tr>
                <td><InputComp /></td>
                <td><InputComp /></td>
                <td><InputComp /></td>

            </tr>

            <tr>
            <td><InputComp /></td>
            <td><InputComp /></td>
            <td><InputComp /></td>

            </tr>

            <tr>
            <td><InputComp /></td>
                
            </tr>
        </table>
        <table>
            <tr>
                <td><InputComp /></td>
                <td><InputComp /></td>
                

            </tr>

            <tr>
            <td><InputComp /></td>
            <td><InputComp /></td>
            
            </tr>

            <tr>
            <td><InputComp /></td>
                
            </tr>
            <tr>
            <td><InputComp /></td>
            <td><InputComp /></td>
            
            </tr>
        </table>
    </div>)


}




export default Input;