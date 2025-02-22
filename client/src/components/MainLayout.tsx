import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import HomeBackground from "./../assets/homeBackground.png";

export default function MainLayout(){
    return (

        <>
             <div className="w-screen  h-dvh min-h-[400px] min-w-[280px] flex flex-col">
                <div className="w-full grow h-dvh relative ">
                    <img src={HomeBackground} alt="" className="absolute top-0 right-12" />
                    <Outlet />
                </div>
               <Nav/>
            </div>
        </>
    );
 }