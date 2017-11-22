import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ALL ACTIONS
// --------------
// // ADD_EXCERCISE_TO_WORKOUT
// const addExerciseToWorkout = ({description = ''} = {}) => ({
//   type: 'ADD_EXCERCISE_TO_WORKOUT',
//   exercise: {
//     id: uuid(),
//     description
//   }
// });
// // REMOVE_EXERCISE_FROM_WORKOUT
// const removeExerciseFromWorkout = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE_FROM_WORKOUT',
//   id 
// });
// // MARK_EXERCISE_AS_FAVORITE
// const markExerciseAsFavorite = ({ id } = {}) => ({
//   type: 'MARK_EXERCISE_AS_FAVORITE',
//   id
// });

// CREATE_WORKOUT
const createWorkout = ({description = '', exercises = [], createdAt = 0, note = ''} = {}) => ({
  type: 'CREATE_WORKOUT',
  workout: {
    id: uuid(), //exercise_id -- This is Part of a payload and this id and can exercise id, it doesnt have to be a unique id
    description,
    exercises,
    createdAt,
    note
  }
});
// EDIT_WORKOUT

// REMOVE_WORKOUT

// RANDOMIZE_A_WORKOUT (grabs one exercise per body part)
// MARK_WORKOUT_AS_FAVORITE


// SET_TEXT_FILTER (for exercise searching)
// SORT_BY_DATE 
// SORT_BY_COMPLETED 
// SET_START_DATE
// SET_END_DATE
// SORT_BY_EXERCISE
// SORT_BY_BODYPART
// MARK_AS_COMPLETE

// -------------------------------------------------------------------------------
// // Exercise reducer ------------------
// const exercisesReducerDefaultState = {};
// const exercisesReducer = (state = exercisesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXERCISE_TO_WORKOUT':
//       return {
//        ...state,
//        action.workout
//       }
//     default: 
//     return state;
//   }
// };
// Workouts reducer-------------------
const workoutsReducerDefaultState = {};
const workoutsReducer = (state = workoutsReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_WORKOUT':
      return {
        ...state,
        action: action.workout
      };
    default: 
    return state;
  }
};
// Filters reducer--------------------
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
    return state;
  }
};
// ------------------------------------------------------------------------------------------
// Store creation
const store = createStore(
  combineReducers({
    workouts: workoutsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const workoutOne = store.dispatch(createWorkout({ description: 'Chest Workout' }));
const workoutTwo = store.dispatch(createWorkout({ description: 'Back Workout' }));



// get visible workouts


const demoState = {
  exercises: {
    id: 'q12',
    description: 'Bench Press'
  },
  workouts: {
    description: 'Chest',
    exercises: ['q1', 'q12', 'swd23d'],
    createdAt: 0,
    note: 'This workout was light'
  },
  filters: {
    text: 'chest',
    sortBy: 'date', //completed, exercise, or bodypart
    startDate: undefined,
    endDate: undefined
  }
};


