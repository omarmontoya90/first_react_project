import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:"Omar", age:"30"},
      { name:"Leonardo", age:"23"},
      { name:"Montoya", age:"23"}
    ],
    otherSatet: "some value"
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: "60"},
        { name: "Tesla", age: "20"},
        { name: "Kawasaki", age: "87"}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: "DaVinci", age: "60"},
        { name: "Tesla", age: "20"},
        { name: event.target.value, age: "87"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>Hello, I am a React application</h1>
       // The bind is an option to send parameters to arrow function
       <button onClick={this.switchNameHandler.bind(this, "Renault")}>Random Data</button>

       <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         // The arrow function is other option to send parameters to arrow function
         //It's a little inefficient, it may affect performance
         changeName={()=>this.switchNameHandler("Homer")}/> 

       <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         changeName={this.switchNameHandler.bind(this, "Renault")}> Hobbie: Develop</Person>

       <Person
         name={this.state.persons[2].name}
         age={this.state.persons[2].age}
         changeName={this.switchNameHandler.bind(this, "Enzo")}
         inputChangedName={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
