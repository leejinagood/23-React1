import React from 'react';
import ReactDOM from 'react-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//3/30 tick예제 
function Clock() {
  return (
    <div>
      <h1>안녕, 리액트?</h1>
      <h2>현재시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
function tick() {
  // eslint-disable-next-line no-undef
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

setInterval(tick, 1000);

export default Clock;
