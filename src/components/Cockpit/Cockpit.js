import React from 'react';
import classe from './Cockpit.module.css';
import Radium  from 'radium';
import Auxx from '../../hoc/Auxx';

const Cockpit= (props) => {
    const style = {
        backgroundColor:'gray',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'Pointer',
  
        ':hover' :{
          backgroundColor:'black'
        }
      }
  
    let classes = [];
      if(props.persons.length <=2){
        classes.push(classe.red);
      }
      if(props.persons.length <=1){
        classes.push(classe.bold);
      }

     
      if(props.showPerson){
        style.backgroundColor ='red';
        style[':hover']={
          backgroundColor: 'blue'
        }
      }
    return(
        <Auxx>
    <h1>Hello this is my work</h1> 
         <p className={classes.join(" ")}>This is really working</p>
         
         <button 
           style={style}
           onClick={ () => props.toggle('Ash')}>
             Toggle Person                      
         </button>
         </Auxx>
    );
}

export default Radium(Cockpit);