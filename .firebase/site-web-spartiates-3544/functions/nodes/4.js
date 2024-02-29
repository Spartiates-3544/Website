import * as server from '../entries/pages/Manage/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Manage/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Manage/+page.server.js";
export const imports = ["_app/immutable/nodes/4.78af385d.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js"];
export const stylesheets = [];
export const fonts = [];
