import './App.css';
import LogIn from './Pages/Login';
import DashBoard from './Pages/HomePage';
import HomePage from './Pages/HomePage';
import Category from './Pages/Category';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Orders from './Pages/Orders';
import Settings from './Pages/Settings';
import FinanceList from './Pages/Finance/FinanceList';
import FinanceChart from './Pages/Finance/FinanceChart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <Route  path="/financechart">
            <FinanceChart />
          </Route>
          <Route  path="/financelist">
            <FinanceList />
          </Route>
          <Route  path="/settings">
            <Settings />
          </Route>
          <Route  path="/orders">
            <Orders />
          </Route>
          <Route  path="/homepage">
            <HomePage />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
