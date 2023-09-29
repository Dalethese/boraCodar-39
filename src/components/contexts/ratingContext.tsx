import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Action, State } from "./types";

const initialState: State = {
  rating: 0,
  hover: 0,
};

const ratingReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_rating":
      return {
        ...state,
        rating: action.number,
      };
    case "set_hover":
      return {
        ...state,
        hover: action.value,
      };
    default:
      return state;
  }
};

export const RatingContext = createContext<[State, Dispatch<Action>]>(
  {} as [State, Dispatch<Action>]
);

export const RatingProvider = ({ children }: { children: ReactNode }) => {
  const value = useReducer(ratingReducer, initialState);

  return <RatingContext.Provider value={value}>{children}</RatingContext.Provider>;
};
