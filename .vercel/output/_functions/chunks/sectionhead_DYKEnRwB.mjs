import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { D as maybeRenderHead, a5 as addAttribute, b3 as renderSlot, U as renderTemplate } from './sequence_BNAJhPRP.mjs';

const $$Sectionhead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4 text-slate-600"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "/home/alex/Documents/Workspace/portfolio/src/components/sectionhead.astro", void 0);

export { $$Sectionhead as $ };
