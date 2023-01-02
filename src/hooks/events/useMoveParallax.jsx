import { useRef, useState } from "react";

const useMoveParallax = (tensionX = 50, tensionY = tensionX * 1.2) => {
  const ref = useRef(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const getCoords = (event) => {
    setCoords({
      x: (-event.pageX - ref.current.offsetLeft) / tensionX,
      y: (-event.pageY - ref.current.offsetTop) / tensionY,
    });
  };

  return { coords, getCoords, ref };
};

export default useMoveParallax;
