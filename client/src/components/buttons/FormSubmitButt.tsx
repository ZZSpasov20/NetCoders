import { ReactNode } from "react";

type FormSubmitButtProps = {
  children: ReactNode; 
};

export default function FormSubmitButt({ children }: FormSubmitButtProps) {
  return (
    <button
      type="submit"
      className="bg-[#F4B85E] w-[300px] h-12 rounded-[10px] flex justify-center items-center text-white text-lg"
    >
      {children}
    </button>
  );
}
