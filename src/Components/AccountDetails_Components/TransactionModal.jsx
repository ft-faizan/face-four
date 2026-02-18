import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, editTransaction } from "../../Store/Accounts/accountsSlice";
import DateTimePicker from "./DateTimePicker";

function TransactionModal({
  isOpen,
  onClose,
  accountId,
  editingTransaction,
}) {
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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">
          {editingTransaction ? "Edit Transaction" : "Add Transaction"}
        </h2>

        
        <input
          type="text"
          placeholder="Transaction name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />

       
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />

       
        <div className="mb-3">
  <DateTimePicker value={date} onChange={setDate} />
</div>


        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setType("income")}
            className={`flex-1 py-2 rounded ${
              type === "income"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            + Income
          </button>

          <button
            onClick={() => setType("expense")}
            className={`flex-1 py-2 rounded ${
              type === "expense"
                ? "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
          >
            - Expense
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            {editingTransaction ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionModal;
