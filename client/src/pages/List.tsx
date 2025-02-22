import { useState } from "react";

export default function List() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // ✅ Add item to list
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear input
    }
  };

  // ✅ Remove item when clicked
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
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
          items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center   rounded-lg w-[250px] gap-x-5 cursor-pointer "
              onClick={() => removeItem(index)}
            >
                <input type="checkbox" className="w-5 h-5 rounded-full cursor-pointer" />
              <span>{item}</span>  
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
