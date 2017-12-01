import React from 'react';
import Abdominals from '../exercisesJSON/AbdominalData';

const AbdominalExercises = () => {

  const ExerciseMap = Abdominals.exercises.map((exercise) => {
    return (
      <div className="exercise-instructions-cointainer">
        <p className="exercise-instruction-name">{exercise.name}</p>

        <div className="exercise-instructions-cointainer-flex">
          <p className="exercise-instruction-text-img1">Starting Position</p>
          <p className="exercise-instruction-text-img2">Ending Position</p>
        </div>
        <div className="exercise-instructions-cointainer-flex">
          <img className="exercise-instruction-img1" src={exercise.images[0]} />
          <img className="exercise-instruction-img2" src={exercise.images[1]} />
        </div>

      </div>
    );
  })
  return (
    <div className="exercises-body-page">
      <div className="exercise-info-container">
        <div className="exercise-description-info">
          <h1 className="exercise-heading-name">Core (Abdominals)</h1>
          <p className="exercise-about-info">The rectus abdominis muscles, commonly referred to as the “abs,” are a pair of long, flat muscles that extend vertically along the entire length of the abdomen adjacent to the umbilicus. Each muscle consists of a string of four fleshy muscular bodies connected by narrow bands of tendon, which give it a lumpy appearance when well defined and tensed. This lumpy appearance results in the rectus abdominis muscles being referred to as the “six-pack.”</p>
        </div>
        <p className="abdominals-exercise-image"></p>
      </div>


      <div className="exercises-loop">
        <div className="exercises-info">
          <p>Listed below are a number of exercises (with images) on how to properly execute a movement Each exercise is meant to target the muscle shown above.</p>
          <p>The exercises are a mixture of HIIT, body weight, weight lifting, and powerlifting movements.</p>
          <p>The starting and ending images are a guide to the proper execution of the movement.</p>
        </div>

        <h3 className="list-of-exercises-heading">Exercises</h3>
        <div className="exercises-warning">
          <p>WARNING! We strongly recommend stretching and warming up, to get blood flowing to the muscle, before executing any exercise.</p>
        </div>
        {ExerciseMap}
      </div>
    </div>
  )
};

export default AbdominalExercises;













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
// console.log(Abdominals);
// console.log('its connected');