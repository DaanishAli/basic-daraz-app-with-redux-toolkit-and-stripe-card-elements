import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    Products: [],
    TotalPrice: 0,
    TotalQuantity: 0,
    BuyProducts: []
}
export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        individualProduct: (state, action) => {
            return { ...state, product: action.payload }
        },
        addToCart: (state, action) => {
            const check = state.Products.find((prevProd) => prevProd.id === action.payload.id)
            if (check) {
                const index = state.Products.findIndex((product) => product.id === action.payload.id)
                const product = action.payload
                state.TotalPrice = state.TotalPrice - (state.Products[index].discountPrice * state.Products[index].quantity) + (product.discountPrice * product.quantity)
                state.TotalQuantity = ((state.TotalQuantity - state.Products[index].quantity) + product.quantity)

                state.Products[index] = product;

                return state
            } else {
                const product = action.payload
                return {
                    ...state,
                    Products: [...state.Products, action.payload],
                    TotalPrice: state.TotalPrice + product.discountPrice * product.quantity,
                    TotalQuantity: state.TotalQuantity + product.quantity,
                }
            }
        },
        increment: (state, action) => {

            const index = state.Products.findIndex((product) => {
                return product.id === action.payload.id
            })
            state.Products[index].quantity += 1;
            state.TotalPrice = state.TotalPrice + action.payload.discountPrice;
            state.TotalQuantity = state.TotalQuantity + 1
            return state
        },
        decrement: (state, action) => {
            if (action.payload.quantity > 1) {
                const index = state.Products.findIndex((product) => {
                    return product.id === action.payload.id
                })
                state.Products[index].quantity -= 1;
                state.TotalPrice = state.TotalPrice - action.payload.discountPrice;
                state.TotalQuantity = state.TotalQuantity - 1
                return state
            }
        },
        removeToCart: (state, action) => {
            const found = state.Products.filter(initproduct => initproduct.id !== action.payload.id)
            state.TotalQuantity = state.TotalQuantity - action.payload.quantity;
            state.TotalPrice = state.TotalPrice - (action.payload.discountPrice * action.payload.quantity)
            state.Products = [...found]
            return state
        },
        buyToProduct: (state, action) => {
            state.BuyProducts = [action.payload]
            return state
        },
        addToProceed: (state) => {
            state.BuyProducts = [...state.Products]
            return state
        },
        emptyShoppingDetail: (state) => {

            return {
                Products: [],
                TotalPrice: 0,
                TotalQuantity: 0,
                BuyProducts: []
            }
        }


    },
})

export const { individualProduct, addToCart, increment, decrement, removeToCart, buyToProduct, addToProceed, emptyShoppingDetail } = cartSlice.actions

export default cartSlice.reducer