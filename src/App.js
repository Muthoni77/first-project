import { createContext } from 'react';
import './App.css';
import FunctionalBasedComponent from './components/FunctionalBasedComponent';
import ErrorBoundaries from './ErrorBoundaries';
import Login from './pages/login';
export const Context = createContext("light");
console.log(Context);

function App() {
  return (
    //  <Context.Provider value='green'>
    //    <div className="App">

    //   { <FunctionalBasedComponent/> }
    //   {/* <Login/> */}

    //       </div>
    //  </Context.Provider>
    <ErrorBoundaries>
      <FunctionalBasedComponent />
    </ErrorBoundaries>
  );
}

export default App;
