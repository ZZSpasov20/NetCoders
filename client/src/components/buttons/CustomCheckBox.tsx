import { useState } from "react";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function CustomCheckbox({ label, checked = false, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer space-x-3 mt-3 mr-auto">

      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      
      <div
        className={`w-4 h-4 flex justify-center items-center  border-2 rounded border-gray-400 
        ${isChecked ? "bg-[#8FC262] border-[#8FC262]" : "bg-white"}`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.086l6.293-6.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      <span className=" text-sm text-gray-800">{label}</span>
    </label>
  );
}
