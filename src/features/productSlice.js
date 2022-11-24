import { createSlice } from '@reduxjs/toolkit'

import img1 from '../images/freshsale/img1.jpg'
import img2 from '../images/freshsale/img2.jpg'
import img3 from '../images/freshsale/img3.jpg'
import img4 from '../images/freshsale/img4.jpg'
import img5 from '../images/freshsale/img5.jpg'
import img6 from '../images/freshsale/img6.jpg'

const initialState = {
    initProducts: [
        { id: 1, image: img5, price: 500, discount: 59, discountPrice: 203, quantity: 1, discription: "Silicone Back Bath Shower Wash Body Belt Brush Bath Towel Exfoliating Body Brush For Bathroom Accessories Nylon Towel Body " },
        { id: 2, image: img2, price: 2500, discount: 48, discountPrice: 1299, quantity: 1, discription: "Wireless Headset S8_Bluetooth ear_bud Single Ear Multicolo " },
        { id: 3, image: img3, price: 559, discount: 23, discountPrice: 430, quantity: 1, discription: "LOreal Paris Elvive Color Protect Shampoo 360 ML - For Colored Hair" },
        { id: 4, image: img4, price: 649, discount: 25, discountPrice: 487, quantity: 1, discription: "iGarnier Color Naturals - 4 Brown Hair Color" },
        { id: 5, image: img1, price: 2499, discount: 70, discountPrice: 749, quantity: 1, discription: "i12 Airpod_Airpods Wireless headphones Wireless handfree Wireless handsfree Wireless earphones Wireless bluetooth handfree Wireless headset Wireless earbuds Bluetooth headphones Bluetooth handfree Bluetooth handsfree Bluetooth earphones i7 i7s i11 " },
        { id: 6, image: img6, price: 1800, discount: 8, discountPrice: 1650, quantity: 1, discription: "Track Suits for Men 2 piece set Sweatsuit Hoodi    " },
    ],
    product: {},
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        individualProduct: (state, action) => {
            return { ...state, product: state.initProducts.find(product => product.id === action.payload.id) }
        },

    },
})

export const { individualProduct } = productSlice.actions

export default productSlice.reducer