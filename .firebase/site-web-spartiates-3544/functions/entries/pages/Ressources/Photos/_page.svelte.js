import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
import { Y as YearNav } from "../../../../chunks/YearNav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-16ib3rg-reveal{0%{height:100%}100%{height:0%}}main.svelte-16ib3rg{margin-top:calc(50vh - 240px)}#bottomNavContainer.svelte-16ib3rg{height:calc(50vh - 250px);position:relative}#bottomNav.svelte-16ib3rg{bottom:0;position:absolute;display:flex;justify-content:space-between;width:90vw;margin-left:5vw;font-size:110%}.textAnimation.svelte-16ib3rg{position:relative}.textAnimation.svelte-16ib3rg::after{content:' ';bottom:0;left:0;background:#191D1B;width:100%;height:100%;position:absolute;z-index:1;animation-name:svelte-16ib3rg-reveal;animation-duration:1000ms;animation-fill-mode:forwards}",
  map: null
};
let numberPhotos = "49";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <main class="svelte-16ib3rg"><div class="textAnimation svelte-16ib3rg">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      components: [
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240224_094151411.jpg?alt=media&token=addbfdfb-7861-455e-b9ae-45cd65bb4291",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240219_020353617.jpg?alt=media&token=1cf240d8-d507-41e4-8a6d-13509164f3e6",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230328_015048223.jpg?alt=media&token=1c288d01-469e-46b3-9d5f-f04acfc371f7",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240210_002141723.jpg?alt=media&token=320b00db-1bfd-463c-9397-baad3c01dab7",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240128_162048258.jpg?alt=media&token=e5309fd3-0b0c-4de5-8513-8d8e8415970a",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230218_012317100.jpg?alt=media&token=5fe0d967-3eb4-4c4c-b098-466678d5a3c3",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240120_225747665.jpg?alt=media&token=a51bf7ed-e878-4017-a6de-4ef02e210e15",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230401_121624594.jpg?alt=media&token=c536f7c8-b794-4460-992b-10d8efc5ec7b",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240118_202722196.jpg?alt=media&token=f0ac6c6c-f975-46f3-a691-bcea44294e3d",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230401_195100461.jpg?alt=media&token=c7dde432-d345-4a37-af6f-a113c826833e",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20240118_201513617.jpg?alt=media&token=a3e41449-3f68-4487-acc8-be09e0e23642",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231117_212610108.jpg?alt=media&token=72cbc982-89c0-4e66-926e-68c871105eb5",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231116_232419770.jpg?alt=media&token=4d6ab9cf-b0dc-4fe8-b20d-39d6678b62ef",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_150755887.jpg?alt=media&token=412d1596-e794-46c1-9797-a793384f9f55",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230323_005512717.jpg?alt=media&token=3c4c8226-86e2-4362-a7a9-c1ce1688ea9c",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_145552317.jpg?alt=media&token=71add364-2adc-4f0e-85cd-db2edfd95437",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_145224200.jpg?alt=media&token=b103152d-0f30-4f47-9e17-204345f2ad8d",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230315_000933785.jpg?alt=media&token=2cc20392-2f42-47a5-a68f-d29063e0ad54",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_132936169.jpg?alt=media&token=9f6cafcf-3880-43ef-8dd3-4cd73200f8be",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_132617470.jpg?alt=media&token=61b47078-1630-458a-8136-6a8cc0168047",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_131828280.jpg?alt=media&token=915346e9-72a8-48d2-b315-43205d7c04fc",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230330_165806200.jpg?alt=media&token=77f2b138-4534-4fba-8880-0877e8508c6e",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231103_131819929.jpg?alt=media&token=59b54171-68ad-443f-b667-418b6fce741f",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_215926670.jpg?alt=media&token=c140722c-1182-434e-8bd1-01634e0a8223",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_204826633.jpg?alt=media&token=5085bae5-655d-4524-ad5b-7ab80f91d362",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_204818763.jpg?alt=media&token=cbfa7674-04b4-46af-8005-7776bbf73c5e",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230218_005401682.jpg?alt=media&token=c0676799-f27c-4fa9-922b-3789e1392629",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230125_013603642.jpg?alt=media&token=86b23a78-138a-44c0-bc3a-9a78783c586f",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20231006_204758583.jpg?alt=media&token=ff57f8dc-973c-4c79-8428-82bf8474318b",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20221210_163816498.jpg?alt=media&token=4ab6598a-7c42-46a3-bf8c-a896506a7b45",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20221216_234530316.jpg?alt=media&token=a3e95858-b626-4c1b-a072-927051570c3d",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230115_142807174.jpg?alt=media&token=726a9e49-8451-4a34-8739-7542b676bbdd",
        "https://firebasestorage.googleapis.com/v0/b/site-web-spartiates-3544.appspot.com/o/PXL_20230121_183411561.jpg?alt=media&token=ec569991-2244-4038-87ca-de888a699e52"
      ],
      height: "400px",
      gap: "20px",
      width: "280px",
      speed: "40s"
    },
    {},
    {}
  )}</div> <section id="bottomNavContainer" class="textAnimation svelte-16ib3rg"><section id="bottomNav" class="svelte-16ib3rg">${validate_component(YearNav, "YearNav").$$render($$result, {}, {}, {})} <p id="numberPhotos">${escape(numberPhotos)} Photos</p> ${``}</section></section></main>`;
});
export {
  Page as default
};
