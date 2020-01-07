import { SET_ACTIVE_USER_ID } from "../../constants/action_types";

export default function ReducerActiveUserId(state = null, action) {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
}