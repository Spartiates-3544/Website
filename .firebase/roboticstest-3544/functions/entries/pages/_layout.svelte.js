import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Caveat&family=EB+Garamond&family=Meow+Script&family=Poppins&display=swap');nav.s-7IPF32Wcq3s8{display:grid;place-items:center;padding-top:10px;z-index:99}a.s-7IPF32Wcq3s8{font-family:'Poppins', sans-serif;text-decoration:none;font-weight:500;padding:15px;color:white;opacity:20%;transition:all 100ms ease-in-out}a.s-7IPF32Wcq3s8:hover{opacity:30%;cursor:pointer}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="s-7IPF32Wcq3s8"><div><a href="/" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-5a0zws">Home</a> <a href="https://www.chiefdelphi.com/u/hyute/summary" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-10urmy9">Blog</a> <a href="/Ressources" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-1fz336q">Resources</a> <a href="/Sponsors" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-1dr8alf">Sponsors</a> <a href="/Contact" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-2g9szt">Contact Us</a></div></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
