import React, { useState, useEffect } from "react";
import AddFavoritesButton from "./AddFavoritesButton";
import { getRandomNumberInclusive } from "helpers/mathFunctions";
import useMoveParallax from "hooks/events/useMoveParallax";
import { useHeroData } from "hooks/useHeroeData";
import { useFavouritesData } from "hooks/useFavouritesData";
import { useAddFavouriteItem } from "hooks/useAddFavourite";

const HeroMenu = () => {
  const { coords, getCoords, ref } = useMoveParallax();

  const { data } = useHeroData();
  const { data: allFavourites } = useFavouritesData();
  const { isLoading: addLoading, mutate: addFavourite } = useAddFavouriteItem();

  const [favouritePosition, setfavouritePosition] = useState(null);

  useEffect(() => {
    if (data?.data?.length > 0) {
      const number = getRandomNumberInclusive(0, data?.data?.length - 1 || 0);
      setfavouritePosition(number);
    }
  }, [data]);

  const isFavorite = allFavourites?.data.some(
    (item) => item.id === data?.data[favouritePosition]?.id
  );

  const currentItem = data?.data[favouritePosition];

  return (
    <section
      className="relative flex flex-row justify-end h-3/4  max-h-[480px]"
      onMouseMove={getCoords}
      ref={ref}
    >
      <aside className="absolute p-4 md:p-10 flex items-center text-white z-10 w-full h-full">
        <div className="flex flex-col gap-6 text-center mx-auto md:mx-0 max-w-lg md:text-left">
          <h1 className="relative md:justify-start text-4xl md:text-5xl font-title line-clamp-3">
            {currentItem?.title}
            <span className="relative bottom-1.5 ml-2 py-1 px-1.5 text-xs uppercase text-center whitespace-nowrap font-bold bg-primary text-white rounded">
              New
            </span>
          </h1>
          <p className="line-clamp-3">{currentItem?.description}</p>
          <div className="flex flex-col gap-4 justify-start">
            <div className="flex gap-2 flex-col justify-center md:justify-start">
              <div className="flex gap-4 justify-center md:justify-start">
                <p>
                  <span className="font-bold">Episodes: </span>
                  {currentItem?.episodes}
                </p>
                <p>
                  <span className="font-bold">Director: </span>
                  {currentItem?.director}
                </p>
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                {currentItem?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs inline-block py-1 px-2.5 text-center whitespace-nowrap font-bold bg-gray-200 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 justify-center md:justify-start mt-6">
              <button type="button" className="btn primary">
                See more
              </button>
              <AddFavoritesButton
                isFavorite={isFavorite}
                isLoading={addLoading}
                onClick={() => addFavourite(currentItem?.id)}
              />
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`flex h-full bg-cover w-screen opacity-30 bg-center md:opacity-50 relative md:animation md:fade-in md:bg-right-top md:bg-[length:110%]`}
        style={{
          backgroundImage: `url(${currentItem?.image})`,
          backgroundPosition: `${coords.x}px ${coords.y}px`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-r opacity-60 from-black md:via-[#000000a9] md:opacity-100 md:to--transparent"></div>
      </div>
    </section>
  );
};

export default HeroMenu;
