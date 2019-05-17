import React, { useState } from 'react';
import Person from "./Person/Person"

import './App.css';

const app = props => {

 const [personState, setPersonState] = useState({
    persons:[
      { name: "Jim", age: 48  },
      { name: "Tom", age: 50  },
      { name: "Sally", age: 35  }
    ],
    
    otherState: "Some other state property"
  });

  

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Jim", age: 45 },
        { name: "Bob", age: 40 },
        { name: "Harry", age: 55 }
      ],
      
    })
  }

  const [otherState, setOtherState]=useState( "Changing contents of state")
  console.log(personState, otherState)
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>I'm really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>     
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>I'm a developer working with React</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>I'm a developer working with React</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}>I'm a developer working with React</Person>
      </div>
    );
  
}

export default app;

