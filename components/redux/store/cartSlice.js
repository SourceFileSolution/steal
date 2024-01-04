import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  value: [],
};

//A function to generate random RGB values
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

 const addcart=()=> {
    return[...state, action.payload]
}

//State slice
export const colorSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state) => {
      state.value = [...state.value, addcart()];
    },
  },
});

// Action creators are automatically generated for each case reducer function 
export const { setCart } = colorSlice.actions;

export default colorSlice.reducer;