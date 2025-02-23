import { se } from "date-fns/locale";
import sendArrow from "./../assets/Send.png";
import backButton from "./../assets/backButton.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Chatgpt() 
{
  

    return (
        <>
    
            <div className="w-full h-dvh relative flex flex-col max-w-[450px] items-center py-10">
                <div className="w-full h-[60px] -mt-5 pl-2 pointer">
                    <Link to="/app"><img src={backButton} alt="back button" /></Link> 
                </div>
                <div className="w-full flex flex-col px-5 gap-5 overflow-scroll h-[800px]">


                    <p className="bg-[#F7F7F8] text-[#A0A0A5] rounded-[14px] w-[250px] ml-auto p-4">
                    I want pancakes. Give me the needed products and their brands
                    </p>
                    <p className="bg-[#F4B85E] text-[#FFFFFF] rounded-[14px] w-[250px] mr-auto p-4">
                    Here’s what you need for classic pancakes: <br></br>
                    🥛 Milk: Olympus<br></br>
                    🥚 Eggs: Bagranka Eggs<br></br>
                    🌾 Flour: Sofia Mel<br></br>
                    🧂 Salt: Panagyurishte Salt<br></br>
                    🥄 Sugar: Zahira Crystal<br></br>
                    🛢️ Oil: Biser<br></br>
                    Recomendation based on latest info
                    </p>
                    <p className="bg-[#F7F7F8] text-[#A0A0A5] rounded-[14px] w-[250px] ml-auto p-4">
                    Alright, but let’s make American pancakes with chocolate.
                    </p>

                    <p className="bg-[#F4B85E] text-[#FFFFFF] rounded-[14px] w-[250px] mr-auto p-4">
                    For fluffy American pancakes, you’ll need:<br></br>
                    🥛 Milk: Vereya<br></br>
                    🥚 Eggs: Bagranka Eggs<br></br>
                    🌾 Flour: Bella<br></br>
                    🥄 Baking Powder: Dr. Oetker<br></br>
                    🧈 Butter: President<br></br>
                    🍫 For the chocolate, I recommend Nutella
                    </p>
                </div>
                <div className=" mt-5 w-full h-[100px] flex items-center justify-center px-5">
                
                    <div className="flex relative items-center w-full max-w-[400px]">
                        <input 
                        type="email" 
                        placeholder="Send a text." 
                        className="w-full bg-[#E1E1E1] h-12 rounded-[19px] pl-6 text-[#797979] mx-auto" 
                        />
                        <img src={sendArrow} alt="" className="absolute right-5"/>
                    </div>
                </div>
            </div>
        </>
    );
}