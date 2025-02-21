import { useState } from "react";
import SSLNote from "./SSLNote";


export default function AddCardDropdown({ showCardForm, setShowCardForm }) {

  const [showSSLNote, setShowSSLNote] = useState(false);



  const handleSaveCard = () => {
    setShowSSLNote(true); // Show SSL Notice
    setShowCardForm(false); // Show SSL Notice
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
            <p className="font-medium mb-3">Enter your card details</p>

            <div className="flex gap-4 text-sm">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-2/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 text-sm mt-4">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-2/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="w-full flex gap-3 mt-4">
              <button
                className="w-1/2 py-3 border border-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                onClick={() => setShowCardForm(false)}
              >
                Cancel
              </button>

              <button
                className="w-1/2 py-3 bg-gradient-to-r from-[#5DC3FA] to-[#CAE58D] rounded-lg text-black text-sm font-medium hover:opacity-90 transition-opacity"
                onClick={handleSaveCard}
              >
                Save Card
              </button>
            </div>

          </div>

{/* mobile responsive  */}

          <div className="block md:hidden bg-[#1D232C] p-5 rounded-lg border animate-fadeIn">

            <p className="text-sm font-medium mb-3">Enter your card details</p>

            <div className="flex gap-4 text-xs">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-2/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 text-xs mt-4">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-2/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/3 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="w-full flex gap-3 mt-7">
              <button
                className="w-1/2 py-3 border border-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                onClick={() => setShowCardForm(false)}
              >
                Cancel
              </button>

              <button
                className="w-1/2 py-3 bg-gradient-to-r from-[#5DC3FA] to-[#CAE58D] rounded-lg text-black text-xs font-medium hover:opacity-90 transition-opacity"
                onClick={handleSaveCard}
              >
                Save Card
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
