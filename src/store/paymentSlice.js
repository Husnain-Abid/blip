import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPayment: false,
  showCharger: false,

};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setShowPayment: (state, action) => {
      state.showPayment = action.payload;
    },
    setShowCharger: (state, action) => {
      state.showCharger = action.payload;
    },

  },
});

export const { setShowPayment, setShowCharger } = paymentSlice.actions;
export default paymentSlice.reducer;
