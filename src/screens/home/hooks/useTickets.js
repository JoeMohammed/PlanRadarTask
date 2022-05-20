import { deleteTicket, editTicket } from "../../../app/tickets/tickets.reducer";
import { useDispatch, useSelector } from "react-redux";

export default function useTickets() {
  const ticketsList = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();

  function deleteHandler(id) {
    const newTicketsList = ticketsList?.filter((item) => item.API !== id);
    dispatch(deleteTicket({ tickets: newTicketsList }));
  }

  return { deleteHandler };
}
