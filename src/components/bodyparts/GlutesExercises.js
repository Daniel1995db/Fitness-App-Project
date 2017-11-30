import React from 'react';
import Glutes from '../exercisesJSON/GlutesData';

const GlutesExercises = () => {

  const ExerciseMap = Glutes.exercises.map((exercise) => {
    return (
      <div className="exercise-instructions-cointainer">
        <p className="exercise-instruction-name">{exercise.name}</p>
        <p className="exercise-instruction-text-img1">Starting Position</p><img className="exercise-instruction-img1" src={exercise.images[0]} />
        <p className="exercise-instruction-text-img2">Ending Position</p><img className="exercise-instruction-img2" src={exercise.images[1]} />
      </div>
    );
  })
  return (
    <div>
      <div>
        <h1 className="exercise-heading-name">Legs (Glutes)</h1>
        <p className="exercise-about-info">The gluteus maximus muscle is located in the buttocks and is regarded as one of the strongest muscles in the human body. It is connected to the coccyx, or tailbone, as well as other surrounding bones. The gluteus maximus muscle is responsible for movement of the hip and thigh.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default GlutesExercises;