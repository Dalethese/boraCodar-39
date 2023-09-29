export type State = {
  rating: number;
  hover: number;
  stage: string;
};

export type Action =
  | { type: "set_rating"; number: number }
  | { type: "set_hover"; value: number }
  | { type: "change_stage" };
