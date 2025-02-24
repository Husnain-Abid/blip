import React from 'react'
import lock from "../assets/images/lock.png";
import { useDispatch } from 'react-redux';
import { setShowCharger, setShowPayment, setStepThree } from '../store/paymentSlice';

export default function SSLNote({ setShowSSLNote }) {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(setShowPayment(false));
        setShowSSLNote(false);
        dispatch(setShowCharger(true));
        dispatch(setStepThree(true));
    }


    return (
        <>

            {/* SSL Notice */}
            <div className="bg-[#E3F7ED] text-black p-3.5 rounded-xl mt-6 flex items-center gap-2 animate-fadeIn">
                <img src={lock} alt="lock" />
                <p className="text-sm font-medium">Protected by SSL Encryption—All transactions are securely processed.</p>
            </div>

            {/* Continue Button */}
            <button
                onClick={handleClick}

                className="w-full py-3 mt-6 rounded-xl text-center text-black font-bold text-xs md:text-lg bg-gradient-to-r from-[#5DC3FA] to-[#CAE58D] hover:opacity-90 transition-opacity">
                Continue
            </button>


        </>
    )
}
