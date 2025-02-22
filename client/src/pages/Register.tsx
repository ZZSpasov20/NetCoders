import CustomCheckbox from "../components/buttons/CustomCheckBox";
import FormSubmitButt from "../components/buttons/FormSubmitButt";
import seePassword from "./../assets/seePassword.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

    const [useSeePassword, setUseSeePassword] = useState<boolean>(false);

    return (
        <>
            <div className="w-full   h-dvh flex flex-col justify-center gap-16">
                <div className="text-center gap-4 flex flex-col">
                    <h1 className=" text-5xl font-bold ">Welcome back</h1>
                    <p className="text-lg">Sign in to access your account</p>
                </div>
            <form className="w-full flex flex-col  items-center max-w-[300px]  mx-auto gap-4">
                <input type="name" placeholder="Enter your name" className="w-full  bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]" />
                <input type="email" placeholder="Enter your email" className="w-full  bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]" />
                <div className="flex relative w-full items-center">
                    <input 
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
                
                <div className="flex  justify-between items-center w-full gap-4">
                    <input
                        type="number"
                        placeholder="DD"
                        min="1"
                        max="31"
                        className=" bg-[#F1F1F1] h-12 rounded-[10px] pl-4 text-[#797979] grow"
                        />
                          <input
                            type="number"
                            placeholder="MM"
                            min="1"
                            max="12"
                            className=" bg-[#F1F1F1] h-12 rounded-[10px] pl-4 text-[#797979] grow"
                        />
                        <input
                            type="number"
                            placeholder="YYYY"
                            min="1900"
                            max="2025"
                            className=" bg-[#F1F1F1] h-12 rounded-[10px] pl-4 text-[#797979] grow"
                            />
                </div>
                <CustomCheckbox label="Accept Terms & Conditions" />

            </form>
            <div className="flex flex-col w-full text-center items-center gap-4" >
                <FormSubmitButt>Register</FormSubmitButt>
                <p>Already a member? <span className="text-[#8FC262]"> <Link to="/login">Login </Link></span></p>
            </div>
          </div>
        </>
    );
}