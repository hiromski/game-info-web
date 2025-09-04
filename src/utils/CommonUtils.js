const modules = import.meta.glob("../assets/*.png", { eager: true });


export const IMAGES = {};
for (const path in modules) {
  const name = path.split("/").pop().replace(".png", "");
  IMAGES[name] = modules[path].default;
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