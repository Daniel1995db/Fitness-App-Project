import React from 'react';
import Hamstring from '../exercisesJSON/HamstringData';

const HamstringsExercises = () => {
  return Hamstrings.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}

export default HamstringsExercises;