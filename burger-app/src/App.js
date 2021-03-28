import logo from './logo.svg';
import './App.css';
import Description from './components/description.js';
import {StyleRoot} from 'radium';

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <Description/>
      </div>
    </StyleRoot>
  );
}

export default App;
