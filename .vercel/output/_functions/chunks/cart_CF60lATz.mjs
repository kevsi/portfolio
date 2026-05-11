import { $ as $$Layout, r as renderScript, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, G as Fragment, D as maybeRenderHead, a5 as addAttribute } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { $ as $$Sectionhead } from './sectionhead_DYKEnRwB.mjs';
import { s as supabase } from './supabase_DTCsrQ25.mjs';

async function getCart(userId) {
  const { data, error } = await supabase.from("cart").select("*").eq("user_id", userId).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
  return data || [];
}
async function getCartTotal(userId) {
  const { data, error } = await supabase.from("cart").select("item_price, quantity").eq("user_id", userId);
  if (error) {
    console.error("Error calculating cart total:", error);
    throw error;
  }
  return data?.reduce((total, item) => total + item.item_price * item.quantity, 0) || 0;
}

const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cart;
  const session = Astro2.locals.session;
  if (!session) {
    return Astro2.redirect("/auth/login");
  }
  let cartItems = [];
  let cartTotal = 0;
  try {
    cartItems = await getCart(session.user.id);
    cartTotal = await getCartTotal(session.user.id);
  } catch (error) {
    console.error("Error loading cart:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon Panier", "data-astro-cid-h3zw4u6d": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-h3zw4u6d": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-h3zw4u6d": true }, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`Gérez vos articles et finalisez votre commande` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Mon Panier` })}` })}  ${maybeRenderHead()}<div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 mb-8 text-white" data-astro-cid-h3zw4u6d> <div class="flex flex-col md:flex-row justify-between items-center gap-4" data-astro-cid-h3zw4u6d> <div data-astro-cid-h3zw4u6d> <h2 class="text-2xl font-bold mb-2" data-astro-cid-h3zw4u6d>Résumé du panier</h2> <p class="opacity-90" data-astro-cid-h3zw4u6d> <span id="total-items" data-astro-cid-h3zw4u6d>${cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span> article(s) • 
            Total: <span id="total-price" class="text-xl font-bold" data-astro-cid-h3zw4u6d>${cartTotal.toFixed(2)}€</span> </p> </div> <div class="flex gap-3" data-astro-cid-h3zw4u6d> <button id="clear-cart" class="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all" data-astro-cid-h3zw4u6d>
Vider le panier
</button> <button id="checkout-btn" class="px-6 py-2 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all" data-astro-cid-h3zw4u6d>
Procéder au paiement
</button> </div> </div> </div>  ${cartItems.length === 0 && renderTemplate`<div class="text-center py-16" data-astro-cid-h3zw4u6d> <div class="max-w-md mx-auto" data-astro-cid-h3zw4u6d> <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6" data-astro-cid-h3zw4u6d> <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-h3zw4u6d> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" data-astro-cid-h3zw4u6d></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-h3zw4u6d>Votre panier est vide</h3> <p class="text-gray-600 mb-6" data-astro-cid-h3zw4u6d>Découvrez nos avatars et services pour remplir votre panier !</p> <div class="flex gap-3 justify-center" data-astro-cid-h3zw4u6d> <a href="/marketplace" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" data-astro-cid-h3zw4u6d>
🛍️ Explorer le Marketplace
</a> <a href="/settings/avatar" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" data-astro-cid-h3zw4u6d>
🎭 Choisir un avatar
</a> </div> </div> </div>`} ${cartItems.length > 0 && renderTemplate`<div class="space-y-4" id="cart-items" data-astro-cid-h3zw4u6d> ${cartItems.map((item) => renderTemplate`<div class="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"${addAttribute(item.id, "data-item-id")}${addAttribute(item.item_price, "data-price")} data-astro-cid-h3zw4u6d> <div class="flex flex-col md:flex-row gap-4 items-center" data-astro-cid-h3zw4u6d> <!-- Item Image --> <div class="flex-shrink-0" data-astro-cid-h3zw4u6d> ${item.item_image ? renderTemplate`<img${addAttribute(item.item_image, "src")}${addAttribute(item.item_name, "alt")} class="w-20 h-20 rounded-xl object-cover border border-gray-100" data-astro-cid-h3zw4u6d>` : renderTemplate`<div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm" data-astro-cid-h3zw4u6d> <span class="text-white text-2xl font-bold" data-astro-cid-h3zw4u6d>${item.item_name.charAt(0).toUpperCase()}</span> </div>`} </div> <!-- Item Details --> <div class="flex-grow w-full" data-astro-cid-h3zw4u6d> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3" data-astro-cid-h3zw4u6d> <div data-astro-cid-h3zw4u6d> <h3 class="text-lg font-bold text-gray-900" data-astro-cid-h3zw4u6d>${item.item_name}</h3> <span class="inline-flex items-center gap-1 text-sm text-gray-400 mt-0.5" data-astro-cid-h3zw4u6d> ${item.item_type === "avatar" ? "🎭 Avatar" : item.item_type === "service" ? "⚙️ Service" : "📦 Produit"} </span> </div> <div class="flex items-center gap-5" data-astro-cid-h3zw4u6d> <div class="flex items-center gap-2" data-astro-cid-h3zw4u6d> <label class="text-sm text-gray-500" data-astro-cid-h3zw4u6d>Qté</label> <select class="quantity-select w-16 px-2 py-1.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:border-indigo-500 focus:outline-none"${addAttribute(item.id, "data-item-id")} data-astro-cid-h3zw4u6d> ${[1, 2, 3, 4, 5].map((qty) => renderTemplate`<option${addAttribute(qty, "value")}${addAttribute(qty === item.quantity, "selected")} data-astro-cid-h3zw4u6d>${qty}</option>`)} </select> </div> <div class="text-right" data-astro-cid-h3zw4u6d> <p class="text-lg font-bold text-gray-900" data-astro-cid-h3zw4u6d>${(item.item_price * item.quantity).toFixed(2)}€</p> <p class="text-xs text-gray-400" data-astro-cid-h3zw4u6d>${item.item_price.toFixed(2)}€ / unité</p> </div> <button class="remove-item-btn text-gray-300 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors"${addAttribute(item.id, "data-item-id")} data-astro-cid-h3zw4u6d> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-h3zw4u6d> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-h3zw4u6d></path> </svg> </button> </div> </div> </div> </div> </div>`)} </div>`} <div class="mt-12 bg-white rounded-lg border border-gray-200 p-6" data-astro-cid-h3zw4u6d> <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2" data-astro-cid-h3zw4u6d>
📦 Historique des commandes
</h2> <div id="order-history" class="space-y-4" data-astro-cid-h3zw4u6d> <!-- Order history will be dynamically inserted here --> </div> <!-- Empty History State --> <div id="empty-history" class="text-center py-8" data-astro-cid-h3zw4u6d> <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-h3zw4u6d> <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-h3zw4u6d> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-h3zw4u6d></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2" data-astro-cid-h3zw4u6d>Aucune commande passée</h3> <p class="text-gray-600" data-astro-cid-h3zw4u6d>Votre historique de commandes apparaîtra ici.</p> </div> </div> ` })} ` })} ${renderScript($$result, "/home/alex/Documents/Workspace/portfolio/src/pages/cart.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/cart.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
