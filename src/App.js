import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import LogIn from './Pages/Login';
import HomePage from './Pages/HomePage';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Category from './Pages/Category';
import FinanceChart from './Pages/Finance/FinanceChart';
import { Wrapper } from './Pages/HomePage/style';
import TopBar from './components/TopBar';
import SideBar from './components/Sidebar';
import DashBoard from './components/DashBoard';
import Orders from './Pages/Orders';
import Locations from './Pages/Settings/Locations';
import FinanceList from './Pages/Finance/FinanceList';
import Hall from './Pages/Settings/Hall';
import Reviews from './Pages/Reviews';
import User from './Pages/User';
import PushNotification from './Pages/PushNotification';
import SpecialOffers from './Pages/Settings/SpecialOffers';
import Delivery from './Pages/Settings/Delivery';
import Requisities from './Pages/Settings/Requisities';
import Partners from './Pages/Settings/Partners';
import Staff from './Pages/Settings/Staff';
import CategoryItemEdit from './components/category/CategoryItemEdit';
import SpecialOfferEdit from './components/SpecialOfferList/SpecialOfferEdit';

const App = () => {
  const [show, setShow] = useState(false);

  const [handleProduct, sethandleProduct] = useState(true)
  const handleProductfun = (val) => {
    sethandleProduct(val)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Wrapper>
            <TopBar />
            <div className='flex-container'>
              <SideBar />
              <DashBoard handleProduct={handleProduct} handleProductfun={handleProductfun}>
                <PublicRoute component={LogIn} path="/login" />
                <PrivateRoute component={SpecialOfferEdit} path="/specialoffer/item/edit/" />
                <PrivateRoute component={CategoryItemEdit} path="/category/item/edit/" />
                <PrivateRoute component={Staff} path="/staff" />
                <PrivateRoute component={Partners} path="/partners" />
                <PrivateRoute component={Requisities} path="/requisities" />
                <PrivateRoute component={Delivery} path="/delivery" />
                <PrivateRoute component={SpecialOffers} path="/specialoffers" />
                <PrivateRoute component={PushNotification} path="/pushnotification" />
                <PrivateRoute component={User} path="/user" />
                <PrivateRoute component={Reviews} path="/reviews" />
                <PrivateRoute component={Hall} path="/hall" />
                <PrivateRoute component={FinanceChart} path="/financechart" />
                <PrivateRoute component={FinanceList} path="/financelist" />
                <PrivateRoute component={Locations} path="/location" />
                <PrivateRoute component={Orders} path="/order" />
                <PrivateRoute component={Category} path="/category" handleProduct={handleProduct} show={show}/>
                <PrivateRoute component={HomePage} path="/homepage"  />
              </DashBoard>
            </div>
          </Wrapper>
        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App;