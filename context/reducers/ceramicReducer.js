export function ceramicReducer(_, action) {
  switch (action.type) {
    case "CERAMIC_REQUEST":
      return { loading: true, ceramic: null, error: null };
    case "CERAMIC_SUCCESS":
      return { loading: false, ceramic: action.payload, error: null };
    case "CERAMIC_FAIL":
      return { loading: false, ceramic: null, error: action.payload };
    default:
      return state;
  }
}
