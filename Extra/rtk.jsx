// import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { loadAccounts, saveAccounts } from "../../Utils/localStorage.js";

// const initialState = {
//   accounts: loadAccounts(),
// };

// const accountsSlice = createSlice({
//   name: "accounts",
//   initialState,
//   reducers: {
//     addAccount: {
//       reducer(state, action) {
//         state.accounts.push(action.payload);
//         saveAccounts(state.accounts);
//       },
//       prepare(name, isArchived = false, isPinned = false) {
//         return {
//           payload: {
//             id: nanoid(),
//             name: name.trim(),
//             nameLower: name.trim().toLowerCase(),
//             isArchived,
//             isPinned,
//             createdAt: new Date().toISOString(),
//             transactions: [],
//           },
//         };
//       },
//     },

//     deleteAccount(state, action) {
//       state.accounts = state.accounts.filter(
//         (acc) => acc.id !== action.payload
//       );
//       saveAccounts(state.accounts);
//     },

//     toggleArchive(state, action) {
//       const account = state.accounts.find(
//         (acc) => acc.id === action.payload
//       );
//       if (account) {
//         account.isArchived = !account.isArchived;
//         saveAccounts(state.accounts);
//       }
//     },

//     togglePin(state, action) {
//       const account = state.accounts.find(
//         (acc) => acc.id === action.payload
//       );
//       if (account) {
//         account.isPinned = !account.isPinned;
//         saveAccounts(state.accounts);
//       }
//     },

//     renameAccount(state, action) {
//       const { id, newName } = action.payload;
//       const account = state.accounts.find((acc) => acc.id === id);
//       if (account) {
//         account.name = newName.trim();
//         account.nameLower = newName.trim().toLowerCase();
//         saveAccounts(state.accounts);
//       }
//     },
//   },
// });

// export const {
//   addAccount,
//   deleteAccount,
//   toggleArchive,
//   togglePin,
//   renameAccount,
// } = accountsSlice.actions;

// export default accountsSlice.reducer;

