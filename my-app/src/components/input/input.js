import React from 'react';
import './input.css';


const InputComp = (props) => {
    return (<div className="inpcon"><label>{props.label}</label><input type="text" placeholder={props.placeholder} ></input></div>)
}

InputComp.defaultProps = {
    placeholder: 'Placeholder',
    label:'Label'
  };

const  Input=() => {
   
    return (<div className="container">
        <table className="tableone">
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
        <table className="tabletwo">
            <tr>
                <td><InputComp />
                    <small>Some interesting texts</small>
                </td>
                <td><InputComp />
                <small>Some interesting texts</small>
                </td>
                

            </tr>

            <tr>
            <td><InputComp /></td>
            <td><InputComp /></td>
            
            </tr>

            <tr>
            <td><InputComp placeholder="Text" /></td>
                
            </tr>
            <tr>
            <td><InputComp /></td>
            <td><InputComp /></td>
            
            </tr>
        </table>
        <table className="tablethree">
            <tr>
                <td><InputComp /></td>

            </tr>

            <tr>
            <td><InputComp /></td>

            </tr>

        
        </table>
    </div>)


}




export default Input;