import { EDIT_MESSAGE, SEND_EDIT_MESSAGE } from "../../constants/action_types";

export default function ReducerMessages(state = '', action) { 
    switch (action.type) {
        case EDIT_MESSAGE:
            return action.payload.numberMes;
        case SEND_EDIT_MESSAGE: 
            return ''
        default:
            return state;
    }
}