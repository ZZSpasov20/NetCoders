 export default function Home(){
    return (

        <>
            <div className="w-full h-[70px] ">
                
            </div>
            <div className=" relative">
                <h1 className="text-4xl font-bold pl-8 z-50   absolute top-0">Trending now </h1>
            </div>
            <div className="h-[500px] w-full  pt-32 flex items-center flex-col gap-y-32 overflow-scroll mt-20">
                <div className="w-[270px] h-[70px] bg-[#F0F0F0] rounded-[27px] relative flex items-center shadow-lg">
                    <div className="absolute -ml-8  w-28 h-28 bg-[#E7E7E7] rounded-full flex justify-center items-center text-7xl">
                        <p>🍒</p>
                    </div>
                    <p className="ml-auto pr-10"> 1kg bananas</p>
                </div>
                <div className="w-[270px] h-[70px] bg-[#F0F0F0] rounded-[27px] relative flex items-center shadow-lg">
                    <div className="absolute -ml-8  w-28 h-28 bg-[#E7E7E7] rounded-full flex justify-center items-center text-7xl">
                        <p>🍫</p>
                    </div>
                    <p className="ml-auto pr-10"> 1 milka chocolate</p>
                </div>
                <div className="w-[270px] h-[70px] bg-[#F0F0F0] rounded-[27px] relative flex items-center shadow-lg">
                    <div className="absolute -ml-8  w-28 h-28 bg-[#E7E7E7] rounded-full flex justify-center items-center text-7xl">
                        <p>🧃</p>
                    </div>
                    <p className="ml-auto pr-10"> 1L apple juice</p>
                </div>
                <div className="w-[270px] h-[70px] bg-[#F0F0F0] rounded-[27px] relative flex items-center shadow-lg">
                    <div className="absolute -ml-8  w-28 h-28 bg-[#E7E7E7] rounded-full flex justify-center items-center text-7xl">
                        <p>🧃</p>
                    </div>
                    <p className="ml-auto pr-10"> 1L apple juice</p>
                </div>
            </div>
           
        </>
    );
 }