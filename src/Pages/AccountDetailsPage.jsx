import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function AccountDetailsPage() {
  const { id } = useParams();

  const account = useSelector((state) =>
    state.accounts.accounts.find((acc) => acc.id === id)
  );

  if (!account) {
    return <div className="p-6">Account not found</div>;
  }

  return (
    <div className=" w-full
         min-h-full
         bg-white
         dark:bg-[#333334]
         p-5
         rounded-b-lg  ">
      <h1 className="text-2xl font-bold mb-4">{account.name}</h1>

      {/* <p>Total Transactions: {account.transactions.length}</p>
      <p>Archived: {account.isArchived ? "Yes" : "No"}</p>
      <p>Pinned: {account.isPinned ? "Yes" : "No"}</p> */}
    </div>
  );
}

export default AccountDetailsPage;



// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// import TransactionModal from "../Components/AccountDetails_Components/TransactionModal.jsx";

// import { IoMdAdd } from "react-icons/io";

// function AccountDetailsPage() {
//   const { id } = useParams();

//   const account = useSelector((state) =>
//     state.accounts.accounts.find((acc) => acc.id === id)
//   );

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingTransaction, setEditingTransaction] = useState(null);

//   if (!account) {
//     return <div className="p-6">Account not found</div>;
//   }

//   const transactions = account.transactions;

//   // 🔹 Summary calculation
//   const totalIncome = transactions
//     .filter((t) => t.type === "income")
//     .reduce((sum, t) => sum + t.amount, 0);

//   const totalExpense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((sum, t) => sum + t.amount, 0);

//   const balance = totalIncome - totalExpense;

//   return (
//     <div className="p-6 relative min-h-screen bg-white dark:bg-[#333334]">

//       <h1 className="text-2xl font-bold mb-6">
//         {account.name} Transactions
//       </h1>

//       {/* 🔹 Transaction List */}
//       {transactions.length === 0 ? (
//         <p className="text-gray-500">No transactions yet.</p>
//       ) : (
//         <div className="space-y-3">
//           {transactions.map((transaction) => (
//             <div
//               key={transaction.id}
//               className="border p-4 rounded shadow bg-white"
//             >
//               <div className="flex justify-between">
//                 <div>
//                   <p className="font-semibold">
//                     {transaction.title}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {new Date(transaction.date).toLocaleString()}
//                   </p>
//                 </div>

//                 <p
//                   className={`font-semibold ${
//                     transaction.type === "income"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {transaction.type === "income" ? "+" : "-"}
//                   {transaction.amount}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 🔹 Summary Bar */}
//       <div className="mt-10 border-t pt-4 flex justify-between text-lg font-semibold">
//         <span className="text-green-600">
//           Income: {totalIncome}
//         </span>

//         <span className="text-red-600">
//           Expense: {totalExpense}
//         </span>

//         <span className="text-blue-600">
//           Balance: {balance}
//         </span>
//       </div>

//       {/* 🔹 Floating Add Button */}
//       <button
//         onClick={() => {
//           setEditingTransaction(null);
//           setIsModalOpen(true);
//         }}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full text-2xl shadow-lg flex items-center justify-center"
//       >
//         <IoMdAdd />
//       </button>

//       {/* 🔹 Transaction Modal */}
//       <TransactionModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         accountId={account.id}
//         editingTransaction={editingTransaction}
//       />
//     </div>
//   );
// }

// export default AccountDetailsPage;
