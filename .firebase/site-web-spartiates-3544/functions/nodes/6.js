

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Ressources/Documents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.7795f8f3.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/YearNav.3dfc4bfb.js"];
export const stylesheets = ["_app/immutable/assets/6.4cdcad30.css","_app/immutable/assets/YearNav.5fe85925.css"];
export const fonts = [];
