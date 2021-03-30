import React from 'react';
import './input.css';



const InputComp = (props) => {
    return (<div className="inpcon"><label className={props.labelname}>{props.label}</label><input className={props.border} type="text" placeholder={props.placeholder} ></input></div>)
}



InputComp.defaultProps = {
    placeholder: 'Placeholder',
    label: 'Label',
    border: 'grey',
    labelname: 'grey-label'
};


  
function ParaComp(props) {
    return <p className={props.class}>{props.para}</p>
}
ParaComp.defaultProps = {
    class: 'paragra'
  };

const  Input=() => {
   
    return (<div className="container">
        <table className="tableone">
            <tr>
                <td> <ParaComp para="<Input />"  /><InputComp /></td>
                <td><ParaComp class="greyr" para="&:hover"  /><InputComp /></td>
                <td><ParaComp class="greyr" para="&:focus"   /><InputComp labelname="blue-label" border="blue"/></td>

            </tr>

            <tr>
            <td><ParaComp para="<Input />"  /><InputComp labelname="red-label" border="red" /></td>
            <td><ParaComp class="greyr" para="&:hover"  /><InputComp /></td>
            <td><ParaComp class="greyr"para="&:focus"  /><InputComp labelname="red-label" border="red" /></td>

            </tr>

            <tr>
            <td><ParaComp para="<Input disabled/>"/> <InputComp border="less"/></td>
                
            </tr>
        </table>
        <table className="tabletwo">
            <tr>
                <td><ParaComp para="<Input helperText=”Some interesting text” />"  /><InputComp />
                    <small>Some interesting texts</small>
                </td>
                <td><ParaComp para="<Input helperText=”Some interesting text” error />"  /><InputComp labelname="red-label" border="red"/>
                    <small className="red-label">Some interesting texts</small>
                   
                </td>
                

            </tr>

            <tr>
            <td><ParaComp para="<Input starticon/>"  /><div class="munjo"><i class="fas fa-phone-alt"></i><InputComp  border="more"  /></div></td>
            <td><ParaComp para="<Input endicon/>"  /><div class="munjo"><i class="fas fa-lock fis"></i><InputComp  /></div></td>
            
            </tr>

            <tr>
            <td><ParaComp para="<Input value='text'/>"  /><InputComp placeholder="Text" /></td>
                
            </tr>
            <tr>
            <td><ParaComp para="<Input size=”sm” />"  /><InputComp /></td>
            <td><ParaComp para="<Input size=”md” />"  /><InputComp /></td>
            
            </tr>
        </table>
        <table className="tablethree">
            <tr>
                <td><ParaComp para="<Input fullWidth />"  /><InputComp placeholder="Text" border="large"/></td>

            </tr>

            <tr>
            <td><ParaComp para="<Input multiline row=”4” />"  /><InputComp border="multi" /></td>

            </tr>

        
        </table>
        <footer>
           
            <br></br>
      <h1>created by <span>Akhil Venkatesh</span> - devChallenges.io</h1>
      </footer> 
    </div>)


}




export default Input;