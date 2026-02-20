// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addTransaction, editTransaction } from "../../Store/Accounts/accountsSlice";
// import DateTimePicker from "./DateTimePicker";

// function TransactionModal({
//   isOpen,
//   onClose,
//   accountId,
//   editingTransaction,
// }) {
//   const dispatch = useDispatch();
// const [date, setDate] = useState(new Date());
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState("income");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (editingTransaction) {
//       setTitle(editingTransaction.title);
//       setAmount(editingTransaction.amount);
//       setType(editingTransaction.type);
//       setDate(new Date(editingTransaction.date));
//     } else {
//       setTitle("");
//       setAmount("");
//       setType("income");
//       setDate(new Date());
//     }
//     setError("");
//   }, [editingTransaction]);

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     if (!title.trim() || !amount || !date) {
//       setError("All fields are required");
//       return;
//     }

//     if (editingTransaction) {
//       dispatch(
//         editTransaction({
//           accountId,
//           transactionId: editingTransaction.id,
// updatedData: { title, amount: Number(amount), type, date },
//         })
//       );
//     } else {
//       dispatch(
//         addTransaction(accountId, {
//           title,
//          amount: Number(amount),
//           type,
//           date,
//         })
//       );
//     }
//     setTitle("");
// setAmount("");
// setType("income");
// setDate(new Date());
// setError("");

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow w-full h-screen">
//         <h2 className="text-xl font-bold mb-4">
//           {editingTransaction ? "Edit Transaction" : "Add Transaction"}
//         </h2>

        
//         <input
//           type="text"
//           placeholder="Transaction name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="border w-full p-2 rounded mb-3"
//         />

       
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="border w-full p-2 rounded mb-3"
//         />

       
//         <div className="mb-3">
//   <DateTimePicker value={date} onChange={setDate} />
// </div>


//         <div className="flex gap-2 mb-3">
//           <button
//             onClick={() => setType("income")}
//             className={`flex-1 py-2 rounded ${
//               type === "income"
//                 ? "bg-white-500 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             + Income
//           </button>

//           <button
//             onClick={() => setType("expense")}
//             className={`flex-1 py-2 rounded ${
//               type === "expense"
//                 ? "bg-white-500 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             - Expense
//           </button>
//         </div>

//         {error && (
//           <p className="text-red-500 text-sm mb-3">{error}</p>
//         )}

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
//             {editingTransaction ? "Update" : "Add"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TransactionModal;


import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, editTransaction } from "../../Store/Accounts/accountsSlice";
import DateTimePicker from "./DateTimePicker";
import { X, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

function TransactionModal({ isOpen, onClose, accountId, editingTransaction }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title);
      setAmount(editingTransaction.amount);
      setType(editingTransaction.type);
      setDate(new Date(editingTransaction.date));
    } else {
      setTitle("");
      setAmount("");
      setType("income");
      setDate(new Date());
    }
    setError("");
  }, [editingTransaction]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim() || !amount || !date) {
      setError("All fields are required");
      return;
    }

    if (editingTransaction) {
      dispatch(
        editTransaction({
          accountId,
          transactionId: editingTransaction.id,
          updatedData: { title, amount: Number(amount), type, date },
        })
      );
    } else {
      dispatch(
        addTransaction(accountId, {
          title,
          amount: Number(amount),
          type,
          date,
        })
      );
    }
    setTitle("");
    setAmount("");
    setType("income");
    setDate(new Date());
    setError("");
    onClose();
  };

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Card */}
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden">

        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2 sm:pt-6">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                type === "income" ? "bg-emerald-400" : "bg-red-400"
              }`}
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              {editingTransaction ? "Edit Transaction" : "New Transaction"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 flex flex-col gap-4 pb-8 sm:pb-6">

          {/* Transaction Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Transaction Name
            </label>
            <input
              type="text"
              placeholder="e.g. Grocery shopping"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 transition-all"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400 pointer-events-none select-none">
                $
              </span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 transition-all"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Date & Time
            </label>
            {/*
              Wrap DateTimePicker — its internal shadcn Button + Input will
              inherit rounded / border styles from shadcn config.
              The flex-wrap ensures the two controls stack on very small screens.
            */}
            <div className="flex flex-wrap gap-2">
              <DateTimePicker value={date} onChange={setDate} />
            </div>
          </div>

          {/* Type Toggle */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Type
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setType("income")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  type === "income"
                    ? "bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-100"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <TrendingUp size={15} />
                Income
              </button>
              <button
                onClick={() => setType("expense")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  type === "expense"
                    ? "bg-white text-red-500 shadow-sm ring-1 ring-red-100"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <TrendingDown size={15} />
                Expense
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-red-500 text-sm font-medium">
              <AlertCircle size={15} className="shrink-0" />
              {error}
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-gray-100 -mx-6" />

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white text-sm font-semibold shadow-md shadow-violet-200 hover:shadow-violet-300 transition-all active:scale-[0.98]"
            >
              {editingTransaction ? "Save Changes" : "Add Transaction"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TransactionModal;