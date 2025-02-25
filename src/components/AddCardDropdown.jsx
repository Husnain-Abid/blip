import { useState } from "react";
import SSLNote from "./SSLNote";
import { useDispatch } from "react-redux";
import { setPaymentDetail } from "../store/paymentSlice";


export default function AddCardDropdown({ showCardForm, setShowCardForm }) {

  const [showSSLNote, setShowSSLNote] = useState(false);

  const dispatch = useDispatch();



  const handleSaveCard = () => {
    setShowSSLNote(true); // Show SSL Notice
    setShowCardForm(false); // Show SSL Notice
    dispatch(setPaymentDetail(true));
  };

  return (
    <>

      {/* Dropdown Form */}
      {showCardForm && (
        <>

          <div
            className="hidden md:block fixed inset-0 bg-black/50 bg-opacity-50 z-10"
            onClick={() => setShowCardForm(false)} // Close when clicking outside
          />


          <div className="hidden md:block absolute top-12 right-0 bg-[#1D232C] p-6 rounded-xl mt-4 max-w-sm z-20">
            <p className="font-medium mb-3">Enter your card details here</p>

            <div className="flex gap-4 text-sm">
              <input
                type="text"
                placeholder="Name on card"
                className="w-2/3 p-3 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)] rounded-lg bg-gray-700 text-white  border-white/40 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Exp"
                className="w-1/3 p-3 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)] rounded-lg bg-gray-700 text-white  border-white/40 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 text-sm mt-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-2/3 p-3 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)] rounded-lg bg-gray-700 text-white  border-white/30 focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/3 p-3 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)] rounded-lg bg-gray-700 text-white  border-white/30 focus:outline-none"
              />
            </div>

            <div className="w-full flex gap-3 mt-4">
              <button
                // className="w-1/2 py-3 border shadow-[12px 8px 10px 0px #0000004D]  rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                className="w-1/2 py-3 border border-white/40 shadow-[10px_6px_15px_rgba(0,0,0,0.2)] rounded-lg text-sm font-medium hover:shadow-[12px_8px_20px_rgba(0,0,0,0.3)]  transition-all duration-300"
                onClick={() => setShowCardForm(false)}
              >
                Cancel
              </button>

              <button
                className="w-1/2 py-3 bg-gradient-to-r from-[#5DC3FA] to-[#CAE58D] rounded-lg text-black text-sm font-bold hover:opacity-90 transition-opacity"
                onClick={handleSaveCard}
              >
                Save
              </button>
            </div>

          </div>

          {/* mobile responsive  */}

          <div className="block md:hidden bg-[#1D232C] p-5 rounded-b-lg shadow-[12px_8px_20px_0px_#0000004D] border border-[#5DC3FA]  animate-fadeIn"
          
          >

            <p className="text-sm font-medium mb-3">Enter your card details here</p>

            <div className="flex gap-3 text-xs">
              <input
                type="text"
                placeholder="Name on card"
                className="w-2/3 px-3 py-2 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)]  rounded-lg bg-[#3B4758] text-white  border-white/30"
              />
              <input
                type="text"
                placeholder="Exp"
                className="w-1/3 px-3 py-2  border shadow-[10px_6px_15px_rgba(0,0,0,0.2)]  rounded-lg bg-[#3B4758] text-white  border-white/30 focus:outline-none"
              />
            </div>

            <div className="flex gap-3 text-xs mt-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-2/3 px-3 py-2 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)]  rounded-lg bg-[#3B4758] text-white  border-white/30"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/3 px-3 py-2 border shadow-[10px_6px_15px_rgba(0,0,0,0.2)]  rounded-lg bg-[#3B4758] text-white  border-white/30"
              />
            </div>

            <div className="w-full flex gap-3 mt-7">
              <button
                className="w-1/2 py-3 border border-white/40 shadow-[10px_6px_15px_rgba(0,0,0,0.2)] rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"

                onClick={() => setShowCardForm(false)}
              >
                Cancel
              </button>

              <button
                className="w-1/2 py-3 font-bold bg-gradient-to-r from-[#5DC3FA] to-[#CAE58D] rounded-lg text-black text-xs  hover:opacity-90 transition-opacity"
                onClick={handleSaveCard}
              >
                Save
              </button>
            </div>

          </div>



        </>

      )}


      {/* SSL Note (Appears when Save button is clicked) */}
      {showSSLNote && <SSLNote setShowCardForm={setShowCardForm} setShowSSLNote={setShowSSLNote} />}


    </>
  );
}
