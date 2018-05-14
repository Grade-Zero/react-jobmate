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
      action.payload.selected = !action.payload.selected;
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
      let industryIndex = 0;
      let industryRemoved = false;
      action.payload.selected = !action.payload.selected;
      for (let industry of state.industriesSelected) {
        if (industry.id === action.payload.id) {
          state.industriesSelected.splice(industryIndex, 1);
          industryRemoved = true;
          break;
        }
        industryIndex++;
      }

      if (!industryRemoved) {
        return Object.assign({}, state, {
          industriesSelected: [
            ...state.industriesSelected,
            action.payload
          ]
        });
      } else {
        if (state.industriesSelected.length < 1) {
          // No types left, mark all jobs to show
          state.list.map((job) => {
            job.display = true;
            return true;
          });
        } else {
          // At least 1 type left, hide all jobs that belong to the removed type
          state.list.map((job) => {
            if (job.industry.id === action.payload.id) {
              job.display = false;
            }
            return true;
          });
        }

        // Set state but don't change anything. Without this the jobList just didn't render if a type was removed (but at least 1 remained)
        return Object.assign({}, state, {
          industriesSelected: [
            ...state.industriesSelected
          ]
        });
      }

      // return Object.assign({}, state, {
      //   industriesSelected: [
      //     ...state.industriesSelected,
      //     action.payload
      //   ]
      // });

    case "CLEAR_FILTERS":
      state.list.map((job) => {
        job.display = true;
        return true;
      });
      state.industries.map((industry) => {
        industry.selected = false;
        return true;
      });
      state.types.map((type) => {
        type.selected = false;
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
