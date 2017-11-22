import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ProfilePage from '../components/ProfilePage';
import AboutPage from '../components/AboutPage';
import WorkoutsPage from '../components/WorkoutsPage';
import DashboardPage from "../components/DashboardPage";
import BodyWeigtExercises from "../components/BodyWeightExercises";
import CardioExercises from "../components/CardioExercises";
import WeightLiftingExercises from "../components/WeightLiftingExercises";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/workouts" component={WorkoutsPage} exact={true} />
                <Route path="/workouts/bodyweight" component={BodyWeigtExercises} />
                <Route path="/workouts/cardio" component={CardioExercises} />
                <Route path="/workouts/weightlifting" component={WeightLiftingExercises} /> 
                <Route component={NotFoundPage} />           
            </Switch>
        </div>
    </BrowserRouter> 
);

export default AppRouter;
