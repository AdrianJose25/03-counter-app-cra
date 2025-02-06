export const initialState = {
  value: "",
  approved: false,
  denied: false,
  dataErr: false,
  loading: false,
};

// export function reducer(state, action) {
//   if (action.type === "START") {
//     return { ...state, approved: false, denied: false, dataErr: false };
//   } else if (action.type === "APPROVED") {
//     return {
//       ...state,
//       approved: true,
//       denied: false,
//       loading: false,
//     };
//   } else if (action.type === "DATAERR") {
//     return {
//       ...state,
//       approved: false,
//       denied: false,
//       dataErr: true,
//       loading: false,
//     };
//   } else if (action.type === "DENIED") {
//     return {
//       ...state,
//       approved: false,
//       denied: true,
//       loading: false,
//     };
//   } else if (action.type === "ONCHANGE") {
//     return {
//       ...state,
//       value: action.payload,
//       approved: false,
//       denied: false,
//       dataErr: false,
//       loading: false,
//     };
//   } else if (action.type === "ONCLICK") {
//     return {
//       ...state,
//       loading: true,
//     };
//   } else {
//     return { ...state };
//   }
// }

const objectReducer = (state, payload) => ({
  START: { ...state, approved: false, denied: false, dataErr: false },
  APPROVED: {
    ...state,
    approved: true,
    denied: false,
    loading: false,
  },
  DATAERR: {
    ...state,
    approved: false,
    denied: false,
    dataErr: true,
    loading: false,
  },
  DENIED: {
    ...state,
    approved: false,
    denied: true,
    loading: false,
  },
  ONCHANGE: {
    ...state,
    value: payload,
    approved: false,
    denied: false,
    dataErr: false,
    loading: false,
  },
  ONCLICK: {
    ...state,
    loading: true,
  },
});

export const reducer = (state, action) => {
  if (objectReducer(state)[action.type]) {
    return objectReducer(state, action.payload)[action.type];
  }
};
