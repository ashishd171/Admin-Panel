import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CategoryItemEdit from '../components/category/CategoryItemEdit';
import SpecialOfferEdit from '../components/SpecialOfferList/SpecialOfferEdit';
import Category from '../Pages/Category';
import FinanceChart from '../Pages/Finance/FinanceChart';
import FinanceList from '../Pages/Finance/FinanceList';
import HomePage from '../Pages/HomePage';
import LogIn from '../Pages/Login';
import Orders from '../Pages/Orders';
import PushNotification from '../Pages/PushNotification';
import Reviews from '../Pages/Reviews';
import Delivery from '../Pages/Settings/Delivery';
import Hall from '../Pages/Settings/Hall';
import Locations from '../Pages/Settings/Locations';
import Partners from '../Pages/Settings/Partners';
import Requisities from '../Pages/Settings/Requisities';
import SpecialOffers from '../Pages/Settings/SpecialOffers';
import Staff from '../Pages/Settings/Staff';
import User from '../Pages/User';


const Routes = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/specialoffer/item/edit/" component={SpecialOfferEdit}></Route>
                    <Route path="/category/item/edit/" component={CategoryItemEdit}></Route>
                    <Route path="/staff" component={Staff}></Route>
                    <Route path="/partners" component={Partners}></Route>
                    <Route path="/requisities" component={Requisities}></Route>
                    <Route path="/delivery" component={Delivery}></Route>
                    <Route path="/specialoffers" component={SpecialOffers}></Route>
                    <Route path="/pushnotification" component={PushNotification}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/reviews" component={Reviews}></Route>
                    <Route path="/hall" component={Hall}></Route>
                    <Route path="/financechart" component={FinanceChart}></Route>
                    <Route path="/financelist" component={FinanceList}></Route>
                    <Route path="/location" component={Locations}></Route>
                    <Route path="/orders" component={Orders}></Route>
                    <Route path="/category" component={Category}></Route>
                    <Route path="/login" component={LogIn}></Route>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
