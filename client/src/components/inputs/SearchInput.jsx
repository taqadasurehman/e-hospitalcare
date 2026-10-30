import React, { useRef } from "react";
import { TbSearch } from "react-icons/tb";

function SearchInput({ onSearch }) {
  const search = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search.current.value);
  };
  return (
    <form className="w-full sm:w-80" onSubmit={handleSearch}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <TbSearch
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          ref={search}
          type="text"
          id="simple-search"
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
          placeholder="Search and press Enter"
        />
      </div>
    </form>
  );
}

export default SearchInput;
