

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7f262615.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.844eb1a2.js","_app/immutable/chunks/Carousel.e99bffa3.js"];
export const stylesheets = ["_app/immutable/assets/2.74d7843d.css","_app/immutable/assets/Carousel.eed62b94.css"];
export const fonts = [];
