import './App.css';
import Dropdown from './components/dropdown';

function App() {
  const items = ['Yes','Probably Not'];

  return (
    <div>
      <Dropdown items={items} />
    </div>
  );
}

export default App;