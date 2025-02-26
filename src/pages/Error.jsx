import React from 'react'
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPaymentDetail, setShowCharger, setShowPayment, setStepThree, setStepTwo } from '../store/paymentSlice';

export default function Error() {

const navigate = useNavigate();
const dispatch = useDispatch();

const handleNav = ()=>{

  navigate("/")
  
  dispatch(setShowPayment(false))
  dispatch(setShowCharger(false))

  dispatch(setStepTwo(false))
  dispatch(setStepThree(false))

  dispatch(setPaymentDetail(false))





}


  return (
    <div className="min-h-screen  flex flex-col  font-satoshi bg-[#161B21] text-white p-6 relative ">

      <div className="flex-grow flex flex-col justify-center items-center ">


        {/* Logo */}
        <div className="flex justify-center md:mb-10 ">
          <img src={logo} alt="BLIP Logo" className="w-28 md:w-36 " />
        </div>

        {/* Title */}
        <h1 className="text-center text-4xl md:text-6xl font-bold  mb-4 md:mb-6">
          Whoops!      </h1>
        {/* Title */}
        <p className="text-center text-base md:text-xl font-medium mb-5 md:mb-5">
          Seems like you got zapped...      </p>
        {/* Title */}
        <p className="hidden md:block text-center  text-base md:text-xl font-normal mb-5 md:mb-8">
          404 error – return to home page and try again.    
            </p>
        
        
        <p className="block md:hidden text-center  text-base md:text-xl font-normal mb-6 md:mb-6">
          404 error – return to home <br/> page and try again.    
            </p>

        <div className="text-center">

          <button className='py-2.5 md:py-3 px-6 bg-gradient-to-r from-[#5DC3FA] to-[#CAE58D] rounded-lg text-black text-sm font-bold hover:opacity-90 transition-opacity'
          onClick={handleNav}
          >
            Return home
          </button>

        </div >



      </div>



      {/* Footer - Takes up space dynamically */}
      <div className="w-full relative px-8 pt-2.5 ">
        <div className="max-w-full md:max-w-[124px] mx-auto border-t border-white/20 md:border-white/30 pt-3 md:pt-6"></div>
        <p className="text-xs md:text-sm text-center text-white/60">
          Copyright @ 2025. All Rights Reserved.
        </p>
      </div>

      {/* footer  */}




    </div>
  )
}
