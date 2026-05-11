import { $ as $$Layout, r as renderScript, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, D as maybeRenderHead } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Détails de l'asset" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="loading" class="text-center py-12"> <div class="inline-block animate-spin h-8 w-8 border-b-2 border-indigo-600"></div> <p class="mt-2 text-gray-600">Chargement...</p> </div> <div id="project-detail" class="hidden py-12"> <!-- Breadcrumb --> <nav class="mb-8 text-sm text-gray-500"> <a href="/marketplace" class="hover:text-gray-900">Marketplace</a> <span class="mx-2">/</span> <span id="breadcrumb-title" class="text-gray-900">Asset</span> </nav> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Image --> <div id="project-image-container" class="bg-gray-100 flex items-center justify-center min-h-[400px]"> <img id="project-image" src="" alt="" class="w-full h-full object-cover max-h-[600px]"> <div id="no-image" class="hidden text-gray-400 text-6xl">📦</div> </div> <!-- Info --> <div> <div class="flex items-start justify-between mb-4"> <h1 id="project-title" class="text-3xl font-bold text-gray-900"></h1> <span id="project-price" class="text-2xl font-bold"></span> </div> <div class="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200"> <img id="creator-avatar" src="" alt="" class="w-10 h-10 rounded-full object-cover"> <div> <p id="creator-name" class="font-medium text-gray-900"></p> <p class="text-sm text-gray-500">Publié le <span id="project-date"></span></p> </div> </div> <div class="mb-8"> <h2 class="text-lg font-semibold text-gray-900 mb-2">Description</h2> <p id="project-description" class="text-gray-600 leading-relaxed"></p> </div> <!-- Tags --> <div id="tags-section" class="hidden mb-8"> <h3 class="text-sm font-semibold text-gray-900 mb-3">Tags</h3> <div id="tags-list" class="flex flex-wrap gap-2"></div> </div> <!-- Informations --> <div class="bg-gray-50 border border-gray-200 p-4 mb-8"> <h3 class="text-sm font-semibold text-gray-900 mb-3">Informations</h3> <div class="grid grid-cols-2 gap-4 text-sm"> <div> <span class="text-gray-500">Type:</span> <span id="info-type" class="ml-2 text-gray-900">Asset</span> </div> <div> <span class="text-gray-500">Version:</span> <span id="info-version" class="ml-2 text-gray-900">1.0</span> </div> <div> <span class="text-gray-500">Licence:</span> <span id="info-licence" class="ml-2 text-gray-900">Standard</span> </div> <div> <span class="text-gray-500">Mise à jour:</span> <span id="info-updated" class="ml-2 text-gray-900">-</span> </div> </div> </div> <div id="action-buttons" class="flex gap-4"> <button id="buy-download-btn" class="flex-1 px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"> <span id="btn-text">Chargement...</span> <span id="btn-price" class="ml-2 opacity-80"></span> </button> <button id="contact-btn" class="px-6 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
Contacter
</button> </div> </div> </div> <!-- Plus d'assets du même créateur --> <div id="more-projects-section" class="hidden mt-16 pt-12 border-t border-gray-200"> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold text-gray-900">Plus d'assets du même créateur</h2> <a id="creator-link" href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Voir tout →</a> </div> <div id="more-projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Assets injectés ici --> </div> </div> <!-- Assets similaires --> <div id="similar-section" class="hidden mt-16 pt-12 border-t border-gray-200"> <h2 class="text-2xl font-bold text-gray-900 mb-6">Assets similaires</h2> <div id="similar-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Assets injectés ici --> </div> </div> </div> <div id="not-found" class="hidden text-center py-12"> <p class="text-gray-600">Asset non trouvé.</p> <a href="/marketplace" class="mt-4 inline-block text-indigo-600 hover:text-indigo-700 font-medium">
Retour au marketplace →
</a> </div> ` })} ` })} ${renderScript($$result, "/home/alex/Documents/Workspace/portfolio/src/pages/marketplace/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/marketplace/[id].astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/marketplace/[id].astro";
const $$url = "/marketplace/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
