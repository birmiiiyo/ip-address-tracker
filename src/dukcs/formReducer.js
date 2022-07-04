const defaultState = {
  ip: '',
};

const NEW_IP = 'NEW_IP';

const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_IP:
      return { ...state, ip: action.payload };
    default:
      return state;
  }
};

export default formReducer;
