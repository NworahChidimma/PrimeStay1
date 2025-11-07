import { createSlice } from '@reduxjs/toolkit'

export const SavedSlice = createSlice({
    name:"booking",
    initialState:{
        booking:[],
        saved:[],
    },
    reducers:{
        bookedPlaces:(state,action) => {
            state.booking.push({...action.payload})
        },
        removeBooking: (state, action) => {
      state.booking = state.booking.filter((_, index) => index !== action.payload);
    },
   savedPlaces: (state, action) => {
      const hotelIndex = state.saved.findIndex(h => h.id === action.payload.id);
      if (hotelIndex >= 0) {
        state.saved.splice(hotelIndex, 1);
      } else {
         state.saved.push(action.payload);
      }
    },
    removeSaved: (state, action) => {
      state.saved = state.saved.filter((_, index) => index !== action.payload);
    },
  }
})

export const {bookedPlaces,removeBooking,savedPlaces,removeSaved} =SavedSlice.actions


export default SavedSlice.reducer