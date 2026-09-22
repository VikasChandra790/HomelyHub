// managing booking

// store all the bookings
// store individual booking details
// track the api loading state
// Add new bookings when a booking is made
// update the booking details when we receive the booking details from the backend

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  bookingDetails: {},
  loading: false
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
    reducers: {
        setBookingRequest(state) {
            state.loading = true;
        },
        // stores all the bookings received from the api
        setBookings(state, action) {
            state.bookings = action.payload;
            state.loading = false;
        },
        addBooking(state, action) {
            state.bookings.push(action.payload);
        },
        setBookingDetails(state, action) {
            state.bookingDetails = action.payload.bookings;
        }
    }
});

export const { setBookingRequest, setBookings, addBooking, setBookingDetails } = bookingSlice.actions;

export default bookingSlice;