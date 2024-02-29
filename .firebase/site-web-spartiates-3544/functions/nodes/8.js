

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Sponsors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.134c8b22.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/Carousel.debab676.js"];
export const stylesheets = ["_app/immutable/assets/8.7b3d986e.css","_app/immutable/assets/Carousel.39150600.css"];
export const fonts = [];
