import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Caveat&family=EB+Garamond&family=Meow+Script&family=Poppins&display=swap');nav.svelte-7a2r02.svelte-7a2r02{display:grid;place-items:center;padding-top:0;z-index:99}#desktopNav.svelte-7a2r02.svelte-7a2r02{display:flex}#desktopNav.svelte-7a2r02.svelte-7a2r02::after{content:' ';background-color:#191D1B;width:100%;height:100%;position:fixed;left:0;top:0;z-index:var(--index);opacity:var(--opacity);transition:300ms}#desktopNav.svelte-7a2r02 div.svelte-7a2r02{font-family:'Poppins', sans-serif;text-decoration:none;font-weight:500;padding:15px;color:white;opacity:20%;transition:all 100ms ease-in-out;font-size:100%}#desktopNav.svelte-7a2r02 div.svelte-7a2r02:hover{opacity:30%;cursor:pointer}#burgerMenu.svelte-7a2r02.svelte-7a2r02{width:100vw;display:grid;place-content:left}#mobileNav.svelte-7a2r02.svelte-7a2r02{padding-left:30px;padding-top:35px;width:30px}#mobileNavMenu.svelte-7a2r02.svelte-7a2r02{background-color:#191D1B;position:fixed;width:100vw;height:101vh;top:0;padding-top:30px;padding-left:30px;list-style-type:none;font-size:200%;z-index:100}#mobileNavMenu.svelte-7a2r02 li a.svelte-7a2r02{text-decoration:none}#backArrow.svelte-7a2r02.svelte-7a2r02{height:100px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  let index = -1;
  $$result.css.add(css);
  return ` <nav style="${"--opacity: " + escape(opacity, true) + "; --index: " + escape(index, true)}" class="svelte-7a2r02">${`<div id="desktopNav" class="svelte-7a2r02"><div class="svelte-7a2r02" data-svelte-h="svelte-1jg4xw">Home</div> <div class="svelte-7a2r02" data-svelte-h="svelte-15k5ck6">Blog</div> <div class="svelte-7a2r02" data-svelte-h="svelte-1y0k9we">Resources</div> <div class="svelte-7a2r02" data-svelte-h="svelte-yiv9o9">Sponsors</div> <div class="svelte-7a2r02" data-svelte-h="svelte-115bq07">Contact Us</div></div>`}</nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
