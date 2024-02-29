import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-b310oo-reveal{0%{height:100%}100%{height:0%}}main.svelte-b310oo.svelte-b310oo{height:calc(100vh - 60px);width:100vw}.optionContainer.svelte-b310oo.svelte-b310oo{height:calc(var(--sizeFactor) * 400px);width:calc(var(--sizeFactor) * 290px);background-color:aliceblue;position:relative;cursor:pointer}#gallery.svelte-b310oo.svelte-b310oo{background-image:url('https://cdn.discordapp.com/attachments/1051259930914594879/1066200923661156483/PXL_20230120_223220900.jpg?ex=6573e1fd&is=65616cfd&hm=5061634083cad109c4eeedbdbfccc0b78fbca8411e419e8fc4a850b52bf1e3b8&')}#documents.svelte-b310oo.svelte-b310oo{background-image:url('https://i.pinimg.com/736x/36/ee/19/36ee197db6bad43a83024320ee3da5d0.jpg')}.imgContainer.svelte-b310oo.svelte-b310oo{width:100%;height:100%;background-size:cover;background-position:center;position:absolute;filter:drop-shadow(#ffffff65 0 0 25px);transition:400ms;transition-timing-function:ease-in-out}.text.svelte-b310oo.svelte-b310oo{position:absolute;top:37%;font-size:calc(var(--sizeFactor) * 500%);width:200%;left:-50%;text-align:center;mix-blend-mode:exclusion;color:#fff;transition:250ms;transition-timing-function:ease-in-out}.optionContainer.svelte-b310oo:hover .imgContainer.svelte-b310oo{transform:scale(1.03, 1.03);filter:drop-shadow(#ffffff56 0 0 20px)}.optionContainer.svelte-b310oo:hover .text.svelte-b310oo{color:#FFD25E}#optionsContainer.svelte-b310oo.svelte-b310oo{display:grid;grid-template-columns:repeat(2, 15vw);place-content:center;column-gap:20vw;padding-top:var(--centeringMargin)}.textAnimation.svelte-b310oo.svelte-b310oo{position:relative}.textAnimation.svelte-b310oo.svelte-b310oo::after{content:' ';bottom:0;left:0;background:#191D1B;width:100%;height:100%;position:absolute;z-index:1;animation-name:svelte-b310oo-reveal;animation-duration:2300ms;animation-fill-mode:forwards}#optionsContainer.svelte-b310oo.svelte-b310oo::after{content:' ';background-color:#191D1B;width:100%;height:100%;position:fixed;left:0;top:0;z-index:var(--index);opacity:var(--opacity);transition:300ms}@media only screen and (max-width: 500px){main.svelte-b310oo.svelte-b310oo{height:90vh}#optionsContainer.svelte-b310oo.svelte-b310oo{grid-template-columns:0;row-gap:5vh;padding-top:calc(var(--sizeFactor) * 10vh);margin-left:calc(var(--sizeFactor) * -290px)}.textAnimation.svelte-b310oo.svelte-b310oo::after{animation-duration:0ms}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let centeringMargin;
  let innerHeight = 0;
  let sizeFactor = 1;
  let index = -1;
  let opacity = 0;
  $$result.css.add(css);
  centeringMargin = Math.max(innerHeight / 2 - 240, 50);
  {
    {
      sizeFactor = 1;
    }
  }
  return ` <main style="${"--sizeFactor: " + escape(sizeFactor, true) + "; --centeringMargin: " + escape(centeringMargin, true) + "px; --opacity: " + escape(opacity, true) + "; --index: " + escape(index, true)}" class="textAnimation svelte-b310oo"><section id="optionsContainer" class="svelte-b310oo"><div class="optionContainer svelte-b310oo" data-svelte-h="svelte-1ki61ev"><div id="gallery" class="imgContainer svelte-b310oo"></div> <p class="text svelte-b310oo">Photo gallery</p></div> <div class="optionContainer svelte-b310oo" data-svelte-h="svelte-loorb2"><div id="documents" class="imgContainer svelte-b310oo"></div> <p class="text svelte-b310oo">Documents</p></div></section></main>`;
});
export {
  Page as default
};
