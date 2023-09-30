export type State = {
  rating: number;
  hover: number;
  stage: string;
  comment: string;
  closeCard: boolean;
};

export type Action =
  | { type: "set_rating"; number: number }
  | { type: "set_hover"; value: number }
  | { type: "change_stage" }
  | { type: "set_comment"; comment: string }
  | { type: "send" }
  | { type: "close_card" };
