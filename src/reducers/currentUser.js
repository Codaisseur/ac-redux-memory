// src/reducers/currentUser.js
import { UPDATE_CURRENT_USER } from '../actions/update-current-user'
import { SIGN_OUT_USER } from '../actions/remove-current-user'

export default function updateCurrentUser(
  state = JSON.parse(localStorage.getItem('memoryUser') || 'null'), { type, payload }) {
  switch (type) {
    case UPDATE_CURRENT_USER :
      localStorage.setItem('memoryUser', JSON.stringify(payload))
      return Object.assign({}, payload)

    case SIGN_OUT_USER :
      localStorage.removeItem('memoryUser')
      return null

    default :
      return state
  }
}
