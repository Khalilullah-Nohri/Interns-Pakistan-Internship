import logo from './logo.svg';
import './App.css';
import Student from './studentData.js';
function App() {
  return (

    <div>

      <h1 className='leadersboardHeading'>Leadersboard</h1>
      <Student name="ABC" university="MUET Jamshoro" score={333} />
      <Student name="CDE" university="University of SINDH  Jamshoro" score={330} />
      <Student name="XYZ" university="Tando Jam Agriculture" score={332} />
      <Student name="Hero" university="MUET Jamshoro" score={350} />
      <Student name="Mosso" university="Tando Jam Agriculture" score={360} />
      <Student name="Esso" university="University of SINDH  Jamshoro" score={280} />
    </div>

  );
}

export default App;







  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>