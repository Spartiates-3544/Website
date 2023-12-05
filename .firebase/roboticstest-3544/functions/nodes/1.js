

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c874eb3f.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.844eb1a2.js","_app/immutable/chunks/singletons.1cdf2be0.js"];
export const stylesheets = [];
export const fonts = [];
