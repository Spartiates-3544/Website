

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4fbe57ab.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/singletons.5bd70b5a.js"];
export const stylesheets = [];
export const fonts = [];
