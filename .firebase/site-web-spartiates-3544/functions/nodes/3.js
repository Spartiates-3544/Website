

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.235f1610.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js","_app/immutable/chunks/Carousel.debab676.js"];
export const stylesheets = ["_app/immutable/assets/3.0b8e8e1d.css","_app/immutable/assets/Carousel.39150600.css"];
export const fonts = [];
