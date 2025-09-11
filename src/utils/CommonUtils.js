const modules = import.meta.glob("../assets/*.png", { eager: true });


export const IMAGES = {};
for (const path in modules) {
  const name = path.split("/").pop().replace(".png", "");
  IMAGES[name] = modules[path].default;
}

export function getGamesByGenre(genre, games) {
  console.log(games)
   return games.filter(game => game.genre.includes(genre));
}

export const GENRES = {
    saveTheWorld: 'saveTheWorld',
    adventure: 'adventure',
    sports: 'sports',
    building: 'building',
    raising: 'raising',
    multiplayer: 'multiplayer',
    puzzle: 'puzzle',
    party: 'party'
}