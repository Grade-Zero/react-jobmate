import Jobs from '../data/data.js';

const initialState = {
  list: Jobs.list,
  types: Jobs.types,
  industries: Jobs.industries,
  filteredList: [],
  typesSelected: [],
  industriesSelected: [],
  search: null,
  selectedJob: null
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SELECT_JOB":
      return Object.assign({}, state, {
        selectedJob: action.payload
      });

    case "SELECT_JOB_TYPE":

      let index = 0;
      let removed = false;
      for (let type of state.typesSelected) {
        if (type.id === action.payload.id) {
          state.typesSelected.splice(index, 1);
          removed = true;
          break;
        }
        index++;
      }

      if (!removed) {
        return Object.assign({}, state, {
          typesSelected: [
            ...state.typesSelected,
            action.payload
          ]
        });
      } else {
        if (state.typesSelected.length < 1) {
          // No types left, mark all jobs to show
          state.list.map((job) => {
            job.display = true;
            return true;
          });
        } else {
          // At least 1 type left, hide all jobs that belong to the removed type
          state.list.map((job) => {
            if (job.tags[0].id === action.payload.id) {
              job.display = false;
            }
            return true;
          });
        }

        // Set state but don't change anything. Without this the jobList just didn't render if a type was removed (but at least 1 remained)
        return Object.assign({}, state, {
          typesSelected: [
            ...state.typesSelected
          ]
        });
      }

    case "SELECT_INDUSTRY_TYPE":
      return Object.assign({}, state, {
        industriesSelected: [
          ...state.industriesSelected,
          action.payload
        ]
      });

    case "CLEAR_FILTERS":
      state.list.map((job) => {
        job.display = true;
        return true;
      });
      return Object.assign({}, state, {
        typesSelected: [],
        industriesSelected: []
      });

    default:
      return {
        ...state
      };
  }
};
