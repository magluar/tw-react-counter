import './App.css';
// import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';
import CounterSizeGenerator from './components/CounterSizeGenerator';

function App() {
  return (
    <div className="App">
      <CounterSizeGenerator></CounterSizeGenerator>
      <CounterGroup></CounterGroup>
    </div>
  );
}

export default App;
