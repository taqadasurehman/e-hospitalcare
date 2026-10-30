import React from "react";
import ReactPaginate from "react-paginate";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

function ReactPagination({ pageCount, handlePageClick }) {
  const link =
    "flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-2 text-sm text-slate-600 transition hover:bg-slate-100";
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<TbChevronRight size={16} />}
      previousLabel={<TbChevronLeft size={16} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center gap-1"
      pageLinkClassName={link}
      previousLinkClassName={link}
      nextLinkClassName={link}
      breakLinkClassName={link}
      activeLinkClassName="!bg-brand-600 !text-white"
      disabledLinkClassName="opacity-40 pointer-events-none"
    />
  );
}

export default ReactPagination;
