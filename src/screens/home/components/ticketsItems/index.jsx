import useTickets from "../../hooks/useTickets";
import TicketCard from "../utils/card";

export default function TicketsItems({ currentItems }) {
  const { deleteHandler } = useTickets();
  return (
    <div className="flex-div">
      {currentItems?.map((item, idx) => {
        return (
          <div key={idx} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <TicketCard
              title={item.API}
              desc={item.Description}
              priority={item.Cors}
              prColor={item.Cors === "yes" ? "yes" : "no"}
              status={item.Category}
              deleteClick={(id) => {
                deleteHandler(item.API);
              }}
              toHref={`/edit-ticket/${idx}`}
            />
          </div>
        );
      })}
    </div>
  );
}
