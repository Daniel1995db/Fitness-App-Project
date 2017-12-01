import React from 'react';
// import ReactDOM from 'react-dom';
import Triceps from '../exercisesJSON/TricepsData';

// class TricepsRender extends React.Component {
//   render () {
//     return this.props.data.triceps.map((tricep) => {
//       return (
//         <div>
//           <p>{tricep.name}</p>
//           <p>Starting Position</p><img src={tricep.images[0]} />
//           <p>Ending Position</p><img src={tricep.images[1]} />
//         </div>
//       )
//     });
//   }
// };
// ReactDOM.render(<TricepsRender data={Triceps} />, document.getElementById('app'));


// const TricepExercises = (props) => {
//   return props.data.exercises.map((exercise) => {
//     return (
//       <div>
//         <p>{exercise.name}</p>
//         <p>Starting Position</p><img src={exercise.images[0]} />
//         <p>Ending Position</p><img src={exercise.images[1]} />
//       </div>
//     )
//   });
// };

// const TricepExercises = () => {
//   return Triceps.exercises.map((exercise) => {
//     return (
//       <div>
//         <p>{exercise.name}</p>
//         <p>Starting Position</p><img src={exercise.images[0]} />
//         <p>Ending Position</p><img src={exercise.images[1]} />
//       </div>
//     )
//   });
// }

const TricepExercises = () => {

  const ExerciseMap = Triceps.exercises.map((exercise) => {
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
          <h1 className="exercise-heading-name">Arms (triceps)</h1>
          <p className="exercise-about-info">The long head of the triceps brachii muscle is a muscle of the back of the arm, originating from the scapula and shoulder to insert at the elbow. The triceps brachii has three heads (connective immovable muscle) and is the only muscle on the back of the upper arm. It connects the humerus (upper arm bone) and the scapula (shoulder blade) to the ulna (longest of the forearm bones) and is the primary extensor of the elbow.</p>
        </div>
        <p className="triceps-exercise-image"></p>
      </div>

      <div className="exercises-loop">
        <div className="exercises-info">
          <p>Listen below are a number of exercises (with images) on how to properly execute a movement Each exercise is meant to target the muscle shown above.</p>
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

export default TricepExercises;




// console.log(Triceps.triceps.map( (name) => {
//   return (
//     name.name
//   )
// }));
// console.log('Exercise: ' + Triceps.triceps[0].name);
// console.log('Starting Position: ' + Triceps.triceps[0].images[0]);
// console.log('Ending Position: ' + Triceps.triceps[0].images[1]);
// console.log('Equipment Needed: ' + Triceps.triceps[0].equipment);
// console.log(Triceps.triceps[]);


