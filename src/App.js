import './App.css';
import ClickerButton from './components/ClickerButton';

function App() {
  return (
    <div className="App">
      <div className='Banner'>
        <h1>aDEVenture_</h1>
      </div>      

      <div className='main'>
        <ClickerButton envName='DEV'/>
      </div>

      <div className='Footer'>
      <footer><a href="https://www.flaticon.com/free-icons/code" title="code icons">Icons</a> created by Royyan Wijaya - Flaticon</footer>
      </div>
    </div>
  );
}

export default App;
