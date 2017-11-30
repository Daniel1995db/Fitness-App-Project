import React from 'react';
import Abdominals from '../exercisesJSON/AbdominalData';

// const AbdominalExercises = (props) => {
//   return props.data.exercises.map((exercise) => {
//     return (
//       <div>
//         <p>{exercise.name}</p>
//         <p>Starting Position</p><img src={exercise.images[0]} />
//         <p>Ending Position</p><img src={exercise.images[1]} />
//       </div>
//     )
//   });
// }


const AbdominalExercises = () => {

  const ExerciseMap = Abdominals.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Core (Abdominals)</h1>
        <p className="exercise-about-info">The rectus abdominis muscles, commonly referred to as the “abs,” are a pair of long, flat muscles that extend vertically along the entire length of the abdomen adjacent to the umbilicus. Each muscle consists of a string of four fleshy muscular bodies connected by narrow bands of tendon, which give it a lumpy appearance when well defined and tensed. This lumpy appearance results in the rectus abdominis muscles being referred to as the “six-pack.”</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

// console.log(Abdominals);
// console.log('its connected');

export default AbdominalExercises;