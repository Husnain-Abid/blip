import apple from "../assets/images/ApplePay.png";
import gpay from "../assets/images/GooglePay.png";
import paypal from "../assets/images/PayPal.png";
import Mastercard from "../assets/images/Mastercard.png";
import Visa from "../assets/images/Visa.png";
import Amex from "../assets/images/Amex.png";
import Discover from "../assets/images/Discover.png";
import AddCardDropdown from "./AddCardDropdown";
import { useState } from "react";
import { useSelector } from "react-redux";



export default function PaymentMethod() {


  const [showCardForm, setShowCardForm] = useState(false);

  const paymentDetail = useSelector((state) => state.payment.paymentDetail);


  console.log(showCardForm);


  const paymentMethods = [
    { name: "Apple Pay", icon: apple, size: "w-10" },
    { name: "PayPal", icon: paypal, size: "w-7" },
    { name: "Google Pay", icon: gpay, size: "w-10" },
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
        <div className="text-xs text-gray-100 md:text-xl font-bold">
          <p>Location</p>
          <p>Charging station</p>
        </div>
        <div className="text-right text-gray-300 text-xs md:text-xl font-normal">
          <p>Camden Town</p>
          <p>ChargePoint</p>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="hidden md:block mb-6">
        <p className="text-xl mb-4">Select payment method</p>
        <div className="grid grid-cols-2 gap-4 text-xl">


          {/* latest changes start */}

          {paymentMethods.map((method, index) => (
            <>

              <button
                key={index}
                className={`flex items-center justify-between ${paymentDetail && method.name === "+ Add new card" ? "px-5 py-2" : "p-4 md:p-5"}    border shadow-[12px_8px_20px_0px_#0000004D] border-white/20 ${index === 3 && showCardForm ? "rounded-lg" : "rounded-lg"}  hover:border-[#5ccfe6] transition-colors`}

                onClick={() => {
                  console.log("Button clicked!"); // Check if this logs
                  if (method.isCardForm) {
                    setShowCardForm(!showCardForm);
                  }
                }}
              >




                {/* Conditionally render content based on paymentDetail */}
                {method.name === "+ Add new card" ? (
                  // If it's the "Add new card" button, handle that case
                  paymentDetail ? (
                    // When paymentDetail is true, show existing card (Mastercard, etc.)
                    <div className="flex items-center gap-4  text-start">
                      <img src={Mastercard} alt="Mastercard" className="w-7" />
                      <div >
                        <span className="text-sm font-semibold block">Mastercard</span>
                        <span className="text-xs"> **** **** **** 7829</span>
                      </div>
                    </div>
                  ) : (
                    // Default view when paymentDetail is false (add new card button)
                    <>
                      <span>+ Add new card</span>
                      <div className="flex gap-1">
                        {[Mastercard, Visa, Amex, Discover].map((icon, idx) => (
                          <img key={idx} src={icon} alt="Card" className="w-6" />
                        ))}
                      </div>
                    </>
                  )
                ) : (
                  // For other payment methods like Apple Pay, Google Pay, PayPal, etc.
                  <>



                    <span>{method.name}</span>
                    <img src={method.icon} alt={method.name} className={`${method.size}`} />




                  </>


                )}



              </button>






            </>






          ))}







          {/* latest changes end */}







        </div>
      </div>



      {/* Payment Method Selection responsive */}
      <div className="block md:hidden animate-fadeIn">
        <p className="text-base font-medium mb-6 ">Select payment method</p>
        <div className="grid grid-cols-1 gap-3 text-sm">
          {paymentMethods.map((method, index) => (
            <>

              <button
                key={index}
                className={`flex items-center justify-between ${paymentDetail && method.name === "+ Add new card" ? "px-5 py-2" : "p-4 md:p-5"}    border shadow-[12px_8px_20px_0px_#0000004D] border-white/20 ${index === 3 && showCardForm ? "rounded-t-lg" : "rounded-lg"}  hover:border-[#5ccfe6] transition-colors`}



                onClick={() => {
                  console.log("Button clicked!"); // Check if this logs
                  if (method.isCardForm) {
                    setShowCardForm(!showCardForm);
                  }
                }}
              >




                {/* Conditionally render content based on paymentDetail */}
                {method.name === "+ Add new card" ? (
                  // If it's the "Add new card" button, handle that case
                  paymentDetail ? (
                    // When paymentDetail is true, show existing card (Mastercard, etc.)
                    <div className="flex items-center gap-4  text-start">
                      <img src={Mastercard} alt="Mastercard" className="w-7" />
                      <div >
                        <span className="text-sm font-semibold block">Mastercard</span>
                        <span className="text-xs"> **** **** **** 7829</span>
                      </div>
                    </div>
                  ) : (
                    // Default view when paymentDetail is false (add new card button)
                    <>
                      <span>+ Add new card</span>
                      <div className="flex gap-1">
                        {[Mastercard, Visa, Amex, Discover].map((icon, idx) => (
                          <img key={idx} src={icon} alt="Card" className="w-6" />
                        ))}
                      </div>
                    </>
                  )
                ) : (
                  // For other payment methods like Apple Pay, Google Pay, PayPal, etc.
                  <>

                    <span>{method.name}</span>
                    <img src={method.icon} alt={method.name} className={`${method.size}`} />

                  </>


                )}



















              </button>






            </>






          ))}
        </div>










      </div>






      <AddCardDropdown showCardForm={showCardForm} setShowCardForm={setShowCardForm} />



    </div>
  );
}
