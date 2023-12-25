import { configureStore } from '@reduxjs/toolkit';
import menuCoffeSlice  from './Slices/MenuCoffeSlice';

export const store = configureStore({
  reducer: {
    coffe: menuCoffeSlice
  },
})