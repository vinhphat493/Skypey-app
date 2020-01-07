import {
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  SEND_EDIT_MESSAGE,
  DELETE_MESSAGE
} from "../../constants/action_types";

export default function ReducerTyping(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return '';
    case EDIT_MESSAGE:
      return action.payload.message.text;
    case SEND_EDIT_MESSAGE:
      return '';
    case DELETE_MESSAGE:
      return '';
    default:
      return state;
  }
}
