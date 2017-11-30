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
import PowerliftingPage from '../components/PowerliftingPage';
import StrongmanPage from '../components/StrongmanPage';
import CrossfitPage from '../components/CrossfitPage';

import ParallaxPage from "../components/ParallaxPage";
import ExercisesPage from "../components/ExercisesPage";

import AbdominalExercises from '../components/bodyparts/AbdominalsExercises';
import BicepsExercises from '../components/bodyparts/BicepsExercises';
import CalvesExercises from '../components/bodyparts/CalvesExercises';
import ChestExercises from '../components/bodyparts/ChestExercises';
import GlutesExercises from '../components/bodyparts/GlutesExercises';
import HamstringsExercises from '../components/bodyparts/HamstringsExercises';
import LatsExercises from '../components/bodyparts/LatsExercises';
import LowerBackExercises from '../components/bodyparts/LowerBackExercises';
import MiddleBackExercises from '../components/bodyparts/MiddleBackExercises';
import QuadricepsExercises from '../components/bodyparts/QuadricepsExercises';
import ShouldersExercises from '../components/bodyparts/ShouldersExercises';
import TrapsExercises from '../components/bodyparts/TrapsExercises';
import TricepExercises from '../components/bodyparts/TricepsExercises';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ParallaxPage} exact={true} />
                {/* <Route path="/profile" component={ProfilePage} /> */}
                {/* <Route path="/main" component={ParallaxPage} /> */}

                <Route path="/benefits" component={BenefitsPage} exact={true} />
                <Route path="/benefits/men" component={MensPage} />
                <Route path="/benefits/women" component={WomensPage} />
                

                <Route path="/workouts" component={WorkoutsPage} exact={true} />
                <Route path="/workouts/bodyweight" component={BodyWeigtExercises} />
                <Route path="/workouts/cardio" component={CardioExercises} />
                <Route path="/workouts/weightlifting" component={WeightLiftingExercises} />
                <Route path="/workouts/powerlifting" component={PowerliftingPage} />
                <Route path="/workouts/strongman" component={StrongmanPage} />
                <Route path="/workouts/crossfit" component={CrossfitPage} />

                <Route path="/exercises" component={ExercisesPage} exact={true} /> 
                <Route path="/exercises/abdominals" component={AbdominalExercises} />
                <Route path="/exercises/biceps" component={BicepsExercises} />
                <Route path="/exercises/calves" component={CalvesExercises} />
                <Route path="/exercises/chest" component={ChestExercises} />
                <Route path="/exercises/glutes" component={GlutesExercises} />
                <Route path="/exercises/hamstrings" component={HamstringsExercises} />
                <Route path="/exercises/lats" component={LatsExercises} />
                <Route path="/exercises/lowerback" component={LowerBackExercises} />
                <Route path="/exercises/middleback" component={MiddleBackExercises} />
                <Route path="/exercises/quadriceps" component={QuadricepsExercises} />
                <Route path="/exercises/shoulders" component={ShouldersExercises} />
                <Route path="/exercises/traps" component={TrapsExercises} />
                <Route path="/exercises/triceps" component={TricepExercises} />
                
                <Route component={NotFoundPage} />           
            </Switch>
        </div>
    </BrowserRouter> 
);

export default AppRouter;

