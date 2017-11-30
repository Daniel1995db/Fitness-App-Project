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
    {/* Chest Section ----------------------- */}
    <h1>Chest</h1>
      <div>
        <Link to={`/exercises/chest`} >
          <div className="chest-pic"></div>
          <h3 className="exercise-name">Pectoral</h3>
        </Link>
          <p className="exercise-brief-description">The muscles that connect the front of the human chest with the bones of the upper arm and shoulder.(commonly referred to as "pecs") </p>
      </div>

    {/* BACK SECTION -------------------------- */}
    <h1>Back</h1>
      <div>
        <Link to={`/exercises/traps`} >
          <div className="traps-pic"></div>
          <h3 className="exercise-name">Trapezius</h3>
        </Link>
          <p className="exercise-brief-description">One of two large surface muscles that extend longitudinally from the occipital bone to the lower thoracic vertebrae of the spine and laterally to the spine of the scapula.</p>
      </div>

      <div>
        <Link to={`/exercises/middleback`} >
          <h3 className="exercise-name">Middle Back</h3>
        </Link>
          <p className="exercise-brief-description">The rhomboid major is a skeletal muscle on the back that connects the scapula with the vertebrae of the spinal column.</p>
        <Link to={`/exercises/middleback`} >
          <div className="middleback-pic"></div>
        </Link>
      </div>

      <div>
        <Link to={`/exercises/lats`} >
          <div className="lats-pic"></div>
          <h3 className="exercise-name">Latissimus dorsi (Lats)</h3>
        </Link>
          <p className="exercise-brief-description">A large, flat muscle on the back that stretches to the sides, behind the arm, and is partly covered by the trapezius on the back near the midline.</p>
      </div>

      <div>
        <Link to={`/exercises/lowerback`} >
          <h3 className="exercise-name">Lower Back</h3>
        </Link>
      <p className="exercise-brief-description">The thoracolumbar fascia is a large area of connective tissue - roughly diamond-shaped - which comprises the thoracic and lumbar parts of the deep fascia enclosing the intrinsic back muscles.</p>
        <Link to={`/exercises/lowerback`} >
          <div className="lowerback-pic"></div>
        </Link>
      </div>

    {/* ARMS SECTION ---------------------- */}
    <h1>Arms</h1>

      <div>
        <Link to={`/exercises/shoulders`} >
          <div className="shoulders-pic"></div>
          <h3 className="exercise-name">Shoulders</h3>
        </Link>
          <p className="exercise-brief-description">A complex combination of bones and joints where many muscles act to provide the widest range of motion of any part of the body.</p>
      </div>

      <div>
        <Link to={`/exercises/biceps`} >
          <h3 className="exercise-name">Biceps</h3>
        </Link>
        <p className="exercise-brief-description">A two-headed muscle that lies on the upper arm between the shoulder and the elbow.</p>
        <Link to={`/exercises/biceps`} >
          <div className="biceps-pic"></div>
        </Link>
      </div>

      <div>
        <Link to={`/exercises/triceps`} >
          <div className="triceps-pic"></div>
          <h3 className="exercise-name">Triceps</h3>
        </Link>
      <p className="exercise-brief-description">The only muscle on the back of the upper arm. It is the muscle principally responsible for extension of the elbow joint</p>
      </div>

    {/* CORE SECTION -------------------------- */}
    <h1>Core</h1>

      <div>
        <Link to={`/exercises/abdominals`} >
          <div className="abdominals-pic"></div>
          <h3 className="exercise-name">Abdominals</h3>
        </Link>
          <p className="exercise-brief-description">Commonly referred to as the “abs,” are a pair of long, flat muscles that extend vertically along the entire length of your core</p>
      </div>

    {/* LEGS SECTION ---------------------------- */}
    <h1>Legs</h1>

      <div>
        <Link to={`/exercises/glutes`} >
          <div className="glutes-pic"></div>
          <h3 className="exercise-name">Glutes</h3>
        </Link>
          <p className="exercise-brief-description">The gluteus maximus muscle is located in the buttocks and is regarded as one of the strongest muscles in the human body</p>
      </div>

      <div>
        <Link to={`/exercises/quadriceps`} >
          <h3 className="exercise-name">Quadriceps</h3>
        </Link>
      <p className="exercise-brief-description">A large muscle group that includes the four prevailing muscles on the front of the thigh</p>
        <Link to={`/exercises/quadriceps`} >
          <div className="quadriceps-pic"></div>
        </Link>
      </div>

      <div>
        <Link to={`/exercises/hamstrings`} >
          <div className="hamstrings-pic"></div>
          <h3 className="exercise-name">hamstrings</h3>
        </Link>
      <p className="exercise-brief-description">A muscle that runs down the back of the thigh. The hamstrings work together to flex the leg at the knee</p>
      </div>

      <div>
        <Link to={`/exercises/calves`} >
          <h3 className="exercise-name">Calves</h3>
        </Link>
        <p className="exercise-brief-description">A muscle on the back of the leg that connects the knee with the heel.</p>
        <Link to={`/exercises/calves`} >
          <div className="calves-pic"></div>
        </Link>
      </div>

  </div>
);

export default ExercisesPage;
