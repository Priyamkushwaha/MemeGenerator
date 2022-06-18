import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// event listener     
// prop used to send information to componenets
// state used to monitor the changes in information in componenets
// state 
// const [result,setresult]=React.useState()
// dont try to change result value directly
//  in setresult if u dont need previous value of result then just put value you want 
//  setresult(<value>)
//  and if u need previous value then use callback function which return updated value but in any case dont change result value directly 
// state variable can be object etc....
// const [object,setobject] = React.useState({
//   name: "priyam",
//   age: 22
// })
// setobject(prevObject=> ({
//   ...prevObject,
//   age:24
// }))
//you can send state value as prop to componenets
//  whenever the state vales changes then that component where state is present rendered and the child component depened on that state value also rendered
// setting state from child component
// how? firstly define the event listner to parent component then pass this event listner to child component through props 
// how data follows in react?
// data flow from parent to child components only 
// when we make new state by initializing incoming props value which is also known as derived state ,is not preferred to use
// conditional rendering 
// && if left side value is truthy then right side will execute and if falsy then it stopped there
//  ternary operator <value>? <anything1> : <anything2>
//  use conitional rendering when u want to show something or not
//  use ternary operator when u have two option 
// if you have more than 2 option then go for if else or switch statement
// form 
// initially in vanilla js forms data stored right before the submission
// but in react we keep track of forms element at every moment then after clicking submit buttom we prevent it to refresh by event listening then submit data to api 
//  controlled input/components
// useEffect()
// React.useEffect(()=>{
//     //SOMETHING HERE
    //   return cleanUpFunctionToUndoChamgesMadeByEffect()
// },[])
// DONT USE ASYNC AND AWAIT IN EFFECT COZ ASYNC CHANGE FUNCTION AS PROMISE AND WE WONT WE ABLE TO USE CLEANUP FUNCTION 
// TO avoid memory leak use cleanup functiom 