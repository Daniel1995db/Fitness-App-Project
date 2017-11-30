import React from 'react';
import Lats from '../exercisesJSON/LatsData';

const LatsExercises = () => {

  const ExerciseMap = Lats.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Back (Lats)</h1>
        <p className="exercise-about-info">The latissimus dorsi is a large, flat muscle on the back that stretches to the sides, behind the arm, and is partly covered by the trapezius on the back near the midline. The power/size/strength of this muscle can be trained with a variety of different exercises.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default LatsExercises;