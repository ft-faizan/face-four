// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addAccount,
//   renameAccount,
//   toggleArchive,
//   togglePin,
// } from "../../Store/Accounts/accountsSlice.js";

// function CreateAccountModal({ isOpen, onClose, editingAccount }) {
//   const dispatch = useDispatch();
//   const accounts = useSelector((state) => state.accounts.accounts);

//   const [name, setName] = useState("");
//   const [isArchived, setIsArchived] = useState(false);
//   const [isPinned, setIsPinned] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (editingAccount) {
//       setName(editingAccount.name);
//       setIsArchived(editingAccount.isArchived);
//       setIsPinned(editingAccount.isPinned);
//     } else {
//       setName("");
//       setIsArchived(false);
//       setIsPinned(false);
//     }
//     setError("");
//   }, [editingAccount]);

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     const trimmed = name.trim();

//     if (!trimmed) {
//       setError("Account name is required");
//       return;
//     }

//     const exists = accounts.some(
//       (acc) =>
//         acc.nameLower === trimmed.toLowerCase() &&
//         (!editingAccount || acc.id !== editingAccount.id),
//     );

//     if (exists) {
//       setError("Account already exists");
//       return;
//     }

//     if (editingAccount) {
//       dispatch(
//         renameAccount({
//           id: editingAccount.id,
//           newName: trimmed,
//         }),
//       );

//       if (editingAccount.isArchived !== isArchived) {
//         dispatch(toggleArchive(editingAccount.id));
//       }

//       if (editingAccount.isPinned !== isPinned) {
//         dispatch(togglePin(editingAccount.id));
//       }
//     } else {
//       dispatch(addAccount(trimmed, isArchived, isPinned));
//     }

    
//     setName("");
//     setIsArchived(false);
//     setIsPinned(false);
//     setError("");

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[1000]">
//       <div className="bg-white p-6 rounded shadow w-80 relative z-50">
//         <h2 className="text-xl font-bold mb-4">
//           {editingAccount ? "Edit Account" : "Create Account"}
//         </h2>

//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border w-full p-2 rounded mb-3"
//           placeholder="Enter account name"
//         />

//         <div className="flex justify-between items-center mb-2">
//           <span>Archived</span>
//           <input
//             type="checkbox"
//             checked={isArchived}
//             onChange={() => setIsArchived(!isArchived)}
//           />
//         </div>

//         <div className="flex justify-between items-center mb-3">
//           <span>Pinned</span>
//           <input
//             type="checkbox"
//             checked={isPinned}
//             onChange={() => setIsPinned(!isPinned)}
//           />
//         </div>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <div className="flex justify-end gap-2">
//           <button
//             onClick={onClose}
//             className="px-3 py-1 bg-gray-400 text-white rounded"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="px-3 py-1 bg-blue-600 text-white rounded"
//           >
//             {editingAccount ? "Update" : "Create"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateAccountModal;