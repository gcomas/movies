import React from "react";
import { useGetMovies } from "../../hooks/useGetMovies";

const MovieSlider = ({ search, title }) => {
  const { data: movies } = useGetMovies(search);

  return (
    <>
      <h1 className="capitalize text-white font-bold p-3">{title}</h1>

      <article className="flex px-4 flex-nowrap gap-7 py-3 snap-x snap-mandatory w-full overflow-auto">
        {movies?.data?.Search.map(({ Title, Poster, Year }) => (
          <div
            key={Poster}
            className="relative snap-center snap-always flex flex-col md:flex-row min-w-[150px] h-[250px] rounded-lg overflow-hidden bg-contain bg-center"
            style={{
              backgroundImage: `url(${Poster})`,
            }}
          >
            <div className="group/item absolute flex flex-col justify-between h-full w-[100%] hover:fill-teal-50">
              <div className=" bg-gradient-to-b from-black p-2  opacity-0 group-hover/item:opacity-100 pb-28">
                <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                  {Title}
                </p>
                <span className="block text-xs mt-2 text-gray-900 dark:text-white">
                  Year: {Year}
                </span>
              </div>
              <button
                type="button"
                className="btn primary shadow-gray-900/50 small m-2 opacity-0 group-hover/item:opacity-100"
              >
                see more
              </button>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default MovieSlider;
