export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING": {
        return { ...state, loading: true };
      }
      case "SET_RESULTS": {
        return {
          ...state,
          loading: false,
          
          results: action.payload,
        };
      }
      case "SET_MONSTER":{
        return{
          ...state,
          loading:false,
          results:action.payload,
        }
      }
      case "SET_QUERY" :{
        return {
          ...state,  
          query: action.payload
        }

      }
      default: 
      console.error(action.type + " does not exist")


    }
}