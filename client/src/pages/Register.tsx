import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import CustomCheckbox from "../components/buttons/CustomCheckBox";
import seePassword from "./../assets/seePassword.png";

type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
  day: number;
  month: number;
  year: number;
  termsAccepted: boolean;
};

export default function Register() {
  const [useSeePassword, setUseSeePassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>();

  const onSubmit: SubmitHandler<RegisterFormFields> = (data) => {
    console.log("✅ Form Submitted:", data);
  };

  return (
    <>
      <div className="w-full   h-dvh flex flex-col justify-center gap-16">
        <div className="text-center gap-4 flex flex-col">
          <h1 className=" text-5xl font-bold ">Welcome back</h1>
          <p className="text-lg">Sign in to access your account</p>
        </div>

        {/* ✅ React Hook Form Handling */}
        <form 
          className="w-full flex flex-col items-center max-w-[300px] mx-auto gap-4" 
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name Field */}
          <input 
            {...register("name", { required: "Name is required" })} 
            type="text" 
            placeholder="Enter your name" 
            className="w-full bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email Field */}
          <input 
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })} 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          {/* Password Field */}
          <div className="flex relative w-full items-center">
            <input 
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })} 
              type={useSeePassword ? "text" : "password"} 
              placeholder="Enter your password"
              className="w-full bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]"
            />
            <img 
              src={seePassword} 
              alt="see password" 
              className="absolute right-6 cursor-pointer"
              onClick={() => setUseSeePassword((prev) => !prev)} 
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          {/* Date of Birth Fields */}
          <div className="flex  justify-between items-center w-full gap-4">
            <input
              {...register("day", {
                required: "Day is required",
                min: { value: 1, message: "Invalid day" },
                max: { value: 31, message: "Invalid day" },
              })}
              type="number"
              placeholder="DD"
              min="1"
              max="31"
              className="bg-[#F1F1F1] h-12 rounded-[10px] pl-4 text-[#797979] grow"
            />
            <input
              {...register("month", {
                required: "Month is required",
                min: { value: 1, message: "Invalid month" },
                max: { value: 12, message: "Invalid month" },
              })}
              type="number"
              placeholder="MM"
              min="1"
              max="12"
              className="bg-[#F1F1F1] h-12 rounded-[10px] pl-4 text-[#797979] grow"
            />
            <input
              {...register("year", {
                required: "Year is required",
                min: { value: 1900, message: "Invalid year" },
                max: { value: 2025, message: "Invalid year" },
              })}
              type="number"
              placeholder="YYYY"
              min="1900"
              max="2025"
              className="bg-[#F1F1F1] h-12 rounded-[10px] pl-4 text-[#797979] grow"
            />
          </div>

        

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center gap-2">
            <input
              {...register("termsAccepted", {
                required: "You must accept the terms",
              })}
              type="checkbox"
              className="w-5 h-5"
            />
            <span className="text-[#797979]">Accept Terms & Conditions</span>
          </div>
          {errors.termsAccepted && <p className="text-red-500">{errors.termsAccepted.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#F4B85E] w-[300px] h-12 rounded-[10px] flex justify-center items-center text-white text-lg"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="flex flex-col w-full text-center items-center gap-4">
          <p>Already a member? <span className="text-[#8FC262]"><Link to="/">Login</Link></span></p>
        </div>
      </div>
    </>
  );
}
