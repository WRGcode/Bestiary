export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING": {
        return { ...state, loading: true };
      }
      case "SET_RESULTS": {
        return {
          ...state,
          loading: false,
          //data.nbpages
          results: action.payload.results,
        };
      }


    }
}