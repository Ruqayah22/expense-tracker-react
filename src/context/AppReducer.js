// export default (state, action) => {
//   switch(action.type) {
//     case 'DELETE_TRANSACTION':
//       return {
//         ...state,
//         transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
//       }
//     case 'ADD_TRANSACTION':
//       return {
//         ...state,
//         transactions: [action.payload, ...state.transactions]
//       }
//     default:
//       return state;
//   }
// }

// Assign the arrow function to a variable before exporting
const appReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

// Export the named function
export default appReducer;
