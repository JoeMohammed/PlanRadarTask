import { useSelector } from "react-redux";
import TicketsSection from "./components/listSection";

export default function HomeScreen() {
  const ticketsList = useSelector((state) => state.tickets.tickets);

  return (
    <>
      {/* Tickets Section */}
      <TicketsSection ticketsList={ticketsList && ticketsList} />
    </>
  );
}
