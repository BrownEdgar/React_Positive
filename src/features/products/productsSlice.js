import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = [
    { id: 1, title: '3D Soft Curves', vendor: "Esther Howard", price: 0.85, image: './Rectangle 11.jpg' },
    { id: 2, title: 'The mystery of the black square', vendor: "Jenny Wilson", price: 0.24, image: './Rectangle 11.jpg' },
    { id: 3, title: 'Pink Cloud', vendor: "Floyd Miles", price: 0.3, image: './Rectangle 11.jpg' },
    { id: 4, title: '3D Ethereum', vendor: "Jane Cooper", price: 0.12, image: './Rectangle 11.jpg' },

]

const productsSlice = createSlice({
    name: 'products',
    initialState: initialStateValue,
    reducers: {}
})

export const getAllProducts = (state) => state.products
export default productsSlice.reducer
