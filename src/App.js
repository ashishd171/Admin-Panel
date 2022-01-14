import './App.css';
import LogIn from './Pages/Login';
import HomePage from './Pages/HomePage';
import Category from './Pages/Category';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Orders from './Pages/Orders';
import Locations from './Pages/Settings/Locations';
import FinanceList from './Pages/Finance/FinanceList';
import FinanceChart from './Pages/Finance/FinanceChart';
import Hall from './Pages/Settings/Hall';
import User from './Pages/User';
import PushNotification from './Pages/PushNotification';
import Reviews from './Pages/Reviews';
import SpecialOffers from './Pages/Settings/SpecialOffers';
import Delivery from './Pages/Settings/Delivery';
import Requisities from './Pages/Settings/Requisities';
import Partners from './Pages/Settings/Partners';
import Staff from './Pages/Settings/Staff';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/staff">
            <Staff />
          </Route>
          <Route  path="/partners">
            <Partners />
          </Route>
          <Route  path="/requisities">
            <Requisities />
          </Route>
          <Route  path="/delivery">
            <Delivery />
          </Route>
          <Route  path="/specialoffers">
            <SpecialOffers />
          </Route>
          <Route  path="/pushnotification">
            <PushNotification />
          </Route>
          <Route  path="/user">
            <User />
          </Route>
          <Route  path="/reviews">
            <Reviews />
          </Route>
          <Route  path="/hall">
            <Hall />
          </Route>
          <Route  path="/financechart">
            <FinanceChart />
          </Route>
          <Route  path="/financelist">
            <FinanceList />
          </Route>
          <Route  path="/location">
            <Locations />
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
