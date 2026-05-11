import { $ as $$Layout, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, D as maybeRenderHead, a5 as addAttribute, aY as unescapeHTML } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { s as supabase } from './supabase_DTCsrQ25.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: post, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).single();
  if (!post) {
    return Astro2.redirect("/blog");
  }
  const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-3xl mt-14"> <!-- Back link --> <a href="/blog" class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-8"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Retour au blog
</a> <!-- Category + Date --> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-full"> ${post.category} </span> <time class="text-sm text-gray-500"> ${formatDate(post.publish_date)} </time> </div> <!-- Title --> <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"> ${post.title} </h1> <!-- Snippet --> <p class="text-xl text-gray-600 mb-6"> ${post.snippet} </p> <!-- Author --> <div class="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200"> <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm"> ${post.author.charAt(0)} </div> <div> <p class="font-medium text-gray-900">${post.author}</p> <div class="flex gap-2"> ${(post.tags || []).map((tag) => renderTemplate`<span class="text-xs text-gray-500">#${tag}</span>`)} </div> </div> </div> <!-- Featured Image --> ${post.image_url && renderTemplate`<div class="rounded-xl overflow-hidden mb-10"> <img${addAttribute(post.image_url, "src")}${addAttribute(post.image_alt, "alt")} class="w-full h-auto object-cover"> </div>`} <!-- Content (rendered from markdown stored in Supabase) --> <div class="prose prose-lg prose-indigo max-w-none">${unescapeHTML(
    post.content.replace(/\n/g, "<br>").replace(/## (.*?)(<br>|$)/g, "<h2>$1</h2>").replace(/### (.*?)(<br>|$)/g, "<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/- (.*?)(<br>|$)/g, "<li>$1</li>").replace(/(<li>.*?<\/li>)+/g, (match) => `<ul>${match}</ul>`)
  )}</div> <!-- Bottom nav --> <div class="mt-12 pt-8 border-t border-gray-200 text-center"> <a href="/blog" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Retour au blog
</a> </div> </article> ` })} ` })}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
