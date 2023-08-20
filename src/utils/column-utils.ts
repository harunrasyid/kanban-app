import { State } from "../types/Types.ts";
import {
  COLUMN_TITLE_DOING,
  COLUMN_TITLE_DONE,
  COLUMN_TITLE_TODO,
} from "../constants/string-constants.ts";

export const stateTitle = (data: State) => {
  if (data === State.Todo) return COLUMN_TITLE_TODO;
  else if (data === State.Doing) return COLUMN_TITLE_DOING;
  else return COLUMN_TITLE_DONE;
};
