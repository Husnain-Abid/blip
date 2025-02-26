"use client";

import { useState, useEffect } from "react";
import alert from "../assets/images/warning.png";
import { useNavigate } from "react-router-dom";

const ChargingStatus = () => {

const navigation = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(5); // 2 minutes in seconds
  const [email, setEmail] = useState("");
  const [isCharging, setIsCharging] = useState(false);

  // Handle 1st step transitions with 3-second delay, you can delay own desire
  useEffect(() => {
    if (currentStep === 1) {
      const timer = setTimeout(() => {
        setCurrentStep(2);
        setIsCharging(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Handle countdown timer, you can delay own desire
  useEffect(() => {
    let interval;
    if (isCharging && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setCurrentStep(3);
            setIsCharging(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCharging, timeRemaining]);

  // Function to format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Ensure two-digit seconds format
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Receipt will be sent to:", email);
      setEmail("");
    }
  };

  return (
    <>

      <div className="hidden md:block max-w-6xl mx-auto bg-[#1D232C] shadow-[12px_8px_20px_0px_#00000033] rounded-2xl px-14 pt-10 pb-8 relative z-10">
        {/* Progress Steps */}
        <div className="flex justify-around items-start mb-10">

          {/* Step 1 */}
          <div className={`max-w-52 text-center ${currentStep === 1 ? "text-white" : "text-white/50"}`}>
            <h2 className="text-xl font-medium mb-2">Charger SARIKA has been activated!</h2>
            <p className={`${currentStep === 1 ? "text-white/80" : "text-white/50"} text-lg`}>Plug in to start charging</p>
          </div>

          {/* Progress Dashes */}
          <div className="flex w-10 items-center justify-between mx-4 mt-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`w-1/5 h-[2px] bg-gray-600 transition-all duration-500 `}
              />
            ))}
          </div>

          {/* Step 2 */}
          <div className={`max-w-42 text-center ${currentStep === 2 ? "text-white" : "text-white/50"}`}>
            <h2 className="text-xl font-medium items-center mt-5 ">Charging initiated</h2>
            {/* <p className={`${currentStep === 2 ? "text-white/80" : "text-white/50"}  text-lg`}>
              Time remaining: {formatTime(timeRemaining)} minutes
            </p> */}
          </div>

          {/* Progress Dashes */}
          <div className="flex w-10 items-center justify-between mx-4 mt-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`w-1/5 h-[2px] bg-gray-600 transition-all duration-500 `}
              />
            ))}
          </div>

          {/* Step 3 */}
          <div className="w-72 text-center">
            <h2 className={`text-xl font-medium mb-3 ${currentStep === 3 ? "text-white" : "text-white/50"}`}>
              Charging completed
            </h2>
            <form onSubmit={handleSubmit} className={`flex gap-2 justify-center ${currentStep === 3 ? "text-white/80" : "text-white/50"}`}>
              <input
                type="email"
                placeholder="Enter tel for receipt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-1.5 text-sm rounded-lg bg-transparent placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-[#3B4758] border border-gray-600 hover:bg-[#3a3f45] transition-colors"
                onClick={()=>navigation("/error")}

             
             >
                Submit
              </button>
            </form>
          </div>

        </div>



        {/* Warning/Report Section */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-6">
          <div className="flex items-center gap-3">
            <img src={alert} alt="alert" />
            <p className="text-white/80 text-sm">If you experience any issues in the process, please report here.</p>
          </div>
          <button className="px-6 py-2 rounded-lg text-white/80 border border-gray-600 hover:bg-[#3a3f45] transition-colors">
            Report
          </button>
        </div>
      </div>


      {/* responsive  */}

      <div className="block md:hidden max-w-6xl mx-auto bg-[#1D232C] rounded-2xl px-4 pt-11 pb-6 animate-fadeIn relative z-10">
        {/* Progress Steps */}
        <div className="flex justify-between flex-col items-start mb-16">

          {/* Step 1 */}
          <div className={` mx-auto text-center ${currentStep === 1 ? "text-white" : "text-white/50"}`}>
            <h2 className="text-base font-medium mb-1.5">Charger SARIKA has been activated!</h2>
            <p className={`${currentStep === 1 ? "text-white/80 " : "text-white/50"} text-xs`}>Plug in your vehicle to start charging</p>
          </div>

          {/* Progress Dashes (Vertical) */}
          <div className="flex flex-col h-6 items-center justify-between mx-auto my-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-[2px] h-1/4 bg-gray-600 transition-all duration-500"
              />
            ))}
          </div>

          {/* Step 2 */}
          <div className={`mx-auto text-center ${currentStep === 2 ? "text-white" : "text-white/50"}`}>
            <h2 className="text-base font-medium ">Charging initiated</h2>
            {/* <p className={`${currentStep === 2 ? "text-white/80" : "text-white/50"}`}>
              Time remaining: {formatTime(timeRemaining)}
            </p> */}
          </div>


          {/* Progress Dashes (Vertical) */}
          <div className="flex flex-col h-6 items-center justify-between mx-auto my-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-[2px] h-1/4 bg-gray-600 transition-all duration-500"
              />
            ))}
          </div>

          {/* Step 3 */}
          <div className="mx-auto text-center">
            <h2 className={`text-base font-medium mb-2.5 ${currentStep === 3 ? "text-white" : "text-white/50"}`}>
              Charging completed
            </h2>
            <form onSubmit={handleSubmit} className={`flex gap-2   justify-center ${currentStep === 3 ? "text-white/80" : "text-white/50"}`}>
              <input
                type="email"
                placeholder="Enter tel for receipt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-1.5 text-[10px] rounded-lg w-44 bg-transparent placeholder-white/50 border border-gray-600 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-4 py-1.5 text-xs rounded-lg text-white/50 bg-[#3B4758] border border-gray-600 hover:bg-[#3a3f45] transition-colors"
                onClick={()=>navigation("/error")}
              >
                Submit
              </button>
            </form>
          </div>

        </div>



        {/* Warning/Report Section */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-700 pt-6">
          <div className="flex items-center gap-3">
            <img src={alert} alt="alert" />
            <p className="text-gray-400/80 text-xs">If you experience any issues in the process, please report here.</p>
          </div>
          <button className="px-4 py-1.5 rounded-lg text-xs text-white/80 border shadow-[12px 8px 10px 0px #0000004D]   border-gray-600 hover:bg-[#3a3f45] transition-colors">
            Report
          </button>
        </div>
      </div>

    </>

  );
};

export default ChargingStatus;



