import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
            <div className="w-screen  h-dvh min-h-[700px] min-w-[280px]">
                <Outlet/>
            </div>
        </>
    );
}