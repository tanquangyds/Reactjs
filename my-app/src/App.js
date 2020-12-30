import React , { useState } from 'react';
import Person from './Person/Person';
import './App.css';

function App(props) {
  const [state, setState] = useState(
    {
      persons: [
        {name: 'Quang', age: 27, class: 14},
        {name: 'Tèo', age: 26, class: 14},
        {name: 'Tý', age: 25, class: 14},
      ]
    })
  
  console.log(state.persons)
  return (
    <div  className="App">
      <h1>Hello</h1>
      <Person name={state.persons[2].name} age={state.persons[2].age} class={state.persons[2].class}>Hobbies: Sing</Person>
      <Person name={state.persons[0].name} age={state.persons[0].age} class={state.persons[0].class} />
      <Person name={state.persons[1].name} age={state.persons[1].age} class={state.persons[1].class} />
    </div>
  );
}



// class App extends Component{
//   state = {
//     persons: [
//       {name: 'Quang', age: 27, class: 14},
//     ],
//   }
//   render(){
//     return (
//       <div className="App">
//         <p>Hello World!</p>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} class={this.state.persons[0].class} />
//       </div>
//     );
//   }
// }

export default App;
