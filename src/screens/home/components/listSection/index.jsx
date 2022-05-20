import PaginatedItems from "../paginationItems";

export default function TicketsSection({ ticketsList }) {
  return (
    <section className="py-10">
      <div className="container">
        <PaginatedItems ticketsList={ticketsList} itemsPerPage={9} />
      </div>
    </section>
  );
}
