import React from 'react';
import Glutes from '../exercisesJSON/GlutesData';

const GlutesExercises = () => {
  return Glutes.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}

export default GlutesExercises;