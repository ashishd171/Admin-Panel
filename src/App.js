import './App.css';
import Pagelayout from './components/PageLayout';
import { useHistory } from 'react-router-dom';

const App = ({ }) => {
  const history = useHistory();
  return (
    <div className="App">
      <Pagelayout history={history} />
    </div>
  );
}
export default App;