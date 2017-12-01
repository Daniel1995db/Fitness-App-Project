import React from 'react';
import LowerBack from '../exercisesJSON/LowerBackData';

const LowerBackExercises = () => {

  const ExerciseMap = LowerBack.exercises.map((exercise) => {
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
          <h1 className="exercise-heading-name">Back (Lower)</h1>
          <p className="exercise-about-info">The thoracolumbar fascia is one of the more important parts in the entire body as it interacts with many muscles and ligaments and serves to transfer load or energy from the ribcage to the pelvis. The thoracolumbar fascia also plays an essential role in walking as it harnesses and facilitates many of the forces required for gait— especially contralateral, or alternating, movement.</p>
        </div>
        <p className="lowerback-exercise-image"></p>
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
export default LowerBackExercises;

