import { formSubmit } from './action';

const initialState = {
  name: "",
  email: "",
  password: "",
  isProfileLogin: false,
  };
  
  export  const userProfileDetails = (state = initialState, action) => {
    switch (action.type) {
      case formSubmit:
        return {
          ...state,
          count: state.count + 1
        };
      default:
        return state;
    }
  };
  