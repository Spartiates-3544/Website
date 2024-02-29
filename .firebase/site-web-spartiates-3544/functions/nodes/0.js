

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b627ebad.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.f6997191.js","_app/immutable/chunks/navigation.1de3f874.js","_app/immutable/chunks/singletons.5bd70b5a.js"];
export const stylesheets = ["_app/immutable/assets/0.bc3f1b07.css"];
export const fonts = [];
