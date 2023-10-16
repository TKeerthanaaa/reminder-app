import { birds } from "./constants";
import { useState } from "react";
import Item from "./components/item";

const App = () => {
  const [data, setData] = useState(birds);

  const deleteItem = (id) => {
    const remainingItem = data.filter((item) => item.id !== id);
    setData(remainingItem);
  };

  const clearItems = () => {
    setData([]);
  };

  return (
    <main className="bg-blue-700 min-h-screen w-screen flex items-center justify-center">
      <div className="card w-[30rem] bg-white shadow-lg rounded-xl min-h-[36rem]">
        <h1 className="text-center text-4xl font-bold">Birthday Reminder</h1>
        <ul className="flex flex-col gap-2 my-6">
          {data.map((item) => {
            const { id, name, age, imgUrl } = item;
            return (
              <Item
                key={id}
                id={id}
                name={name}
                age={age}
                imgUrl={imgUrl}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
        <div className="flex justify-center my-1">
          <button
            className="px-8 py-2 bg-blue-900 font-bold text-white rounded"
            onClick={clearItems}
          >
            Clear All
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
