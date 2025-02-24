import apple from "../assets/images/ApplePay.png";
import gpay from "../assets/images/GooglePay.png";
import paypal from "../assets/images/PayPal.png";
import Mastercard from "../assets/images/Mastercard.png";
import Visa from "../assets/images/Visa.png";
import Amex from "../assets/images/Amex.png";
import Discover from "../assets/images/Discover.png";
import AddCardDropdown from "./AddCardDropdown";
import { useState } from "react";



export default function PaymentMethod() {


  const [showCardForm, setShowCardForm] = useState(false);

  console.log(showCardForm);


  const paymentMethods = [
    { name: "Apple Pay", icon: apple },
    { name: "PayPal", icon: paypal },
    { name: "Google Pay", icon: gpay },
    {
      name: "+ Add new card",
      icon: [Mastercard, Visa, Amex, Discover],
      isCardForm: true, // This marks it as a special case
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto bg-[#1D232C] shadow-[12px_8px_20px_0px_#00000033] rounded-lg md:rounded-3xl px-4 py-5 md:p-8 z-10">
      {/* Location Details */}
      <div className="flex justify-between mb-[22px] border-b border-gray-600 pb-5">
        <div className="text-sm md:text-xl font-bold">
          <p>Location</p>
          <p>Charging station</p>
        </div>
        <div className="text-right text-sm md:text-xl font-normal">
          <p>Camden Town</p>
          <p>ChargePoint</p>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="hidden md:block mb-6">
        <p className="text-xl mb-4">Select payment method</p>
        <div className="grid grid-cols-2 gap-4 text-xl">
          {paymentMethods.map((method, index) => (
            <button
              key={index}
              className="flex items-center justify-between p-5 border shadow-[12px_8px_20px_0px_#0000004d]  border-white/50 rounded-xl hover:border-[#5ccfe6] transition-colors"

              onClick={() => {
                console.log("Button clicked!"); // Check if this logs
                if (method.isCardForm) {
                  setShowCardForm(true);
                }
              }}

            >
              <span>{method.name}</span>
              {Array.isArray(method.icon) ? (
                <div className="flex gap-1">
                  {method.icon.map((icon, idx) => (
                    <img key={idx} src={icon} alt={method.name} />
                  ))}
                </div>
              ) : (
                <img src={method.icon} alt={method.name} />
              )}
            </button>
          ))}
        </div>
      </div>



      {/* Payment Method Selection responsive */}
      <div className="block md:hidden animate-fadeIn">
        <p className="text-xl mb-6 ">Select payment method</p>
        <div className="grid grid-cols-1 gap-5 text-sm">
          {paymentMethods.map((method, index) => (
            <button
              key={index}
              className="flex items-center justify-between p-5 border shadow-[12px_8px_20px_0px_#0000004D] border-white/50 rounded-lg hover:border-[#5ccfe6] transition-colors"
              onClick={() => {
                console.log("Button clicked!"); // Check if this logs
                if (method.isCardForm) {
                  setShowCardForm(!showCardForm);
                }
              }}
            >
              <span>{method.name}</span>
              {Array.isArray(method.icon) ? (
                <div className="flex gap-1">
                  {method.icon.map((icon, idx) => (
                    <img key={idx} src={icon} alt={method.name} />
                  ))}
                </div>
              ) : (
                <img src={method.icon} alt={method.name} className="w-10" />
              )}
            </button>
          ))}
        </div>
      </div>






      <AddCardDropdown showCardForm={showCardForm} setShowCardForm={setShowCardForm} />



    </div>
  );
}
