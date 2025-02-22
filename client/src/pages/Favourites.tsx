import heartFIlled from "./../assets/heartFilled.png"

export default function Favourites() {
    return (
        <>
        <div className="w-full h-[70px] ">
            
        </div>
        <div className=" relative">
            <h1 className="text-4xl font-bold pl-8 z-50   absolute top-0">Trending now </h1>
        </div>
        <div className="h-[500px] w-full  pt-10 flex items-center flex-col gap-y-20 overflow-scroll mt-20">
           <div className="w-full flex justify-around relative ">
              
                <div className="text-center relative flex flex-col gap-3">
                     <img src={heartFIlled} className="absolute right-2 -top-5  w-6" alt="" />
                    <p className=" text-6xl"> 🥐</p>
                    <p className="text-2xl font-bold">5 Croissant</p>
                    <p className="text-xl">Affortable</p>
                </div>
                 <div className="text-center relative flex flex-col gap-3">
                <img src={heartFIlled} className="absolute right-2 -top-5  w-6" alt="" />
                    <p className=" text-6xl"> 🧃</p>
                    <p className="text-2xl font-bold">Orange juice</p>
                    <p className="text-xl">Moderate</p>
                </div>
           </div>
           <div className="w-full flex justify-around">
           <div className="text-center relative flex flex-col gap-3">
                <img src={heartFIlled} className="absolute right-5 -top-5  w-6" alt="" />
                    <p className=" text-6xl"> 🍒</p>
                    <p className="text-2xl font-bold">700g Pineapple</p>
                    <p className="text-xl">Expensive</p>
                </div>
                <div className="text-center relative flex flex-col gap-3">
                <img src={heartFIlled} className="absolute right-5 -top-5  w-6" alt="" />
                    <p className=" text-6xl"> 🍫</p>
                    <p className="text-2xl font-bold">Milk Chocolate</p>
                    <p className="text-xl">Moderate</p>
                </div>
           </div>
           <div className="w-full flex justify-around relative">             
           <div className="text-center relative flex flex-col gap-3">
                   <img src={heartFIlled} className="absolute right-2 -top-5  w-6" alt="" />
                  <p className=" text-6xl"> 🥐</p>
                  <p className="text-2xl font-bold">2 Biscuits</p>
                  <p className="text-xl">Affortable</p>
              </div>
              <div className="text-center relative flex flex-col gap-3">
              <img src={heartFIlled} className="absolute right-2 -top-5  w-6" alt="" />
                  <p className=" text-6xl"> 🥬</p>
                  <p className="text-2xl font-bold w-[160px]">1.300kg tomatoes</p>
                  <p className="text-xl">Moderate</p>
              </div>
         </div>
        
        </div>
       
    </>
    );
}