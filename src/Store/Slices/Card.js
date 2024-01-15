

import {createSlice} from '@reduxjs/toolkit'
export const productsSilce = createSlice({
  initialState:[],
  name:"productsSilce ",
  reducers: {
    addProduct: (state, action) => {
      const finProduct = state.find((product)=> product.id === action.payload.id) 
      if(finProduct) {
        finProduct.qauntity +=1 
      }else{
        const cloneproduct = {...action.payload , qauntity: 1}
          state.push(cloneproduct)
      }
    },
    deleteProduct: (state,action)=> {
    return  state.filter((product)=> product.id !== action.payload.id)
    },
    clearProduct: (state, action) => {
      return []
    },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.find((product) => product.id === productId);
      if (product) {
        if (product.hasOwnProperty('qauntity')) {
          product.qauntity += 1;
        } else {
          product.qauntity = 1;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.find((product) => product.id === productId);
      if (product && product.qauntity > 1 ) {
        if (product.hasOwnProperty('qauntity')) {
          product.qauntity -= 1;
        } else {
          product.qauntity = 1;
        }
      }
    }
    
  }
  
}

)

export const {addProduct,clearProduct,deleteProduct,incrementQuantity,decreaseQuantity} = productsSilce.actions;
export default productsSilce.reducer






