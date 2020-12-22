import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("Hello guys i'm OK, this is constructor of person", props);
  }
  componentWillMount() {
    console.log(" its ComponentWillMount of person");
  }
  componentDidMount() {
    console.log("its componentDidMount of person");
  }
  componentWillReceiveProps(nextProps) {
    console.log("[update] person js, componentwillRecieve");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[update] sholudComponentUpdate", nextProps, nextState);
    return nextProps.persons != this.props.persons;
  }

  render() {
    console.log("its render of person");

    return this.props.persons.map((per, index) => {
      return (
        <Person
          click={() => this.props.delete(index)}
          name={per.name}
          age={per.age}
          key={per.id}
          changed={(event) => this.props.changed(event, per.id)}
        />
      );
    });
  }
}

export default Persons;
