import React from "react";
import { FaSpinner } from "react-icons/fa";
import { buttons } from "./constants";

const AddFavoritesButton = ({ isFavorite, isLoading, onClick }) => (
  <button
    className="flex items-center btn secondary"
    onClick={onClick}
    disabled={isLoading}
  >
    {isLoading ? (
      <FaSpinner className="animate-spin" />
    ) : isFavorite ? (
      buttons[1].icon
    ) : (
      buttons[0].icon
    )}
    {isFavorite ? buttons[1].text : buttons[0].text}
  </button>
);

export default AddFavoritesButton;
