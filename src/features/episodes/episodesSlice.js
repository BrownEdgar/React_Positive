import { createSlice } from "@reduxjs/toolkit"



const initialStateValue = [
{
    id: 1,
    title: 'The best microphone under $200',
    desc: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    categories: 'Gear',
    images: './images/episodes_1.jpg'
},
{
    id: 2,
    title: 'Mic tricks to take you to the next level',
    desc: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    categories: 'Gear',
    images: './images/episodes_2.jpg'
},
{
    id: 3,
    title: 'Should you get outboard audio gear?',
    desc: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    categories: 'Gear',
    images: './images/episodes_3.jpg'
},
]


const episodeSlice = createSlice({
    name: 'episodes',
    initialState: initialStateValue,
    reducer: {}
})

export default episodeSlice.reducer