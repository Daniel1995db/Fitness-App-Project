import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ProfilePage from '../components/ProfilePage';
import BenefitsPage from '../components/BenefitsPage';
import MensPage from '../components/MensPage';
import WomensPage from '../components/WomensPage';
import WorkoutsPage from '../components/WorkoutsPage';
import DashboardPage from "../components/DashboardPage";
import BodyWeigtExercises from "../components/BodyWeightExercises";
import CardioExercises from "../components/CardioExercises";
import WeightLiftingExercises from "../components/WeightLiftingExercises";
import ParallaxPage from "../components/ParallaxPage";
import ExercisesPage from "../components/ExercisesPage";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/benefits" component={BenefitsPage} exact={true} />
                <Route path="/benefits/men" component={MensPage} />
                <Route path="/benefits/women" component={WomensPage} />
                <Route path="/main" component={ParallaxPage} />
                <Route path="/workouts" component={WorkoutsPage} exact={true} />
                <Route path="/workouts/bodyweight" component={BodyWeigtExercises} />
                <Route path="/workouts/cardio" component={CardioExercises} />
                <Route path="/workouts/weightlifting" component={WeightLiftingExercises} />
                <Route path="/exercises" component={ExercisesPage} /> 
                <Route component={NotFoundPage} />           
            </Switch>
        </div>
    </BrowserRouter> 
);

export default AppRouter;

