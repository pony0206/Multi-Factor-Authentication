// buttonSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../index";
interface ButtonState {
  activeButton: string | null;
}

const initialState: ButtonState = {
  activeButton: "Posts",
};

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setActiveButton: (state, action: PayloadAction<string>) => {
      {
        
          state.activeButton = action.payload
          
      }
    },
  },
});

export const selectButton = (state: RootState) => state.button.activeButton;
export const { setActiveButton } = buttonSlice.actions;
export default buttonSlice.reducer;