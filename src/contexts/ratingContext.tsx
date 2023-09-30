import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Action, State } from "./types";
import { STAGES } from "../constants/stages";

const initialState: State = {
  rating: 0,
  hover: 0,
  stage: STAGES.rating,
  comment: "",
  closeCard: false,
};

const ratingReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_rating":
      if (action.number >= 0 && action.number <= 5) {
        return {
          ...state,
          rating: action.number,
        };
      } else {
        return state;
      }
    case "set_hover":
      if (action.value >= 0 && action.value <= 5) {
        return {
          ...state,
          hover: action.value,
        };
      } else {
        return state;
      }
    case "change_stage":
      if (state.stage === "rating") {
        return {
          ...state,
          stage: STAGES.feedback,
        };
      } else {
        return {
          ...state,
          stage: STAGES.rating,
        };
      }
    case "set_comment":
      return {
        ...state,
        comment: action.comment,
      };
    case "send":
      return {
        ...state,
        stage: STAGES.thanks,
      };
    case "close_card":
      return {
        ...state,
        closeCard: true,
      };
    default:
      return state;
  }
};

export const RatingContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const RatingProvider = ({ children }: { children: ReactNode }) => {
  const value = useReducer(ratingReducer, initialState);

  return (
    <RatingContext.Provider value={value}>{children}</RatingContext.Provider>
  );
};
