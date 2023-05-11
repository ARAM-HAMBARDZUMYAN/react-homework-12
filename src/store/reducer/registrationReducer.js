const initialState = {
    registrationData: null,
   
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_SUCCESS":
        return {
          ...state,
          registrationData: action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  