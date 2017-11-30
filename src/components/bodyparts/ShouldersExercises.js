import React from 'react';
import Shoulders from '../exercisesJSON/ShouldersData';

const ShouldersExercises = () => {

  const ExerciseMap = Shoulders.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Shoulders (front, rear, lateral)</h1>
        <p className="exercise-about-info">The shoulder is a complex combination of bones and joints where many muscles act to provide the widest range of motion of any part of the body. It is comprised of three main muscle groups - the front deltoid, lateral deltoid, and the rear deltoid</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default ShouldersExercises;