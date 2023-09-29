import { useContext } from "react";
import { RatingContext } from "../contexts/ratingContext";

export default function useRating() {
  return useContext(RatingContext);
}
