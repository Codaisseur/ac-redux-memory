// src/reducers/currentUser.js
import { UPDATE_CURRENT_USER } from '../actions/update-current-user'

export default function updateCurrentUser(state = null, { type, payload }) {
  if (type === UPDATE_CURRENT_USER) {
    return payload
  } else {
    return state
  }
}
