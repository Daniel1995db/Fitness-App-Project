import React from 'react';
import Calves from '../exercisesJSON/CalvesData';

const CalvesExercises = () => {

  const ExerciseMap = Calves.exercises.map((exercise) => {
    return (
      <div className="exercise-instructions-cointainer">
        <p className="exercise-instruction-name">{exercise.name}</p>

        <div className="exercise-instructions-cointainer-flex">
          <p className="exercise-instruction-text-img1">Starting Position</p>
          <p className="exercise-instruction-text-img2">Ending Position</p>
        </div>
        <div className="exercise-instructions-cointainer-flex">
          <img className="exercise-instruction-img1" src={exercise.images[0]} />
          <img className="exercise-instruction-img2" src={exercise.images[1]} />
        </div>

      </div>
    );
  })
  return (
    <div className="exercises-body-page">
      <div className="exercise-info-container">
        <div className="exercise-description-info">
          <h1 className="exercise-heading-name">Legs (calves)</h1>
          <p className="exercise-about-info">The calves consist of a lot of muscles, but the two that are most important from an aesthetic perspective are the gastrocnemius and the soleus. The gastrocnemius consists of a nearly equal amount of slow and fast twitch muscle fibres (like most muscles in the body), and is engaged when the leg is straight. The soleus predominantly consists of slow twitch fibres, and is engaged both when the leg is straight and bent.</p>
        </div>
        <p className="calves-exercise-image"></p>
      </div>
      
      <div className="exercises-loop">
        <div className="exercises-info">
          <p>Listed below are a number of exercises (with images) on how to properly execute a movement Each exercise is meant to target the muscle shown above.</p>
          <p>The exercises are a mixture of HIIT, body weight, weight lifting, and powerlifting movements.</p>
          <p>The starting and ending images are a guide to the proper execution of the movement.</p>
        </div>

        <h3 className="list-of-exercises-heading">Exercises</h3>
        <div className="exercises-warning">
          <p>WARNING! We strongly recommend stretching and warming up, to get blood flowing to the muscle, before executing any exercise.</p>
        </div>
        {ExerciseMap}
      </div>
    </div>
  )
};

export default CalvesExercises;

