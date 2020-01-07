import { generateUser } from '../../../static-data';

export default function ReducerUser(state = generateUser(), action) {
    return state;
}