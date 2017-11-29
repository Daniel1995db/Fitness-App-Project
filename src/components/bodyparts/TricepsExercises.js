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

const TricepExercises = () => {
  return Triceps.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
}

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