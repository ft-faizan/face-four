import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../Store/Accounts/accountsSlice.js";

function TransactionActions({
  transaction,
  accountId,
  onEdit,
}) {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();

          const rect = e.currentTarget.getBoundingClientRect();
          const dropdownHeight = 120;
          const dropdownWidth = 140;

          let top = rect.bottom;
          let left = rect.right - dropdownWidth;

          if (rect.bottom + dropdownHeight > window.innerHeight) {
            top = rect.top - dropdownHeight;
          }

          left = Math.max(10, left);

          setMenuPosition({ top, left });
          setOpenMenu(!openMenu);
        }}
        className="text-xl"
      >
        ⋮
      </button>

      {openMenu && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: menuPosition.top,
            left: menuPosition.left,
          }}
          className="bg-white border rounded shadow-md w-36 z-50"
        >
          <button
            onClick={() => {
              onEdit(transaction);
              setOpenMenu(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Edit
          </button>

          <button
            onClick={() => {
              dispatch(
                deleteTransaction({
                  accountId,
                  transactionId: transaction.id,
                })
              );
              setOpenMenu(false);
            }}
            className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default TransactionActions;
