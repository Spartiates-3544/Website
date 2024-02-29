

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Ressources/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.9a88d9bf.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/navigation.1de3f874.js","_app/immutable/chunks/singletons.5bd70b5a.js"];
export const stylesheets = ["_app/immutable/assets/5.eb5f7061.css"];
export const fonts = [];
