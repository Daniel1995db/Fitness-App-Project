import React from 'react';
import LowerBack from '../exercisesJSON/LowerBackData';

const LowerBackExercises = () => {

  const ExerciseMap = LowerBack.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Back (Lower)</h1>
        <p className="exercise-about-info">The thoracolumbar fascia is one of the more important parts in the entire body as it interacts with many muscles and ligaments and serves to transfer load or energy from the ribcage to the pelvis. The thoracolumbar fascia also plays an essential role in walking as it harnesses and facilitates many of the forces required for gait— especially contralateral, or alternating, movement. </p>
      </div>
      {ExerciseMap}
    </div>
  )
};
export default LowerBackExercises;