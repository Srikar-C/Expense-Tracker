import { useState } from "react";
import app from "../App.module.css";

export default function Expense({ list, onUpdateSpent }) {
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit() {
    if (amount && cat) {
      onUpdateSpent(cat, amount);
      setAmount("");
      setCat("");
      setDate("");
      setNote("");
    } else {
      alert("Please enter an amount and select a category.");
    }
  }

  return (
    <div className="flex flex-col bg-[#B0DF2F] w-fit px-4 py-3 gap-4">
      <div className="amount flex flex-row justify-between items-center">
        <h4 className="w-[100px]">Amount</h4>
        <p className="w-[40px]">:</p>
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="How much?"
          className={`${app.place} w-[200px] float-right bg-[#93B925] border-2 border-[#f8f7f7] rounded-md outline-none p-1`}
        />
      </div>
      <div className="cat flex flex-row justify-between items-center">
        <h4 className="w-[100px]">Category</h4>
        <p className="w-[40px">:</p>
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className={`${app.place} w-[200px] float-right bg-[#93B925] border-2 border-[#f8f7f7] rounded-md outline-none p-1`}
        >
          <option value="">Select Category</option>
          {list?.map((item, index) => {
            return (
              <option key={index} value={item.text}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
      <div className="date flex flex-row justify-between items-center">
        <h4 className="w-[100px]">Date</h4>
        <p className="w-[40px]">:</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`${app.place} w-[200px] float-right bg-[#93B925] border-2 border-[#f8f7f7] rounded-md outline-none p-1`}
        />
      </div>
      <div className="note flex flex-row justify-between items-center">
        <h4 className="w-[100px]">Note</h4>
        <p className="w-[40px]">:</p>
        <input
          type="text"
          placeholder="What did you spend on?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={`${app.place} w-[200px] float-right bg-[#93B925] border-2 border-[#f8f7f7] rounded-md outline-none p-1`}
        />
      </div>
      <div className="submit">
        <button
          onClick={handleSubmit}
          className={`${app.poppin} py-2 px-4 rounded-lg shadow-md bg-[#D9413D] text-white`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
