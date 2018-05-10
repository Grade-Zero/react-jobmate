export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_JOB_TYPE":
      return action.payload;
      break;

    case "SELECT_INDUSTRY":
      return action.payload;
      break;

    default:
      return state;
      break;
  }

  return state;
}
