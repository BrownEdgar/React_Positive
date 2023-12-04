import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = [
  {   
    id: 1,
    image: './images/image.jpg',
    title: 'Mr. Leonardo',
    categories:'Remote Programmer',
    desc: '“Modern desk style featured with tropical stuff with plant and the lighting for a warm, and comforting take on interior design minimalist. I love this design!. Thanks Interiorqu.”'
    }
 
]
const taskSlice = createSlice({
  name:'task',
  initialState: initialStateValue
})
export default taskSlice.reducer