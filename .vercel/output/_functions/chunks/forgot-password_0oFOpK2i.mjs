import { $ as $$Layout, r as renderScript, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, G as Fragment, D as maybeRenderHead } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { $ as $$Sectionhead } from './sectionhead_DYKEnRwB.mjs';

const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mot de passe oublié" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`Réinitialisez votre mot de passe` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Mot de passe oublié` })}` })} ${maybeRenderHead()}<div class="mx-auto max-w-md mt-12"> <form id="forgot-form" class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"> </div> <button type="submit" id="submit-btn" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Envoyer le lien de réinitialisation
</button> <div id="error-message" class="hidden text-red-600 text-sm text-center"></div> <div id="success-message" class="hidden text-green-600 text-sm text-center"></div> </form> <p class="mt-4 text-center text-sm text-gray-600"> <a href="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
Retour à la connexion
</a> </p> </div> ` })} ` })} ${renderScript($$result, "/home/alex/Documents/Workspace/portfolio/src/pages/auth/forgot-password.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/auth/forgot-password.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/auth/forgot-password.astro";
const $$url = "/auth/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
