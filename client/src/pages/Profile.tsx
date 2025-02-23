import { useState } from "react";
import backButton from "./../assets/backArrow.png";
import { Link } from "react-router-dom";

export default function Profile() {
  const [view, setView] = useState<"profile" | "history" | "family">("profile");
  const [familyMembers, setFamilyMembers] = useState<string[]>(["Ani", "Zhviko", "Nataly"]);

  // ✅ Function to add a new member
  const addFamilyMember = () => {
    const newMember = prompt("Enter new family member name:");
    if (newMember && newMember.trim() !== "") {
      setFamilyMembers([...familyMembers, newMember.trim()]);
    }
  };

  return (
    <div className="w-full h-dvh bg-white rounded-3xl p-6 max-w-[400px] mx-auto">
      {/* ✅ Show Profile View */}
      {view === "profile" && (
        <>
          {/* Back Button (Hidden in Profile View) */}
          <div className="mb-8">
            <button className="text-xl invisible">
              <img src={backButton} alt="" />
            </button>
          </div>

          {/* Profile Title */}
          <h1 className="text-center text-3xl font-bold">Name</h1>

          {/* Email Section */}
          <div className="mt-6 px-4">
            <p className="text-gray-600 text-sm">Your Email</p>
            <p className="text-gray-400 text-sm">SimeonBoev@gmail.com</p>
            <hr className="mt-2" />
          </div>

          {/* Menu Items */}
          <div className="mt-4 px-4">
            <button
              onClick={() => setView("history")}
              className="flex justify-between w-full py-4 text-lg font-medium"
            >
              Purchased history <span>&#10095;</span> {/* Arrow Right */}
            </button>
            <hr />

            <button 
              onClick={() => setView("family")}
              className="flex justify-between w-full py-4 text-lg font-medium"
            >
              Family <span>&#10095;</span>
            </button>
            <hr />
          </div>

          {/* Logout Button */}
          <div className="absolute bottom-6 w-full px-6 flex  justify-center max-w-[350px]">
           <Link to="/" className="flex  py-3  max-w-[350px] w-full"><button className="border border-orange-500 text-orange-500 w-full py-3 rounded-lg text-lg m-auto">
              Logout
            </button></Link> 
          </div>
        </>
      )}

      {/* ✅ Show Purchased History View */}
      {view === "history" && (
        <>
          {/* Back Button */}
          <div className="mb-8">
            <button onClick={() => setView("profile")} className="text-xl">
              <img src={backButton} alt="" />
            </button>
          </div>

          {/* Title */}
          <h1 className="text-center text-3xl font-bold">Purchased history</h1>

          {/* Purchased Items List */}
          <div className="mt-6">
            {["2kg apples", "3 biscuits", "1 chocolate", "3 bananas"].map((item, index) => (
              <div key={index} className="py-4 text-lg text-center font-medium border-b">
                {item}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ✅ Show Family View */}
      {view === "family" && (
        <>
          {/* Back Button */}
          <div className="mb-8">
            <button onClick={() => setView("profile")} className="text-xl">
              <img src={backButton} alt="" />
            </button>
          </div>

          {/* Title */}
          <h1 className="text-center text-3xl font-bold">Family</h1>

          {/* Family Members List */}
          <div className="mt-6">
            {familyMembers.map((member, index) => (
              <div key={index} className="py-4 text-lg text-center font-medium border-b">
                {member}
              </div>
            ))}
          </div>

          {/* Add New Member Button */}
          <div className="absolute bottom-6 w-full px-6 flex justify-center max-w-[350px]">
            <button 
              onClick={addFamilyMember}
              className="border border-orange-500 text-orange-500 w-full py-3 rounded-lg text-lg m-auto"
            >
              Add new member
            </button>
          </div>
        </>
      )}
    </div>
  );
}
