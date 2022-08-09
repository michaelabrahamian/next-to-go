import './App.css';
import { NextToGo } from './NextToGo';

export const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <h1>Races</h1>
      <NextToGo />
    </header>
  </div>
);
