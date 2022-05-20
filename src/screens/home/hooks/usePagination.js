import { useEffect, useState } from "react";

export default function usePagination({ itemsPerPage, ticketsList }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    if (ticketsList?.length > 0) {
      setCurrentItems(ticketsList?.slice(itemOffset, endOffset));
      ticketsList &&
        setPageCount(Math.ceil(ticketsList?.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, ticketsList]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ticketsList?.length;

    setItemOffset(newOffset);
  };

  return { currentItems, pageCount, handlePageClick };
}
