import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    id: 1,
    title: "The best microphone under $200",
    description:
      "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
    categories: "Gear",
    image: "./public/Frame.jpg",
  },

  {
    id: 2,
    title: "Mic tricks to take you to the next level",
    description:
      "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
    categories: "Episoed 2",
    image: "./public/Frame (1).jpg",
  },

  {
    id: 3,
    title: "Should you get outboard audio gear?",
    description:
      "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
    categories: "Episode 3",
    image: "./public/Frame (2).jpg",
  },
];




const episodesSlice =  createSlice({
name:'episodes',
initialState: initialStateValue,
reducers: {
    
}    
})

export default episodesSlice.reducer