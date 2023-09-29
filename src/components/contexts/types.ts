export type State = {
  rating: number;
  hover: number;
};

export type Action =
  | { type: "set_rating"; number: number }
  | { type: "set_hover"; value: number };
