export const initialState = {
  value: "",
  approved: false,
  denied: false,
  dataErr: false,
  loading: false,
};

export function reducer(state, action) {
  if (action.type === "START") {
    return { ...state, approved: false, denied: false, dataErr: false };
  } else if (action.type === "APPROVED") {
    return {
      ...state,
      approved: true,
      denied: false,
      loading: false,
    };
  } else if (action.type === "DATAERR") {
    return {
      ...state,
      approved: false,
      denied: false,
      dataErr: true,
      loading: false,
    };
  } else if (action.type === "DENIED") {
    return {
      ...state,
      approved: false,
      denied: true,
      loading: false,
    };
  } else if (action.type === "ONCHANGE") {
    return {
      ...state,
      value: action.payload,
      approved: false,
      denied: false,
      dataErr: false,
      loading: false,
    };
  } else if (action.type === "ONCLICK") {
    return {
      ...state,
      loading: true,
    };
  } else {
    return { ...state };
  }
}
