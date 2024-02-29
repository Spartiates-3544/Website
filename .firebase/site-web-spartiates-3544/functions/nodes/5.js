

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Ressources/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3725a67e.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/navigation.919f115d.js","_app/immutable/chunks/singletons.07d690b1.js"];
export const stylesheets = ["_app/immutable/assets/5.eb5f7061.css"];
export const fonts = [];
