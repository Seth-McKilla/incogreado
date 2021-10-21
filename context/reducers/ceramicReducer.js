export function ceramicReducer(state, action) {
  switch (action.type) {
    case "CERAMIC_REQUEST":
      return { ...state, loading: true };
    case "CERAMIC_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "CERAMIC_RESET":
      return { ...state, created: false, error: null };

    case "CONNECT_SUCCESS":
      return { ...state, loading: false, keyDID: action.payload };

    case "REVIEW_CREATE_SUCCESS":
      return {
        ...state,
        loading: false,
        created: true,
        reviewsList: state.reviewsList.concat(action.payload),
      };

    default:
      return state;
  }
}
