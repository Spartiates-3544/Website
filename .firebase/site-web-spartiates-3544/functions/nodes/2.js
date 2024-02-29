

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.15977844.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Carousel.debab676.js","_app/immutable/chunks/index.f6997191.js"];
export const stylesheets = ["_app/immutable/assets/2.91748f48.css","_app/immutable/assets/Carousel.39150600.css"];
export const fonts = [];
