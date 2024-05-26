import logo from './logo.svg';
import './App.css';

function App() {
  function sendToServer(){

  }
  return (
    <div className="App">
      <h1>pdf</h1>
      <form  action="">
        <input type="file" />
        <button>send</button>
      </form>
      <br />
      <textarea style={{width:"400px",height:"400px"}} name=""  id=""></textarea>
    </div>
  );
}

export default App;
