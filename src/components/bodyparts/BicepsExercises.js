import React from 'react';
import Biceps from '../exercisesJSON/BicepData';

const BicepsExercises = () => {

  const ExerciseMap = Biceps.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Arms (Biceps)</h1>
        <p className="exercise-about-info">They may not be the biggest or the strongest group on your body, but your biceps are arguably the best "show" muscles.The long head of the biceps brachii muscle is the larger of the two muscle bodies that forms the entire biceps brachii muscle. The biceps brachii gets its name from the Latin words for “two-headed” and “arm” which describe its structure and location. The long and short heads of the biceps brachii work together to achieve the same functions.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default BicepsExercises;
