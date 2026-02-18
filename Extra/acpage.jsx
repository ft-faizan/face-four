// import { useState, useMemo } from "react";
// import { useSelector } from "react-redux";


// import CreateAccountModal from "../Components/Account_Components/CreateAccountModal.jsx";
// import AccountCard from "../Components/Account_Components/AccountCard.jsx";

// import { IoMdAdd } from "react-icons/io";

// function AccountsPage() {
//   const accounts = useSelector((state) => state.accounts.accounts);

//   const [activeTab, setActiveTab] = useState("active");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");
  
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAccount, setEditingAccount] = useState(null);
//   const [filterOpen, setFilterOpen] = useState(false);

//   // Filter + Sort Logic
//   const filteredAccounts = useMemo(() => {
//     let result = [...accounts];

//     // 1️⃣ Filter by tab
//     result = result.filter((acc) =>
//       activeTab === "active" ? !acc.isArchived : acc.isArchived,
//     );

//     // 2️⃣ Search filter
//     if (searchQuery.trim() !== "") {
//       result = result.filter((acc) =>
//         acc.nameLower.includes(searchQuery.toLowerCase().trim()),
//       );
//     }

//     // 3️⃣ Sort logic
//     if (sortOption === "nameAsc") {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortOption === "nameDesc") {
//       result.sort((a, b) => b.name.localeCompare(a.name));
//     } else {
//       // default: newest first
//       result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     }

//     // 4️⃣ Pin priority (always top)
//     result.sort((a, b) => b.isPinned - a.isPinned);

//     return result;
//   }, [accounts, activeTab, searchQuery, sortOption]);

//   console.log("All Accounts:", accounts);
//   console.log("Filtered Accounts:", filteredAccounts);

//   // Count for tabs
//   const activeCount = accounts.filter((acc) => !acc.isArchived).length;
//   const archivedCount = accounts.filter((acc) => acc.isArchived).length;

//   return (
//     <>
//       <div
//         className=" w-full
//          min-h-full
//          bg-white
//          dark:bg-[#333334]
//          p-6
//          rounded-b-lg"
//       >
//         <h1 className="text-2xl font-bold mb-4">Accounts Page</h1>
//         <div className="flex gap-6 border-b mb-4">
//           <button
//             className={`pb-2 ${
//               activeTab === "active"
//                 ? "border-b-2 border-blue-500 font-semibold"
//                 : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("active")}
//           >
//             Accounts ({activeCount})
//           </button>

//           <button
//             className={`pb-2 ${
//               activeTab === "archived"
//                 ? "border-b-2 border-blue-500 font-semibold"
//                 : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("archived")}
//           >
//             Archived ({archivedCount})
//           </button>
//         </div>
        
//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Search account..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="border p-2 rounded w-full"
//           />

//           <button
//             onClick={() => setFilterOpen(!filterOpen)}
//             className="px-3 py-2 bg-gray-200 rounded"
//           >
//             ☰
//           </button>
//         </div>
//          {filterOpen && (
//   <div className="absolute right-6 mt-2 bg-white border rounded shadow-md w-48 z-50">
//     <button
//       onClick={() => {
//         setSortOption("date");
//         setFilterOpen(false);
//       }}
//       className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//     >
//       Date Created (Newest)
//     </button>

//     <button
//       onClick={() => {
//         setSortOption("nameAsc");
//         setFilterOpen(false);
//       }}
//       className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//     >
//       Name Ascending
//     </button>

//     <button
//       onClick={() => {
//         setSortOption("nameDesc");
//         setFilterOpen(false);
//       }}
//       className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//     >
//       Name Descending
//     </button>
//   </div>
// )}

//         {filteredAccounts.length === 0 ? (
//           <div className="text-center text-gray-500 mt-10">
//             {searchQuery
//               ? "No accounts found."
//               : activeTab === "active"
//                 ? "No accounts created yet."
//                 : "No archived accounts."}
//           </div>
//         ) : (
//           <div className="space-y-3">
//             {filteredAccounts.map((acc) => (
//               <AccountCard
//                 key={acc.id}
//                 account={acc}
//                 onEdit={(account) => {
//                   setEditingAccount(account);
//                   setIsModalOpen(true);
//                 }}
//               />
//             ))}
//           </div>
//         )}

//         <button
//           onClick={() => {
//             setEditingAccount(null);
//             setIsModalOpen(true);
//           }}
//           className="fixed bottom-25 right-3 md:bottom-6  md:right-6 bg-blue-600 text-white  md:w-15 md:h-15 w-10 h-10 rounded-full text-2xl shadow-lg flex items-center justify-center"
//         >
//           <IoMdAdd />
//         </button>
//       </div>
//       <CreateAccountModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         editingAccount={editingAccount}
//       />
//     </>
//   );
// }

// export default AccountsPage;

