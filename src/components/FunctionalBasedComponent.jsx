// usestate
// useEffect
// useReducer
// useContext
// useRef

import React, { useContext }  from 'react'
import { Context } from '../App';

function FunctionalBasedComponent() {
  const getValueFromContext = useContext(Context)
  console.log(getValueFromContext);
    
  return (
    <div>
     <button style={{backgroundColor: getValueFromContext}}>Click</button>
    </div>
  );
}

export default FunctionalBasedComponent