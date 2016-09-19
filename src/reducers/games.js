// src/reducers/games.js

export default function updateGames(state = [], { type, payload }) {
  switch(type) {
    case 'GAMES_FETCHED' :
      return payload

    case 'GAME_CREATED' :
      return state.concat([payload])

    default :
      return state
  }
}
