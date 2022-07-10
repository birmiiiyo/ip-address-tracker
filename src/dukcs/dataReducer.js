const defaultState = {
  data: {},
};

const GET_DATA = 'GET_DATA';
const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
