// usestate
// useEffect
// useReducer
// useContext
// useRef

import React, { useReducer } from 'react'

const initialState = {
  flag: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      console.log(state, action);

      return {
        ...state,
        flag: !state.flag
      };

    default:
      return state
  }
}
function FunctionalBasedComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'TOGGLE_BUTTON' })}>Toggle </button>
    </div>
  );
}

export default FunctionalBasedComponent