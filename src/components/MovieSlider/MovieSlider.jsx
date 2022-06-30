import React from "react";
import { useGetMovies } from "../../hooks/useGetMovies";

const MovieSlider = ({ search, title }) => {
  const { data: movies } = useGetMovies(search);

  return (
    <>
      <h1 className="capitalize text-white">{title}</h1>
      <article className="flex px-4 flex-nowrap gap-7 py-3 snap-x snap-mandatory w-full overflow-auto">
        {movies?.data?.Search.map(({ Title, Poster, Year }) => (
          <div
            key={Poster}
            className="snap-center flex flex-col md:flex-row h-[370px] md:h-[250px] min-w-[200px] md:min-w-[400px] rounded-lg bg-gradient-to-t from-gray-800 to-gray-900  overflow-hidden"
          >
            <div className="min-w-[130px] overflow-hidden">
              <img src={Poster} className="md:h-full w-full" alt={Title} />
            </div>
            <div className="flex flex-col h-full justify-between p-3 md:p-5 md:w-[250px] ">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                {Title}
              </h5>
              <div className="flex flex-col gap-2">
                <span className="block text-right text-sm text-gray-900 dark:text-white">
                  Year: {Year}
                </span>
                <button
                  type="button"
                  className="btn primary shadow-gray-900/50 small"
                >
                  Information
                </button>
                <button
                  type="button"
                  className="btn secondary py-2 font-light shadow-gray-900/50 small"
                >
                  Add to favourites
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default MovieSlider;
