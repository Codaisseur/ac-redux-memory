// src/reducers/currentUser.js
import { UPDATE_CURRENT_USER } from '../actions/update-current-user'

export default function updateCurrentUser(
  state = JSON.parse(localStorage.getItem('memoryUser') || 'null'), { type, payload }) {
  if (type === UPDATE_CURRENT_USER) {
    localStorage.setItem('memoryUser', JSON.stringify(payload))
    return payload
  } else {
    return state
  }
}
