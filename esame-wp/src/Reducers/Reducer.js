

export default function Reducer(state=[],action) {
    console.log(action)
  switch (action.type){
    case "GET_POSTS":
        return action.payload
    default:
        break;
  }
  return state
}
