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

    <div className="exercise-page-banner"></div>
    
    <h3 className="exercise-page-welcome">Unsure of how to execute a certain movement? Browse through our exercises and we’ll show you. Pick a body part to get started. </h3>

    {/* Chest Section ----------------------- */}
    <h1 className="body-section">Chest</h1>

      <div className="bodypart-selection">

          <Link to={`/exercises/chest`} style={{ textDecoration: 'none' }}>
            <div className="chest-pic"></div>
          </Link>

          <div className="name-and-description">
            <Link to={`/exercises/chest`} style={{ textDecoration: 'none' }}> 
              <h3 className="exercise-name">Pectoral</h3>
            </Link>
        <p className="exercise-brief-description">(Commonly referred to as "pecs") The muscles that connect the front of the human chest with the bones of the upper arm and shoulder. </p>
            <Link to={`/exercises/chest`} style={{ textDecoration: 'none' }}>
              <p className="see-more"></p>
            </Link>
          </div>
      </div>

    {/* BACK SECTION -------------------------- */}

    <h1 className="body-section">Back</h1>

    <div className="bodypart-selection">
      <Link to={`/exercises/traps`} style={{ textDecoration: 'none' }}>
        <div className="traps-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/traps`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Trapezius</h3>
        </Link>
        <p className="exercise-brief-description">One of two large surface muscles that extend longitudinally from the occipital bone to the lower thoracic vertebrae of the spine and laterally to the spine of the scapula. </p>
        <Link to={`/exercises/traps`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    <div className="bodypart-selection">
      <div className="name-and-description">
        <Link to={`/exercises/middleback`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Middle Back</h3>
        </Link>
          <p className="exercise-brief-description">The rhomboid major, the primary muscle of the middle back, is a skeletal muscle on the back that connects the scapula with the vertebrae of the spinal column.</p>
        <Link to={`/exercises/middleback`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
      <Link to={`/exercises/middleback`} style={{ textDecoration: 'none' }}>
        <div className="middleback-pic"></div>
      </Link>
    </div>

    <div className="bodypart-selection">

      <Link to={`/exercises/lats`} style={{ textDecoration: 'none' }}>
        <div className="lats-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/lats`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Latissimus dorsi (Lats)</h3>
        </Link>
        <p className="exercise-brief-description">(Commonly reffered to as, "the lats") A large, flat muscle on the back that stretches to the sides, behind the arm, and is partly covered by the trapezius on the back near the midline.</p>
        <Link to={`/exercises/lats`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    <div className="bodypart-selection">

      <div className="name-and-description">
        <Link to={`/exercises/lowerback`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Lower Back</h3>
        </Link>
        <p className="exercise-brief-description">The thoracolumbar fascia is a large area of connective tissue - roughly diamond-shaped - which comprises the thoracic and lumbar parts of the deep fascia enclosing the intrinsic back muscles.</p>
        <Link to={`/exercises/lowerback`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
      <Link to={`/exercises/lowerback`} style={{ textDecoration: 'none' }}>
        <div className="middleback-pic"></div>
      </Link>
    </div>

    {/* ARMS SECTION ---------------------- */}

    <h1 className="body-section">Arms</h1>

    <div className="bodypart-selection">

      <Link to={`/exercises/shoulders`} style={{ textDecoration: 'none' }}>
        <div className="shoulders-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/shoulders`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Shoulders</h3>
        </Link>
        <p className="exercise-brief-description">A complex combination of bones and joints where many muscles act to provide the widest range of motion of any part of the body.</p>
        <Link to={`/exercises/shoulders`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    <div className="bodypart-selection">

      <div className="name-and-description">
        <Link to={`/exercises/biceps`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Biceps</h3>
        </Link>
        <p className="exercise-brief-description">The bicep is consisted of your thoracolumbar fascia. A large area of connective tissue - roughly a two-headed muscle that lies on the upper arm between the shoulder and the elbow.</p>
        <Link to={`/exercises/biceps`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
      <Link to={`/exercises/biceps`} style={{ textDecoration: 'none' }}>
        <div className="biceps-pic"></div>
      </Link>
    </div>

    <div className="bodypart-selection">

      <Link to={`/exercises/triceps`} style={{ textDecoration: 'none' }}>
        <div className="triceps-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/triceps`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Triceps</h3>
        </Link>
        <p className="exercise-brief-description">The only muscle on the back of the upper arm. It is the muscle principally responsible for the extension of your elbow joint.</p>
        <Link to={`/exercises/triceps`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    {/* CORE SECTION -------------------------- */}
    <h1 className="body-section">Core</h1>

    <div className="bodypart-selection">

      <Link to={`/exercises/abdominals`} style={{ textDecoration: 'none' }}>
        <div className="abdominals-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/abdominals`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Abdominals</h3>
        </Link>
        <p className="exercise-brief-description">Your core ,commonly referred to as the “abs,” are a pair of long, flat muscles that extend vertically along the entire length of your core.</p>
        <Link to={`/exercises/abdominals`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    {/* LEGS SECTION ---------------------------- */}
    <h1 className="body-section">Legs</h1>

    <div className="bodypart-selection">

      <Link to={`/exercises/glutes`} style={{ textDecoration: 'none' }}>
        <div className="glutes-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/glutes`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Glutes</h3>
        </Link>
        <p className="exercise-brief-description">The gluteus maximus muscle is located in the buttocks and is regarded as one of the strongest muscles in the human body.</p>
        <Link to={`/exercises/glutes`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    <div className="bodypart-selection">

      <div className="name-and-description">
        <Link to={`/exercises/quadriceps`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Quadriceps</h3>
        </Link>
        <p className="exercise-brief-description">A large muscle group that includes the four prevailing muscles on the front of the thigh.</p>
        <Link to={`/exercises/quadriceps`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
      <Link to={`/exercises/quadriceps`} style={{ textDecoration: 'none' }}>
        <div className="quadriceps-pic"></div>
      </Link>
    </div>

    <div className="bodypart-selection">

      <Link to={`/exercises/hamstrings`} style={{ textDecoration: 'none' }}>
        <div className="hamstrings-pic"></div>
      </Link>

      <div className="name-and-description">
        <Link to={`/exercises/hamstrings`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Hamstrings</h3>
        </Link>
        <p className="exercise-brief-description">A muscle that runs down the back of the thigh. The hamstrings work together to flex the leg at the knee.</p>
        <Link to={`/exercises/hamstrings`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
    </div>

    <div className="bodypart-selection">

      <div className="name-and-description">
        <Link to={`/exercises/calves`} style={{ textDecoration: 'none' }}>
          <h3 className="exercise-name">Calves</h3>
        </Link>
        <p className="exercise-brief-description">A muscle on the back of the leg that connects the knee with the heel.</p>
        <Link to={`/exercises/calves`} style={{ textDecoration: 'none' }}>
          <p className="see-more"></p>
        </Link>
      </div>
      <Link to={`/exercises/calves`} style={{ textDecoration: 'none' }}>
        <div className="calves-pic"></div>
      </Link>
    </div>
    
    <div className="physician-warning">
      <p>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
    </div>

  </div>
);

export default ExercisesPage;
