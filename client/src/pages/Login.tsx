import FormSubmitButt from "../components/buttons/formSubmitButt";


export default function Login() {
    return(
        <>
          <div className="w-full   h-dvh flex flex-col justify-center gap-20">
            <div className="text-center gap-4 flex flex-col">
                <h1 className=" text-5xl font-bold ">Welcome back</h1>
                <p className="text-lg">Sign in to access your account</p>
            </div>
            <form className="w-full flex flex-col  items-center max-w-[300px]  mx-auto gap-4">
                <input type="email" placeholder="Enter your email" className="w-full  bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]" />
                <input type="password" placeholder="Enter your password" className="w-full       bg-[#F1F1F1] h-12 rounded-[10px] pl-6 text-[#797979]" />
                <p className="ml-auto text-base text-[#5C7E3D]  ">Forgot password?</p>
            </form>
            <div className="flex flex-col w-full text-center items-center gap-4" >
                <FormSubmitButt>Login</FormSubmitButt>
                <p>New Member? <span className="text-[#8FC262]"> Register now</span></p>
            </div>
          </div>
        </>
    );
}