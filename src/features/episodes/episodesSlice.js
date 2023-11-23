import { createSlice } from '@reduxjs/toolkit';


const initialStateValue = [
  {
    id: 1,
    title: 'The best microphone under $200',
    desc: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    categories: 'Gear',
    image: './images/episode_1.jpg'
  },
  {
    id: 2,
    title: 'Mic tricks to take you to the next level',
    desc: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
    categories: 'Tips & Tricks',
    image: './images/episode_2.jpg'
  },
  {
    id: 3,
    title: 'Should you get outboard audio gear?',
    desc: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
    categories: 'Gear',
    image: './images/episode_3.jpg'
  },
]

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: initialStateValue,
  reducers: {
    addEpisodes(state, action) {
      state.push(action.payload)
    }
  }
})

export const { addEpisodes } = episodesSlice.actions
export default episodesSlice.reducer