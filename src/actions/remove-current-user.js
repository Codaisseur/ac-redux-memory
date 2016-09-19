export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export default function removeCurrentUser() {
  return {
    type: SIGN_OUT_USER
  }
}
