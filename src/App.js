import './index.css';

import GameStateStore from './stores/GameStateStore'
import EnvList from './components/EnvList';

function App() {
  const store = new GameStateStore();

  //Implementado assim a pensar num futuro com mais ambientes
  //Dar refactor se não acontecer
  store.createEnv('DEV');
  store.createEnv('QA');
  store.createEnv('PRD');

  return (
    <main className="bg-slate-800 text-slate-200 h-screen w-screen">
      <div>
        <div>
          <header>
            <div className='text-cyan-300'>
              <h1>aDEVenture_</h1>
            </div>
          </header>
        </div>

        <EnvList store={store}/>

        <div>
            <div className=''>
              <footer><a href="https://www.flaticon.com" title="Icons">Icons</a> from Flaticon</footer>
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
