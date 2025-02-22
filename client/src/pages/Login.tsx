import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import seePassword from "./../assets/seePassword.png";
import { SubmitHandler, useForm } from "react-hook-form";
import downArow from "./../assets/down-arrow.png";
import indexBackground from "./../assets/indexBackground.png"
import indexBackground2 from "./../assets/indexBackground2.png"
import indexBackground3 from "./../assets/indexBackground3.png"
import indexBackground4 from "./../assets/indexBackground4.png"


type FormFields = {
  email: string;
  password: string;
};

export default function Login() {
  const [useSeePassword, setUseSeePassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("✅ Form Submitted!", data);
  };

  // ✅ Check if the user has seen the animation before
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("hasSeenAnimation");

    if (!hasSeenAnimation) {
      setIsAnimating(true);
      localStorage.setItem("hasSeenAnimation", "true"); // Store flag so animation doesn't play again
    }
  }, []);

  return (
    <>
      {/* ✅ Show animation only the first time */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div 
            className="fixed w-full h-dvh bg-[#8BA046] z-20 top-0 left-0 flex justify-center items-center"
            initial={{ y: 0, opacity: 1 }} // Starts visible
            animate={{ y: 0, opacity: 1 }} // Stay in place initially
            exit={{ y: "130vh", opacity: 0 }} // ✅ Smoothly moves down + fades out
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
         
            <div className="relative w-full h-full flex items-center justify-center  flex-col">
              <h1 className="text-5xl font-bold text-white">GrociriEast</h1>
              <div 
                className="w-[72px] h-[72px] bg-[#F4B85E] flex justify-center items-center rounded-full cursor-pointer absolute bottom-36"
                onClick={() => setIsAnimating(false)} // ✅ Close animation when clicked
              >
                <img src={downArow} alt="" className="p-3"/>
              
              </div>
              <img src={indexBackground} alt="" className="absolute bottom-0  right-7 "/>
              <img src={indexBackground2} alt="" className="absolute top-0  left-7 "/>
              <img src={indexBackground3} alt="" className="absolute top-60  left-7 "/>
              <img src={indexBackground4} alt="" className="absolute bottom-52  left-12 "/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Login Form */}
      <div className="w-full h-dvh flex flex-col justify-center gap-20">
        <div className="text-center gap-4 flex flex-col">
          <h1 className="text-5xl font-bold">Welcome back</h1>
          <p className="text-lg">Sign in to access your account</p>
        </div>

        <form 
          id="login-form" 
          className="w-full flex flex-col items-center max-w-[300px] mx-auto gap-4" 
         
        >
          {/* Email Field */}
          <input 
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "This email is invalid. Use format: example@email.com",
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

          <p className="ml-auto text-base text-[#5C7E3D]">Forgot password?</p>

          {/* Submit Button */}
      <Link to="/app ">   <div
            
            className="bg-[#F4B85E] w-[300px] h-12 rounded-[10px] flex justify-center items-center text-white text-lg"
          >
            Login
          </div></Link> 
        </form>

        <div className="flex flex-col w-full text-center items-center gap-4">
          <p>New Member? <span className="text-[#8FC262]"><Link to="/register">Register now</Link></span></p>
        </div>
      </div>
    </>
  );
}
