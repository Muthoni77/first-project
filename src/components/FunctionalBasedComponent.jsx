// usestate
// useEffect
// useReducer
// useContext
// useRef

import useFetch from "../CustomHook";

function FunctionalBasedComponent() {
  const {data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(data);

  return (
  <div>
  </div>
  );
}

export default FunctionalBasedComponent;
