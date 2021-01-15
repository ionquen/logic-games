import json from './ru-games.json'
function gameById(gameId) {
  return json[gameId]
}
function allGames() {
  return json
}
export {gameById, allGames}