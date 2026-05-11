import { $ as $$Layout, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, D as maybeRenderHead, a5 as addAttribute } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { s as supabase } from './supabase_DTCsrQ25.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: blogPosts, error } = await supabase.from("blog_posts").select("*").eq("published", true).order("publish_date", { ascending: false });
  const posts = blogPosts || [];
  const featured = posts[0] || null;
  const others = posts.slice(1);
  const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="py-12 text-center"> <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Conseils, tutoriels et actualités sur les avatars numériques, l'identité en ligne et le marketplace.
</p> </div>  ${featured && renderTemplate`<a${addAttribute(`/blog/${featured.slug}`, "href")} class="block group mb-12"> <div class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"> <div class="flex flex-col md:flex-row"> <div class="md:w-1/2 aspect-video md:aspect-auto overflow-hidden"> <img${addAttribute(featured.image_url, "src")}${addAttribute(featured.image_alt, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> </div> <div class="md:w-1/2 p-8 flex flex-col justify-center"> <span class="inline-block w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-full mb-4"> ${featured.category} </span> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors"> ${featured.title} </h2> <p class="text-gray-600 mb-4 line-clamp-3"> ${featured.snippet} </p> <div class="flex items-center gap-3 text-sm text-gray-500"> <span>${featured.author}</span> <span>·</span> <time>${formatDate(featured.publish_date)}</time> </div> </div> </div> </div> </a>`} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${others.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group block"> <article class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"> <div class="aspect-video overflow-hidden relative"> <img${addAttribute(post.image_url, "src")}${addAttribute(post.image_alt, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-white/90 backdrop-blur-sm rounded-lg"> ${post.category} </span> </div> <div class="p-6 flex flex-col flex-1"> <h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2"> ${post.title} </h2> <p class="text-gray-500 text-sm mb-4 flex-1 line-clamp-3"> ${post.snippet} </p> <div class="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-100"> <span class="font-medium text-gray-600">${post.author}</span> <time>${formatDate(post.publish_date)}</time> </div> </div> </article> </a>`)} </div>  ${posts.length === 0 && renderTemplate`<div class="text-center py-16"> <p class="text-gray-500 text-lg">Aucun article publié pour le moment.</p> </div>`}` })} ` })}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
