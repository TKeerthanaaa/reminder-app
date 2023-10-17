import { BsFillTrash3Fill } from "react-icons/bs";

const Item = ({ imgUrl, name, age, id, deleteItem }) => {
  const clickHandler = (id) => {
    deleteItem(id);
  };

  return (
    <article className="flex items-center justify-between gap-4 w-[25rem] mx-auto">
      <div className="flex items-center justify-between gap-8">
        <div>
          <img src={imgUrl} alt={name} className="w-14 h-14 rounded-full" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-1rem font-medium">{name}</span>
          <span className="text-sl font-bold">{age}</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => clickHandler(id)}
          className="w-10 h-10 rounded-full bg-violet-400 flex items-center justify-center hover:cursor-pointer hover:-translate-y-1"
        >
          <BsFillTrash3Fill />
        </button>
      </div>
    </article>
  );
};

export default Item;
