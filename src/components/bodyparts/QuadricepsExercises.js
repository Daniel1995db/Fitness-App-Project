import React from 'react';
import Quadriceps from '../exercisesJSON/QuadricepsData';

const QuadricepsExercises = () => {
  return Quadriceps.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}

export default QuadricepsExercises;