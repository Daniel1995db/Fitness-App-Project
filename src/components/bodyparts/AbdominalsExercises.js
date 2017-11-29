import React from 'react';
import Abdominals from '../exercisesJSON/AbdominalData';

const AbdominalExercises = (props) => {
  return props.data.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}


// console.log(Abdominals);
// console.log('its connected');

export default AbdominalExercises;