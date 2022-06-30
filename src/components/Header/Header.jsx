import React, { useState } from "react";
import { Logo } from "../../../assets/images/Logo";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { useSearchMovies } from "hooks/useSerachMovies";

const Header = () => {
  const [search, setSearch] = useState("");

  const { refetch, isFetching } = useSearchMovies(search);

  return (
    <>
      <nav className="px-6 py-3 flex flex-row items-center justify-between gap-4">
        <a
          href="/"
          className="outline-0 hover:opacity-90 focus:opacity-90 active:opacity-90"
        >
          <Logo fill="fill-primary" width={120} />
        </a>
        <form className="flex gap-4 max-w-xs bg-gray-800 rounded-full z-40">
          <div className="flex items-center relative">
            {isFetching ? (
              <FaSpinner className="animate-spin text-gray-400 absolute w-3 -left-5 z-10 sm:hidden md:block" />
            ) : null}
            <input
              className="appearance-none text-xs bg-transparent w-full py-1 px-4 text-ellipsis focus:outline-none text-gray-100 placeholder:text-gray-400 disabled:text-gray-400"
              type="text"
              value={search}
              placeholder="Ex: Back to the Future"
              aria-label="search"
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="flex items-center btn primary rounded-none pl-3 pr-4 rounded-tr-2xl rounded-br-2xl"
              disabled={isFetching}
              onClick={(e) => {
                e.preventDefault();
                refetch();
              }}
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </nav>
    </>
  );
};

export default Header;
