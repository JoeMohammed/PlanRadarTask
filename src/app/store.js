import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./tickets/tickets.reducer";

const store = configureStore({
  reducer: { tickets: ticketsReducer },
});

export default store;
