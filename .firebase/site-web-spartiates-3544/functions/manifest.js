export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["goob.png","test.gltf","test2.gltf"]),
	mimeTypes: {".png":"image/png",".gltf":"model/gltf+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.7e8b3520.js","app":"_app/immutable/entry/app.6b835f21.js","imports":["_app/immutable/entry/start.7e8b3520.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/singletons.5bd70b5a.js","_app/immutable/entry/app.6b835f21.js","_app/immutable/chunks/scheduler.56ee4824.js","_app/immutable/chunks/index.33135bb5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./entries/endpoints/_server.js'))
			},
			{
				id: "/Contact",
				pattern: /^\/Contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Manage",
				pattern: /^\/Manage\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Ressources",
				pattern: /^\/Ressources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Ressources/Documents",
				pattern: /^\/Ressources\/Documents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Ressources/Photos",
				pattern: /^\/Ressources\/Photos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Sponsors",
				pattern: /^\/Sponsors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
