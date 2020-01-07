import user from './reducerUser/reducerUser';
import messages from "./reducerMessages/reducerMessages";
import typing from "./reducerTyping/reducerTyping";
import contacts from "./reducerContacts/reducerContacts";
import activeUserId from './reducerActiveUserId/reducerActiveUserId';
import editMesNumber from './reducerEditMessage/reducerEditMessage';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeUserId,
  editMesNumber
});