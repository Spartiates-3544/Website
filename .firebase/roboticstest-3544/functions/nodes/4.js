import * as server from '../entries/pages/Manage/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Manage/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Manage/+page.server.js";
export const imports = ["_app/immutable/nodes/4.20ec535e.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.844eb1a2.js"];
export const stylesheets = [];
export const fonts = [];
