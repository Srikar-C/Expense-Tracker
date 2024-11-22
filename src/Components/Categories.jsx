import { useState } from "react";
import app from "../App.module.css";

export default function Categories(props) {
  const [val, setVal] = useState("");

  function addCat() {
    if (val) {
      const newCat = { text: val, spent: 0 };
      setVal("");
      props.onChecked(newCat);
    } else {
      alert("Category Name is required");
    }
    return;
  }

  return (
    <div className="flex flex-col bg-[#B0DF2F] w-fit px-4 py-3 gap-4">
      <div className="flex flex-row gap-4 justify-between items-center">
        <h4 className="text-white text-lg">Category</h4>
        <p>:</p>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Enter New Category Name"
          className={`${app.place} w-[200px] float-right bg-[#93B925] border-2 border-[#f8f7f7] rounded-md outline-none p-1`}
        />
      </div>
      <button
        className={`${app.poppin} py-2 px-4 rounded-lg shadow-md bg-[#D9413D] text-white`}
        onClick={addCat}
      >
        Add Category
      </button>
    </div>
  );
}
