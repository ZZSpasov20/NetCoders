import { useState } from "react";

type Item = {
  id: number;
  name: string;
  checked: boolean;
};

export default function List() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // ✅ Add item with unique ID
  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newItem: Item = { id: Date.now(), name: inputValue.trim(), checked: false };
      setItems([...items, newItem]);
      setInputValue(""); // Clear input
    }
  };

  // ✅ Remove item when clicked
  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="w-full h-[70px]"></div>

      {/* Title */}
      <div className="relative">
        <h1 className="text-4xl font-bold pl-8 z-50 absolute top-0">Shopping List</h1>
      </div>

      <div className="h-[500px] w-full pt-12 flex items-start flex-col gap-y-6 overflow-auto mt-12 pl-10">
        {items.length === 0 ? (
          <p className="text-gray-400">No items yet.</p>
        ) : (
          items.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center rounded-lg w-[250px] gap-x-5 cursor-pointer"
              onClick={() => removeItem(item.id)}
            >
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded-full cursor-pointer" 
                checked={item.checked}
                onChange={(e) => {
                  e.stopPropagation(); // Prevent removal when checking
                  setItems((prev) =>
                    prev.map((i) =>
                      i.id === item.id ? { ...i, checked: e.target.checked } : i
                    )
                  );
                }}
              />
              <span>{item.name}</span>  
            </div>
          ))
        )}
        <div className="flex gap-2 justify-center flex-col mt-4">
          <input
            type="text"
            placeholder="Enter item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-[250px]"
          />
          <button 
            onClick={addItem} 
            className="bg-[#F4B85E] text-white px-4 py-2 rounded-lg mt-2"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
