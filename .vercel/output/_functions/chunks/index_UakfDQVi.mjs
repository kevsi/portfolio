import { $ as $$Layout, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { D as maybeRenderHead, U as renderTemplate } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { $ as $$Link } from './link_D213ksbQ.mjs';
import { $ as $$Icon } from './Icon_BjVmx_-g.mjs';
import { $ as $$Picture } from './_astro_assets_BGI-YNnr.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Travaillons ensemble
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Passionné et travailleur, je suis prêt à transformer vos idées en projets concrets. Discutons de votre prochain projet !
</p> <div class="flex mt-5 gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Me Contacter` })} ${renderComponent($$result, "Link", $$Link, { "href": "/projects", "style": "outline" }, { "default": ($$result2) => renderTemplate`Voir Mes Projets` })} </div> </div>`;
}, "/home/alex/Documents/Workspace/portfolio/src/components/cta.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Web Design",
      description: "Création de designs modernes et responsive qui captivent vos visiteurs et reflètent votre identité de marque.",
      icon: "bx:bxs-palette"
    },
    {
      title: "Développement Web",
      description: "Développement de sites web et applications performantes avec les dernières technologies (React, Astro, Node.js).",
      icon: "bx:bx-code"
    },
    {
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur intuitives et expériences utilisateur optimisées pour maximiser l'engagement.",
      icon: "bx:bxs-devices"
    },
    {
      title: "Responsive Design",
      description: "Sites parfaitement adaptés à tous les écrans : mobile, tablette et desktop pour une expérience fluide partout.",
      icon: "bx:bxs-mobile"
    },
    {
      title: "SEO Optimisation",
      description: "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne et attirer plus de clients.",
      icon: "bx:bxs-search"
    },
    {
      title: "Support & Maintenance",
      description: "Accompagnement continu et maintenance de votre site pour garantir sa performance et sa sécurité.",
      icon: "bx:bxs-phone-call"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Mes Services
</h2> <p class="text-lg mt-4 text-slate-600">
Des solutions web complètes et sur mesure pour faire briller votre présence en ligne
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "/home/alex/Documents/Workspace/portfolio/src/components/features.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero.DlKDY3ml.png","width":520,"height":424,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/Documents/Workspace/portfolio/src/assets/hero.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })} </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
FASSINOU ALEX
</h1> <p class="text-xl mt-4 text-indigo-600 font-semibold">
Développeur Web & Designer
</p> <p class="text-lg mt-4 text-slate-600 max-w-xl">
Passionné et travailleur, je crée des expériences web modernes et performantes. Expert en Web Design et Développement, je transforme vos idées en réalité digitale.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bxs-envelope" })}
Me Contacter
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "/projects", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-black w-4 h-4", "name": "bx:bxs-briefcase" })}
Voir Mes Projets
` })} </div> </div> </main>`;
}, "/home/alex/Documents/Workspace/portfolio/src/components/hero.astro", void 0);

const $$Logos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"> <h2 class="text-center text-slate-500">Works with your technologies</h2> <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:docker" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:react" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:symfony" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-16", "name": "simple-icons:tailwindcss" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-16", "name": "simple-icons:figma" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:php" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:nextdotjs" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:typescript" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:postman" })} </div> </div>`;
}, "/home/alex/Documents/Workspace/portfolio/src/components/logos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` })}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
