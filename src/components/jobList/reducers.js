import JobData from "../data.js";

export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_JOB":
      return action.payload;
      break;

    default:
      return state;
      break;
  }

  return state;
}
