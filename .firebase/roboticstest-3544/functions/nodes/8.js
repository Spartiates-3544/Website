

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Sponsors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.896f8dcd.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.844eb1a2.js","_app/immutable/chunks/Carousel.e99bffa3.js"];
export const stylesheets = ["_app/immutable/assets/8.49bdd01a.css","_app/immutable/assets/Carousel.eed62b94.css"];
export const fonts = [];
