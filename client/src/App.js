import './App.css';
import Timer from './components/Timer/Timer';
import UserInput from './components/UserInput/UserInput';

function App() {
  return (
    <div className="App">
      <h1>Time Expander</h1>
      <UserInput />
      <Timer />
    </div>
  );
}

export default App;
