import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import './firebase/firebase';



ReactDOM.render(<AppRouter />, document.getElementById('app'));
















// import configureStore from './store/configureStore';
// import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpense from './selectors/expenses';

// const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}));
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500}));


// const state = store.getState();
// const VisibleExpense = getVisibleExpense(state.expenses, state.filters);
// console.log(VisibleExpense);

// const jsx = (
//   <Provider store={store} >
//     <AppRouter />
//   </Provider>
// );

