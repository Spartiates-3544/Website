

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Ressources/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.f6007fd1.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.844eb1a2.js"];
export const stylesheets = ["_app/immutable/assets/5.963be1c7.css"];
export const fonts = [];
