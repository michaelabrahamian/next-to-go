import logo from './logo.svg';
import './App.css';

export const App = (): JSX.Element => {
  const currentTimestamp = new Date().toLocaleString('en-AU');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>It is currently {currentTimestamp}</p>
      </header>
    </div>
  );
};
