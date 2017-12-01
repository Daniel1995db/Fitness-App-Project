import React from 'react';
import Glutes from '../exercisesJSON/GlutesData';

const GlutesExercises = () => {

  const ExerciseMap = Glutes.exercises.map((exercise) => {
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
          <h1 className="exercise-heading-name">Legs (glutes)</h1>
          <p className="exercise-about-info">The gluteus maximus muscle is located in the buttocks and is regarded as one of the strongest muscles in the human body. It is connected to the coccyx, or tailbone, as well as other surrounding bones. The gluteus maximus muscle is responsible for movement of the hip and thigh.</p>
        </div>
        <p className="glutes-exercise-image"></p>
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

export default GlutesExercises;

