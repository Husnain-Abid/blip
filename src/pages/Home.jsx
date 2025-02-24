import { useState } from "react";
import logo from "../assets/images/logo.png";
import btn from "../assets/images/btn.png";
import PaymentMethod from "../components/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { setShowPayment, setStepTwo } from "../store/paymentSlice";
import ChargingStatus from "../components/ChargingStatus";

const Home = () => {
  const dispatch = useDispatch();
  const showPayment = useSelector((state) => state.payment.showPayment);
  const showCharger = useSelector((state) => state.payment.showCharger);

  const stepTwo = useSelector((state) => state.payment.stepTwo);
  const stepThree = useSelector((state) => state.payment.stepThree);


  // State for location popup
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const progressSteps = [
    { step: "STEP 1", title: "Initiate charging", color: "#65C6F2" },
    {
      step: "STEP 2",
      title: "Payment details",
      color: stepTwo ? "#9CD7BB" : "#7F7F7F",
    },
    {
      step: "STEP 3",
      title: "Confirmation",
      color: stepThree ? "#C1E296" : "#7F7F7F",
    },
  ];



  // Handle location access
  const handlePayment = () => {
    dispatch(setStepTwo(true)); // Set Two  
    dispatch(setShowPayment(true)); // Show Payment component
  };


  // Handle location access
  const handleAllowLocation = () => {
    setShowLocationPopup(false);
    dispatch(setShowPayment(true)); // Show Payment component
  };

  const handleDenyLocation = () => {
    setShowLocationPopup(false); // Simply close popup
  };

  return (
    <div className="min-h-screen font-satoshi bg-[#161B21] text-white p-4 relative ">
      {/* Logo */}
      <div className="flex justify-center">
        <img src={logo} alt="BLIP Logo" className="w-32 md:w-40 mt-12" />
      </div>

      {/* Title */}
      <h1 className="text-center text-xl md:text-[28px] font-medium mb-[50px]">
        Start Charging in 3 Easy Steps
      </h1>

      {/* Progress Steps */}
      <div className="flex justify-center gap-7 mb-12">
        {progressSteps.map((step, index) => (
          <div key={index} className="flex flex-col font-medium">
            <div
              className="h-1.5 mb-4 w-[100px] md:w-[186px]"
              style={{ backgroundColor: step.color }}
            ></div>
            <p className="text-[10px] md:text-base">{step.step}</p>
            <p className="text-sm md:text-xl">{step.title}</p>
          </div>
        ))}
      </div>

      {/* Show Components Based on State */}
      {showCharger ? (
        <ChargingStatus />
      ) : showPayment ? (
        <PaymentMethod />
      ) : (
        <div className={`${showLocationPopup ? "hidden" : "block"} max-w-4xl mx-auto bg-[#1D232C] rounded-[14px] p-10 md:p-14 shadow-[12px_8px_20px_0px_#00000033]`}>
          <div className="flex flex-col items-center text-center border-gray-600">
            <p className="font-medium text-lg md:text-[22px] mb-6">
              Start charging session now
            </p>

            {/* Desktop Button */}
            <button
              className="hidden md:flex bg-[#3B4758] border  font-medium py-3 px-6 rounded-[10px] text-lg items-center gap-1.5"
              // onClick={() => dispatch(setShowPayment(true))}
              onClick={handlePayment}

            >
              <img src={btn} alt="btn" />
              I’m next to a charger
            </button>

            {/* Mobile Button (Triggers Location Popup) */}
            <button
              className="flex md:hidden bg-[#3B4758] py-3.5 px-6 rounded-[10px] text-xs items-center gap-1.5"
              onClick={() => setShowLocationPopup(true)}
            >
              <img src={btn} alt="btn" />
              I’m next to a charger
            </button>
          </div>
        </div>
      )}

      {/* Location Permission Popup */}
      {showLocationPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 animate-fadeIn">
          <div className="bg-[#1D232C]  py-6 rounded-[20px] text-white max-w-[917px] text-center">
            {/* Popup Header */}
            <div className="px-16 ">
              <h2 className="text-lg font-medium mb-4">
                “Blip” would like to access your <br /> current location.
              </h2>
              <p className="text-sm mb-4 text-white/50">https://blipcharge.com</p>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-600 my-4"></div>

            {/* Buttons */}
            <div className="flex flex-col space-y-2">

              <button
                className="text-[#0391FF] px-4 py-2 rounded-md w-full"
                onClick={handleAllowLocation}
              >
                Allow
              </button>

              <div className="border-t border-gray-600"></div>

              <button
                className="text-[#0391FF] px-4 py-2 rounded-md w-full"
                onClick={handleDenyLocation}
              >
                Don't Allow
              </button>

            </div>
          </div>
        </div>
      )}

      {/* footer  */}

      {/* Footer */}

      <div className="w-full absolute bottom-5 left-1/2 transform -translate-x-1/2 py-4 z-0">

        <div className="max-w-[124px] mx-auto border-t border-white/30 pt-6 "> </div>

        <p className="text-sm text-center text-white/60" > Copyright @ 2025. All Rights Reserved. </p>

      </div>


    </div>
  );
};

export default Home;
