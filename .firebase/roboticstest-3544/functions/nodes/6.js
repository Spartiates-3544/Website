

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Ressources/Documents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.facfec5b.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.844eb1a2.js","_app/immutable/chunks/YearNav.8d19e878.js"];
export const stylesheets = ["_app/immutable/assets/6.3d0c986f.css","_app/immutable/assets/YearNav.5e70d678.css"];
export const fonts = [];
