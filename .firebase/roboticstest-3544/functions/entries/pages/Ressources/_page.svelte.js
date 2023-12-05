import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{height:calc(100vh - 35px);width:100vw}.optionContainer.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{height:400px;width:290px;background-color:aliceblue;position:relative;cursor:pointer}#gallery.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{background-image:url('https://cdn.discordapp.com/attachments/1051259930914594879/1066200923661156483/PXL_20230120_223220900.jpg?ex=6573e1fd&is=65616cfd&hm=5061634083cad109c4eeedbdbfccc0b78fbca8411e419e8fc4a850b52bf1e3b8&')}#documents.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{background-image:url('https://i.pinimg.com/736x/36/ee/19/36ee197db6bad43a83024320ee3da5d0.jpg')}.imgContainer.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{width:100%;height:100%;background-size:cover;background-position:center;position:absolute;filter:drop-shadow(#ffffff65 0 0 25px);transition:400ms;transition-timing-function:ease-in-out}.text.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{position:absolute;top:37%;font-size:500%;width:200%;left:-50%;text-align:center;mix-blend-mode:exclusion;color:#fff;transition:250ms;transition-timing-function:ease-in-out}.optionContainer.s-uKfyvzK7NNd8:hover .imgContainer.s-uKfyvzK7NNd8{transform:scale(1.03, 1.03);filter:drop-shadow(#ffffff56 0 0 20px)}.optionContainer.s-uKfyvzK7NNd8:hover .text.s-uKfyvzK7NNd8{color:#ffcc01}#optionsContainer.s-uKfyvzK7NNd8.s-uKfyvzK7NNd8{display:grid;grid-template-columns:repeat(2, 15vw);place-content:center;column-gap:20vw;padding-top:calc(50vh - 250px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="s-uKfyvzK7NNd8"><section id="optionsContainer" class="s-uKfyvzK7NNd8"><a class="optionContainer s-uKfyvzK7NNd8" href="./Ressources/Photos"><div id="gallery" class="imgContainer s-uKfyvzK7NNd8"></div> <p class="text s-uKfyvzK7NNd8" data-svelte-h="svelte-tfgz5c">Photo gallery</p></a> <a class="optionContainer s-uKfyvzK7NNd8" href="./Ressources/Documents"><div id="documents" class="imgContainer s-uKfyvzK7NNd8"></div> <p class="text s-uKfyvzK7NNd8" data-svelte-h="svelte-h7r7z0">Documents</p></a></section></main>`;
});
export {
  Page as default
};
