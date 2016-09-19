export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'

export default function updateCurrentUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user
  }
}
