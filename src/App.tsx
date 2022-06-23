import './App.css';
import Button from './components/button/Button';
import Dropdown from './components/dropdown/Dropdown';
import { Items } from './components/app/Items';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button/> */}
        {/* <Dropdown/> */}
        Выберите альбом
        <Items/>
      </header>
    </div>
  );
}

export default App;
