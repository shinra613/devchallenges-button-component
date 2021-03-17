import React from 'react';
import './Button.css';



function ButtonComp(props) {
    return <button className={props.class}>{props.name}</button>
}

function ButtonCompTwo(props) {
    return <button className={props.class}><i class="fas fa-cart-plus"></i>{props.name}</button>
}

function ButtonCompThree(props){
    return <button className={props.class}>{props.name}<i class="fas fa-cart-plus"></i></button>
}


function ParaComp(props) {
    return <p className="paragra">{props.para}</p>
}

function Button (){
    return <div>

        <table>
            <tr>
                <td>
                    <ParaComp para="<Button />"  />
                    <ButtonComp name="Default" class="button" /></td>
                <td> <ParaComp para="&:hover, &:focus" />
                    <ButtonComp name="Default" class="button hoverOne" /></td>
            </tr>
            <tr>
                <td> <ParaComp para="<Button variant=”outline” />" />
                    <ButtonComp name="Default" class="outline" /></td>
                <td>  <ParaComp para="&:hover, &:focus" />
                    <ButtonComp name="Default" class="outline hovertwo" /></td>
            </tr>
            <tr>
                <td> <ParaComp para="<Button variant=”text” />" />
                    <ButtonComp name="Default" class="text" /></td>
                <td>  <ParaComp para="&:hover, &:focus" />
                    <ButtonComp name="Default" class="text hoverthree" /></td>
            </tr>
            <tr>
                <td> <ParaComp para="<Button disableShadow />" />
                    <ButtonComp name="Default" class="disabledshadow" /></td>
               
            </tr>
            <tr>
                <td> <ParaComp para="<Button disabled />" />
                    <ButtonComp name="Default" class="disabled" /></td>
                <td> <ParaComp para="<Button variant=”text” disabled />" />
                    <ButtonComp name="Default" class="disabled hoverfour" /></td>
               
            </tr>
            <tr>
                <td> <ParaComp para="<Button startIcon=”local_grocery_store” />" />
                    
                    
                    <ButtonCompTwo name=" Default" class="disabledshadow lefticon" /></td>
                    <td> <ParaComp para="<Button endIcon=”local_grocery_store” />" />
                    <ButtonCompThree name="Default " class="disabledshadow righticon" /></td>
               
            </tr>
            <tr>
                <td> <ParaComp para="<Button size=”sm” />" />
                    <ButtonComp name="Default" class="btn" /></td>
                <td> <ParaComp para="<Button size=”md” />" />
                    <ButtonComp name="Default" class="btn medium" /></td>
                <td> <ParaComp para="<Button size=”lg” />" />
                    <ButtonComp name="Default" class="btn large" /></td>
            
               
            </tr>
            <tr>
                <td> <ParaComp para="<Button color=”default” />" />
                    <ButtonComp name="Default" class="button" /></td>
                <td> <ParaComp para="<Button color=”primary” />" />
                    <ButtonComp name="Default" class="disabledshadow hoverfive" /></td>
                <td> <ParaComp para="<Button color=”secondary” />" />
                    <ButtonComp name="Secondary" class="secondary" /></td>
                <td> <ParaComp para="<Button color=”danger” />" />
                    <ButtonComp name="Danger" class="danger" /></td>
               
            </tr>
            <tr>
                <td> <ParaComp para="&:hover, &:focus" />
                    <ButtonComp name="Default" class="button hoverOne" /></td>
                <td> 
                    <ButtonComp name="Default" class="disabledshadow " />
                </td>
                
                <td> 
                    <ButtonComp name="Secondary" class="secondary hoversix" /></td>
                <td>
                    <ButtonComp name="Danger" class="danger hoversever" /></td>
               
            </tr>
        </table>

       
        
        
       
    </div>
}

export default Button;