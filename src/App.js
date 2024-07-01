import './App.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GameStateStore from './stores/GameStateStore'
import EnvList from './components/EnvList';

function App() {
  const store = new GameStateStore();

  store.createEnv('DEV');
  store.createEnv('QA');
  store.createEnv('PRD');

  return (
    <div className="App">
      <Container>
        <Row>
          <div className='Banner'>
            <h1>aDEVenture_</h1>
          </div>
        </Row>
        <EnvList store={store}/>
        <Row>
          <div className='mt-5'>
            <footer><a href="https://www.flaticon.com/free-icons/code" title="code icons">Icons</a> created by Royyan Wijaya - Flaticon</footer>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
