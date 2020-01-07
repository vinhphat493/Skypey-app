import { getMessages } from "../../../static-data";
import {
  SEND_MESSAGE,
  SEND_EDIT_MESSAGE,
  DELETE_MESSAGE
} from "../../constants/action_types";
import _ from "lodash";

export default function ReducerMessages(state = getMessages(10), action) {
  if (action.payload) {
    const { message, userId, numberMes } = action.payload;
    const allMessages = state[userId];
    let getObjMessage;
    switch (action.type) {
      case SEND_MESSAGE:
        const number = +_.keys(allMessages).pop() + 1;
        return {
          ...state,
          [userId]: {
            ...allMessages,
            [number]: {
              number,
              text: message,
              is_user_msg: true,
              isEdit: false,
              isDelete: false
            }
          }
        };
      case SEND_EDIT_MESSAGE:
        getObjMessage = allMessages[numberMes];
        return {
          ...state,
          [userId]: {
            ...allMessages,
            [numberMes]: {
              ...getObjMessage,
              text: message,
              isEdit: true
            }
          }
        };
      case DELETE_MESSAGE:
        getObjMessage = allMessages[numberMes];
        return {
          ...state,
          [userId]: {
            ...allMessages,
            [numberMes]: {
              ...getObjMessage,
              text: 'This message have deleted!',
              isDelete: true
            }
          }
        };
      default:
        return state;
    }
  }
  return state;
}
