import React,{useReducer} from 'react';
import './App.css';
import ClassTimer from './components/ClassTimer';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
import ParentComponent from './components/useCallback/ParentComponent';
// import DataFetchingOne from './components/DataFetchingOne';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ClassCounter from './components/ClassCounter';
// import ClassCounterOne from './components/ClassCounterOne';
// import ClassMouse from './components/ClassMouse';
// import ComponentC from './components/ComponentC';
// import ComponentC2 from './components/ComponentC2';
// import CounterOne from './components/CounterOne';
// import CounterThree from './components/CounterThree';
// import CounterTwo from './components/CounterTwo';
// import DataFetching from './components/DataFetching';
// import HookCounnterThree from './components/HookCounnterThree';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import MouseContainer from './components/MouseContainer';


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState=0
// const reducer =(state,action) =>  {
//  switch(action) {
//      case 'increment':
//          return state + 1
//      case 'decrement':
//          return state-1
//      case 'reset':
//          return initialState
//      default:
//          return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    // {/* first we create counter using usereducer we declared initial state, we pass as a parameter to reducer */}
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounnterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne />/ */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Mahesh'}>  */}
      {/* <ChannelContext.Provider value={'React-Hook'}> */}
      {/* <ComponentC /> */}
      {/* </ChannelContext.Provider> */}
      {/* </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC2 /> */}
     {/* <DataFetchingOne /> */}
     {/* <DataFetchingTwo /> */}
     {/* <ParentComponent /> */}
     {/* <Counter /> */}
     {/* <FocusInput /> */}
     <ClassTimer />
     <HookTimer />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
