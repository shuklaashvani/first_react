import React, { Component } from "react";
//import logo from './logo.svg';
import classe from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Radium, { StyleRoot } from "radium";
import Persons from "../components/persons/persons";
import WithClass from "../hoc/Withclass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Hello guys i'm OK, this is constructor", props);
    this.state = {
      persons: [
        { id: "1", name: "Max", age: 28 },
        { id: "2", name: "Manu", age: 29 },
        { id: "3", name: "Stephene", age: 26 },
      ],
      showPerson: false,
    };
  }
  componentWillMount() {
    console.log(" its ComponentWillMount");
  }
  componentDidMount() {
    console.log("its componentDidMount");
  }
  /*  state = {
      persons: [
        { id:'1', name: "Max" , age:28} ,
        { id:'2',  name: "Manu" , age:29},
        { id:'3',  name: "Stephene" , age:26}
      ],
      showPerson:false
   }

    switchNameHandler = (newName) =>{
      this.setState({
        persons : [
          {name: newName , age:28} ,
          {name: "Manushree" , age:29},
          {name: "Stepheneva" , age:26}          
          ]
       }
      )
    }
*/
  nameChange = (event, id) => {
    const per = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const pe = {
      ...this.state.persons[per],
    };
    if (per >= 1) {
      pe.name = event.target.value;
    }

    const persons = [...this.state.persons];
    persons[per] = pe;

    this.setState({
      persons: persons,
      /*persons : [
          {name: "Max" , age:28} ,
          {name: event.target.value, age:29},
          {name: "Stepheneva" , age:26}          
          ]*/
    });
  };

  deletePerson = (personIndex) => {
    //const person=this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({
      persons: person,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow,
    });
  };

  render() {
    console.log("its render");
    let person = null;

    /*   if(this.state.showPerson){
      person = (
        <div>
       
        <Person 
          name={this.state.persons[0].name} age={this.state.persons[0].age}
          changed={this.nameChange}
       /> 
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click ={this.switchNameHandler.bind(this,'Ashvani')}
          changed={this.nameChange}
        />
        <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age}
        />

                               OR
      
        {this.state.persons.map( (person, index) =>{
                  return (
                     <Person
                          name={person.name}
                           age={person.age} 
                          click={() => this.deletePerson(index)}
                          key={person.id}
                          changed={(event) => this.nameChange(event,person.id)}
                          
                        /> 
                         )}) 
             }
     </div>
      );
    }
  */

    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            delete={this.deletePerson}
            changed={this.nameChange}
          />
        </div>
      );
    }

    //let classes =["red","bold"].join(" ");

    return (
      <StyleRoot>
        <WithClass classes={classe.App}>
          <Cockpit
            persons={this.state.persons}
            showPerson={this.state.showPerson}
            toggle={this.togglePersonsHandler}
          />
          {person}
        </WithClass>
      </StyleRoot>
    );
    //   return(React.createElement('div',null,React.createElement('h1',null,"Chal be chutiye")));
  }
}

export default Radium(App);
