import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  togglePin,
  toggleArchive,
  deleteAccount,
} from "../../Store/Accounts/accountsSlice.js";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { TiPin } from "react-icons/ti";
import { VscFolderActive } from "react-icons/vsc";

function AccountCard({ account, onEdit }) {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  const totalIncome = account.transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = account.transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

//   return (
//     <div className="border p-4  rounded-lg shadow bg-white relative flex  justify-center items-center">
//       <h2 className="font-semibold text-lg mb-2">{account.name}</h2>

     

//       <div className="flex gap-2 mb-2">
//         {account.isPinned && (
//           <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
//             Pinned
//           </span>
//         )}

//         {account.isArchived ? (
//           <span className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">
//             Archived
//           </span>
//         ) : (
//           <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
//             Active
//           </span>
//         )}
//       </div>
//         <div className="grid grid-cols-3 text-sm mb-2">
//         <div>
//           <p className="text-gray-500">
//             Income{" "}
//             <span className="text-green-600 font-semibold">{totalIncome}</span>
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500">
//             Expense{" "}
//             <span className="text-red-600 font-semibold">{totalExpense}</span>
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500">
//             Balance{" "}
//             <span className="text-blue-600 font-semibold">{balance}</span>
//           </p>
//         </div>
//       </div>
//       <button
//         onClick={(e) => {
//           const rect = e.currentTarget.getBoundingClientRect();
//           const dropdownHeight = 180;
//           const dropdownWidth = 160;

//           let top = rect.bottom;
//           let left = rect.right - dropdownWidth;

//           if (rect.bottom + dropdownHeight > window.innerHeight) {
//             top = rect.top - dropdownHeight;
//           }

//           left = Math.max(10, left);

//           setMenuPosition({ top, left });
//           setOpenMenu(!openMenu);
//         }}
//         className=""
//       >
// <PiDotsThreeOutlineVerticalFill />

//       </button>

//       {openMenu && (
//         <div
//           ref={menuRef}
//           style={{
//             position: "fixed",
//             top: menuPosition.top,
//             left: menuPosition.left,
//           }}
//           className="bg-white border rounded shadow-md w-40 z-50"
//         >
//           <button
//             onClick={() => {
//               onEdit(account);
//               setOpenMenu(false);
//             }}
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Rename
//           </button>

//           <button
//             onClick={() => {
//               dispatch(togglePin(account.id));
//               setOpenMenu(false);
//             }}
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             {account.isPinned ? "Unpin" : "Pin"}
//           </button>

//           <button
//             onClick={() => {
//               dispatch(toggleArchive(account.id));
//               setOpenMenu(false);
//             }}
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             {account.isArchived ? "Remove from Archive" : "Move to Archive"}
//           </button>

//           <button
//             onClick={() => {
//               dispatch(deleteAccount(account.id));
//               setOpenMenu(false);
//             }}
//             className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
//           >
//             Delete
//           </button>
//         </div>
//       )}
//     </div>
//   );








return (
  <div className="relative bg-white rounded-2xl border border-gray-200 
                  shadow-sm hover:shadow-md transition-all duration-300 
                  p-5 flex items-center justify-between">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-4">

      {/* Account Initials Circle */}
      <div className="w-12 h-12 rounded-xl bg-blue-100 
                      flex items-center justify-center 
                      font-semibold text-blue-600">
        {account.name.slice(0, 2).toUpperCase()}
      </div>

      <div>
        <h2 className="font-semibold text-lg text-gray-800">
          {account.name}
        </h2>

        <div className="flex gap-2 mt-1">
          {account.isPinned && (
            <span className="text-xs bg-yellow-100 text-yellow-700 
                             px-3 py-1 rounded-full">
              <TiPin />Pinned
            </span>
          )}

          {account.isArchived ? (
            <span className="text-xs bg-gray-200 text-gray-600 
                             px-3 py-1 rounded-full">
             <VscFolderActive />
 Archived
            </span>
          ) : (
            <span className="text-xs bg-green-100 text-green-700 
                             px-3 py-1 rounded-full">
              ● Active
            </span>
          )}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-10 text-sm">

      <div className="text-center">
        <p className="text-gray-400 uppercase text-xs tracking-wider">
          Income
        </p>
        <p className="text-green-600 font-semibold text-base">
          ${totalIncome.toLocaleString()}
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-400 uppercase text-xs tracking-wider">
          Expense
        </p>
        <p className="text-red-500 font-semibold text-base">
          ${totalExpense.toLocaleString()}
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-400 uppercase text-xs tracking-wider">
          Balance
        </p>
        <p className={`font-semibold text-base ${
          balance < 0 ? "text-red-500" : "text-blue-600"
        }`}>
          ${balance.toLocaleString()}
        </p>
      </div>

      {/* MENU BUTTON */}
      <button
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const dropdownHeight = 180;
          const dropdownWidth = 160;

          let top = rect.bottom;
          let left = rect.right - dropdownWidth;

          if (rect.bottom + dropdownHeight > window.innerHeight) {
            top = rect.top - dropdownHeight;
          }

          left = Math.max(10, left);

          setMenuPosition({ top, left });
          setOpenMenu(!openMenu);
        }}
        className="text-gray-500 hover:text-gray-700 transition"
      >
        <PiDotsThreeOutlineVerticalFill size={20} />
      </button>
    </div>

    
    {openMenu && (
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: menuPosition.top,
          left: menuPosition.left,
        }}
        className="bg-white border border-gray-200 
                   rounded-xl shadow-lg w-44 z-50 py-2"
      >
        <button
          onClick={() => {
            onEdit(account);
            setOpenMenu(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-50"
        >
          Rename
        </button>

        <button
          onClick={() => {
            dispatch(togglePin(account.id));
            setOpenMenu(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-50"
        >
          {account.isPinned ? "Unpin" : "Pin"}
        </button>

        <button
          onClick={() => {
            dispatch(toggleArchive(account.id));
            setOpenMenu(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-50"
        >
          {account.isArchived ? "Remove from Archive" : "Move to Archive"}
        </button>

        <button
          onClick={() => {
            dispatch(deleteAccount(account.id));
            setOpenMenu(false);
          }}
          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-50"
        >
          Delete
        </button>
      </div>
    )}
  </div>
);

}

export default AccountCard;










