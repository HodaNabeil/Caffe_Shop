import { configureStore } from '@reduxjs/toolkit';
import menuCoffeSlice  from './Slices/MenuCoffeSlice';

import card from '../Store/Slices/Card'
export const store = configureStore({
  reducer: {
    coffe: menuCoffeSlice,
    order:card,
  },
})