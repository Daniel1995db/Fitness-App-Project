import React from 'react';
import Shoulders from '../exercisesJSON/ShouldersData';

const ShouldersExercises = () => {
  return Shoulders.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}

export default ShouldersExercises;