import { $ as $$Layout, r as renderScript, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, b4 as defineScriptVars, G as Fragment, D as maybeRenderHead } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { $ as $$Sectionhead } from './sectionhead_DYKEnRwB.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Avatar;
  const userId = Astro2.locals.session?.user?.id ?? null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Choisir un avatar", "data-astro-cid-q4r3ymlw": true }, { "default": async ($$result2) => renderTemplate`  ${userId && renderTemplate(_a || (_a = __template(["<script>(function(){", "window.__USER_ID__ = userId;})();<\/script>"])), defineScriptVars({ userId }))}${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-q4r3ymlw": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-q4r3ymlw": true }, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`Sélectionnez un avatar animé pour personnaliser votre profil` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Choisir un avatar` })}` })}  ${maybeRenderHead()}<div id="loading" class="text-center py-12" data-astro-cid-q4r3ymlw> <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" data-astro-cid-q4r3ymlw></div> <p class="mt-2 text-gray-600" data-astro-cid-q4r3ymlw>Chargement des avatars...</p> </div>  <div id="auth-required" class="hidden text-center py-12" data-astro-cid-q4r3ymlw> <p class="text-gray-600 mb-4" data-astro-cid-q4r3ymlw>Vous devez être connecté pour accéder à cette page.</p> <a href="/auth/login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" data-astro-cid-q4r3ymlw>
Se connecter
</a> <a href="/settings" class="text-indigo-600 hover:text-indigo-700 font-medium" data-astro-cid-q4r3ymlw>← Retour aux paramètres</a> </div>  <div id="avatar-content" class="hidden py-12" data-astro-cid-q4r3ymlw> <!-- Category Filter --> <div id="category-filters" class="flex flex-wrap gap-2 justify-center mb-8" data-astro-cid-q4r3ymlw></div> <!-- Avatar Grid --> <div id="avatar-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto" data-astro-cid-q4r3ymlw></div> <!-- Empty State --> <div id="no-results" class="hidden text-center py-12" data-astro-cid-q4r3ymlw> <p class="text-gray-500" data-astro-cid-q4r3ymlw>Aucun avatar trouvé dans cette catégorie</p> </div> </div>  <div id="toast" class="fixed bottom-4 right-4 transform translate-y-20 opacity-0 transition-all duration-300 z-50" data-astro-cid-q4r3ymlw> <div id="toast-inner" class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2" data-astro-cid-q4r3ymlw> <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-q4r3ymlw> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-q4r3ymlw></path> </svg> <span id="toast-message" data-astro-cid-q4r3ymlw>Avatar mis à jour avec succès !</span> </div> </div> ` })} ` })} ${renderScript($$result, "/home/alex/Documents/Workspace/portfolio/src/pages/settings/avatar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/settings/avatar.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/settings/avatar.astro";
const $$url = "/settings/avatar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Avatar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
