export function ceramicReducer(state, action) {
  switch (action.type) {
    case "CERAMIC_REQUEST":
      return { ...state, loading: true };
    case "CERAMIC_SUCCESS":
      return { ...state, loading: false, ceramic: action.payload };
    case "CERAMIC_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "CERAMIC_CREATED":
      return { ...state, loading: false, created: true };
    case "CERAMIC_RESET":
      return { ...state, created: false, error: null };
    default:
      return state;
  }
}
