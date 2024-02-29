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
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1096886608747311275/IMG_1169.jpg?ex=656b8bc2&is=655916c2&hm=46eebcbfb5c2ca1bac2924d93c243b93e8813e3a2a3d6d9791334d9e68bbf6f5&=&width=499&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927619357921290/DSC04818.JPG?ex=656bf657&is=65598157&hm=096c48f73bafa16f0af62f40361f74a01581ca71316763b19bd77b9a76acc844&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927619357921290/DSC04818.JPG?ex=656bf657&is=65598157&hm=096c48f73bafa16f0af62f40361f74a01581ca71316763b19bd77b9a76acc844&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927306789986334/DSC04798.JPG?ex=656bf60c&is=6559810c&hm=18dacdd4650206757cce80bf93f0d3ab0ca92a45fe2c5fb9ec2b1a63e39adf09&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1091927306789986334/DSC04798.JPG?ex=656bf60c&is=6559810c&hm=18dacdd4650206757cce80bf93f0d3ab0ca92a45fe2c5fb9ec2b1a63e39adf09&=&width=592&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889",
        "https://media.discordapp.net/attachments/1051259930914594879/1103175329910100048/C9A2BB25-A139-4D3B-9C8D-EC49F61223CF.jpg?ex=6566bd16&is=65544816&hm=234b4db629f9926e31ccf49223c610509d34736044744dd17f05ecca2f714b3b&=&width=666&height=889"
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
