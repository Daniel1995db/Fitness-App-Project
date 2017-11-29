import React from 'react';
import MiddleBack from '../exercisesJSON/MiddleBackData';

const MiddleBackExercises = () => {
  return MiddleBack.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}

export default MiddleBackExercises;