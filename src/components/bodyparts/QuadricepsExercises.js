import React from 'react';
import Quadriceps from '../exercisesJSON/QuadricepsData';

const QuadricepsExercises = () => {

  const ExerciseMap = Quadriceps.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Legs (Quadriceps)</h1>
        <p className="exercise-about-info">The Latin translation of "quadriceps" is "four headed," as the group contains four separate muscles: the vastus lateralis, vastus medialis, vastus intermedius, and the rectus femoris. Each of the vastus muscles originates on the femur bone and attaches to the patella, or kneecap. The three vastus muscles are also partially covered by the rectus femoris, which also attaches to the kneecap. However, unlike the vastus muscles, the rectus femoris inserts into the hip bone.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default QuadricepsExercises;