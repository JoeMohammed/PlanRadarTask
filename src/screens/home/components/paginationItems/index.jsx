import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import TicketsItems from "../ticketsItems";

export default function PaginatedItems({ itemsPerPage, ticketsList }) {
  const { currentItems, pageCount, handlePageClick } = usePagination({
    itemsPerPage,
    ticketsList,
  });
  

  return (
    <>
      <TicketsItems currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="paginationContainer"
        pageClassName="page_item"
        pageLinkClassName="page_link"
        breakClassName="page_item"
        breakLinkClassName="page_link"
        previousClassName="page_item"
        previousLinkClassName="page_link"
        nextClassName="page_item"
        nextLinkClassName="page_link"
        activeClassName=""
        activeLinkClassName="page_link_active"
      />
    </>
  );
}
