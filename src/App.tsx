import './App.css';
import { NextToGo } from './components/NextToGo';

export const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <h1>Races</h1>
      <NextToGo />
    </header>
  </div>
);
