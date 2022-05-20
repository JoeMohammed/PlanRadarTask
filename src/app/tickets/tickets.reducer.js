import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    getTickets: (state, action) => {
      state.tickets = action.payload.tickets;
    },
    deleteTicket: (state, action) => {
      state.tickets = action.payload.tickets;
    },
    addTicket: (state, action) => {
      state.tickets = action.payload.tickets;
    },
    editTicket: (state, action) => {
      state.tickets = action.payload.tickets;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTickets, deleteTicket, addTicket, editTicket } =
  ticketsSlice.actions;

export default ticketsSlice.reducer;
