import React from 'react';
import MiddleBack from '../exercisesJSON/MiddleBackData';

const MiddleBackExercises = () => {

  const ExerciseMap = MiddleBack.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Back (Middle)</h1>
        <p className="exercise-about-info">The rhomboid major is a skeletal muscle on the back that connects the scapula with the vertebrae of the spinal column. In human anatomy, it acts together with the rhomboid minor to keep the scapula pressed against thoracic wall and to retract the scapula toward the vertebral column.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default MiddleBackExercises;