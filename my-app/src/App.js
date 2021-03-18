import React, { useState } from 'react';
import './App.css';
import Button from './components/button/Button'
import Input from './components/input/input'

function App() {

  const [module, setModule] = useState('Button');
  
  const moduleComponent = {
    'Button': <Button />,
    'Input' : <Input />
  }

  const ModuleReturn = (moduleName) => {
    
    return moduleComponent[moduleName];
    
   }

  const moduleFinder = (moduleName) => {
   
    setModule(moduleName);
  }



  return (
    <div className="App">
      <div className="main-container">
        <div className="module">
        <h1 className="logoname"><span>Dev</span>challenges.io</h1>
          <ul>
            <li onClick={()=>moduleFinder('Colors')} >Colors</li>
            <li onClick={()=>moduleFinder('Typography')} >Typography</li>
            <li onClick={()=>moduleFinder('Spaces')} >Spaces</li>
            <li onClick={()=>moduleFinder('Button')} >Button</li>
            <li onClick={()=>moduleFinder('Input')} >Input</li>
            <li onClick={()=>moduleFinder('Grid')}>Grid</li>
          </ul>
        </div>
        <div className="modulePage">
          <div className="module-title">{module}</div>
          
            
            {ModuleReturn(module)}

          
          
        </div>
      </div>
    </div>
  );
}

export default App;
