import { useState } from "react";
import app from "./App.module.css";
import Expense from "./Components/Expense";
import Categories from "./Components/Categories";

function App() {
  const [box, setBox] = useState("");
  const [cat, setCat] = useState([]);

  function handleExpense() {
    setBox(<Expense list={cat} onUpdateSpent={updateSpent} />);
  }

  function handleCategory() {
    setBox(
      <Categories
        onChecked={(cats) => {
          showCat(cats);
        }}
      />
    );
  }

  function showCat(cats) {
    setCat((prevCat) => [...prevCat, cats]);
    console.log(cat);
    setBox("");
  }

  function updateSpent(categoryText, amount) {
    setCat((prevCat) =>
      prevCat.map((item) =>
        item.text === categoryText
          ? { ...item, spent: item.spent + parseFloat(amount) }
          : item
      )
    );
    setBox("");
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-32 bg-gradient-to-tr from-[#2AB0B0] via-[#2FC79E] to-[#A6E46E]">
      <h1
        className={`${app.roboto} ${app.head} w-fit font-semibold text-3xl tracking-wider text-white text-center py-5 px-3 mx-auto`}
      >
        Expense Tracker
      </h1>
      <div className="flex flex-row justify-between px-10">
        <div className="expense flex flex-col gap-4">
          <button
            onClick={handleExpense}
            className={`${app.poppin} p-3 rounded-lg shadow-md bg-[#D9413D] text-white`}
          >
            Add Expense
          </button>
          <h4 className="text-white text-lg">Expenses</h4>
        </div>
        <div className="click">{box}</div>
        <div className="category flex flex-col gap-4">
          <button
            onClick={handleCategory}
            className={`${app.poppin} p-3 rounded-lg shadow-md bg-[#D9413D] text-white`}
          >
            Add Category
          </button>
          <h4 className="text-white">Categories and Spent Amount</h4>
          {cat && cat.length > 0 && (
            <div className="cats border-4 flex flex-col gap-2 border-white shadow-lg shadow-white p-4">
              {cat.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-center border-b-2 border-white w-fit mx-auto my-1"
                  >
                    <b>{item.text}</b> - {item.spent}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
