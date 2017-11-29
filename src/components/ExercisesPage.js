import React from 'React';
import { Link } from 'react-router-dom'
import Abdominals from './exercisesJSON/AbdominalData';
import AbdominalExercises from './bodyparts/AbdominalsExercises';
import Biceps from './exercisesJSON/BicepData';
import BicepsExercises from './bodyparts/BicepsExercises';
import Calves from './exercisesJson/CalvesData';
import CalvesExercises from './bodyparts/CalvesExercises';
import Chest from './exercisesJSON/ChestData';
import ChestExercises from './bodyparts/ChestExercises';
import Glutes from './exercisesJSON/GlutesData';
import GlutesExercises from './bodyparts/GlutesExercises';
import Hamstrings from './exercisesJSON/HamstringData';
import HamstringsExercises from './bodyparts/HamstringsExercises';
import Lats from './exercisesJSON/LatsData';
import LatsExercises from './bodyparts/LatsExercises';
import LowerBack from './exercisesJSON/LowerBackData';
import LowerBackExercises from './bodyparts/LowerBackExercises';
import MiddleBack from './exercisesJSON/MiddleBackData';
import MiddleBackExercises from './bodyparts/MiddleBackExercises';
import Quadriceps from './exercisesJSON/QuadricepsData';
import QuadricepsExercises from './bodyparts/QuadricepsExercises';
import Shoulders from './exercisesJSON/ShouldersData';
import ShouldersExercises from './bodyparts/ShouldersExercises';
import Traps from './exercisesJSON/TrapsData';
import TrapsExercises from './bodyparts/TrapsExercises';
import Triceps from './exercisesJSON/TricepsData';
import TricepExercises from './bodyparts/TricepsExercises';

const ExercisesPage = () => (
  <div>
    <h1>Chest</h1>
      <Link to={`/exercises/chest`} >
        <div>
          <div className="chest-pic"></div>
          <h3 className="exercise-name">Chest</h3>
        </div>
      </Link>

    <h1>Back</h1>
      <Link to={`/exercises/traps`} >
        <div>
          <div className="traps-pic"></div>
          <h3 className="exercise-name">Trapezius</h3>
        </div>
      </Link>
      <Link to={`/exercises/middleback`} >
        <div>
          <h3 className="exercise-name">Middle Back</h3>
          <div className="middleback-pic"></div>
        </div>
      </Link>
      <Link to={`/exercises/lats`} >
        <div>
          <div className="lats-pic"></div>
          <h3 className="exercise-name">Lats</h3>
        </div>
      </Link>
      <Link to={`/exercises/lowerback`} >
        <div>
          <h3 className="exercise-name">Lower Back</h3>
          <div className="lowerback-pic"></div>
        </div>
      </Link>

    <h1>Arms</h1>
      <Link to={`/exercises/shoulders`} >
        <div>
          <div className="shoulders-pic"></div>
          <h3 className="exercise-name">Shoulders</h3>
        </div>
      </Link>
      <Link to={`/exercises/biceps`} >
        <div>
          <h3 className="exercise-name">Biceps</h3>
          <div className="biceps-pic"></div>
        </div>
      </Link>
      <Link to={`/exercises/triceps`} >
        <div>
          <div className="triceps-pic"></div>
          <h3 className="exercise-name">Triceps</h3>
        </div>
      </Link>

    <h1>Core</h1>
      <Link to={`/exercises/abdominals`} >
        <div>
          <div className="abdominals-pic"></div>
          <h3 className="exercise-name">Abdominals</h3>
        </div>
      </Link>

    <h1>Legs</h1>
      <Link to={`/exercises/glutes`} >
        <div>
          <div className="glutes-pic"></div>
          <h3 className="exercise-name">Glutes</h3>
        </div>
      </Link>
      <Link to={`/exercises/quadriceps`} >
        <div>
          <h3 className="exercise-name">Quadriceps</h3>
          <div className="quadriceps-pic"></div>
        </div>
      </Link>
      <Link to={`/exercises/hamstrings`} >
        <div>
          <div className="hamstrings-pic"></div>
          <h3 className="exercise-name">Hamstrings</h3>
        </div>
      </Link>
      <Link to={`/exercises/calves`} >
        <div>
          <h3 className="exercise-name">Calves</h3>
          <div className="calves-pic"></div>
        </div>
      </Link>

  </div>
);

export default ExercisesPage;
