import { $ as $$Layout, r as renderScript, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { U as renderTemplate, G as Fragment, D as maybeRenderHead, a5 as addAttribute } from './sequence_BNAJhPRP.mjs';
import { r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { $ as $$Sectionhead } from './sectionhead_DYKEnRwB.mjs';
import { s as supabase } from './supabase_DTCsrQ25.mjs';

async function getNotifications(userId, limit = 20, offset = 0) {
  const { data, error } = await supabase.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
  if (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
  return data || [];
}
async function getUnreadCount(userId) {
  const { data, error } = await supabase.from("notifications").select("id", { count: "exact" }).eq("user_id", userId).eq("is_read", false);
  if (error) {
    console.error("Error getting unread count:", error);
    throw error;
  }
  return data?.length || 0;
}

const $$Notifications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Notifications;
  const session = Astro2.locals.session;
  if (!session) {
    return Astro2.redirect("/auth/login");
  }
  let notifications = [];
  let unreadCount = 0;
  let currentFilter = Astro2.url.searchParams.get("filter") || "all";
  try {
    notifications = await getNotifications(session.user.id, 20);
    unreadCount = await getUnreadCount(session.user.id);
    if (currentFilter !== "all") {
      notifications = notifications.filter((n) => n.type === currentFilter);
    }
  } catch (error) {
    console.error("Error loading notifications:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Notifications", "data-astro-cid-6k6lq4tv": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-6k6lq4tv": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-6k6lq4tv": true }, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`Restez informé de vos dernières activités` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Notifications` })}` })}  ${maybeRenderHead()}<div class="bg-white rounded-lg border border-gray-200 p-4 mb-6" data-astro-cid-6k6lq4tv> <div class="flex flex-col md:flex-row gap-4 items-center justify-between" data-astro-cid-6k6lq4tv> <h2 class="text-lg font-semibold text-gray-900" data-astro-cid-6k6lq4tv>Filtrer les notifications</h2> <div class="flex flex-wrap gap-2" data-astro-cid-6k6lq4tv> <a href="/notifications?filter=all"${addAttribute(`filter-btn px-3 py-1 text-sm rounded-full transition-colors ${currentFilter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-6k6lq4tv>
Toutes ${unreadCount > 0 && `(${unreadCount})`} </a> <a href="/notifications?filter=order"${addAttribute(`filter-btn px-3 py-1 text-sm rounded-full transition-colors ${currentFilter === "order" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-6k6lq4tv>
Commandes
</a> <a href="/notifications?filter=system"${addAttribute(`filter-btn px-3 py-1 text-sm rounded-full transition-colors ${currentFilter === "system" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-6k6lq4tv>
Système
</a> <a href="/notifications?filter=avatar"${addAttribute(`filter-btn px-3 py-1 text-sm rounded-full transition-colors ${currentFilter === "avatar" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-6k6lq4tv>
Avatars
</a> <a href="/notifications?filter=promotion"${addAttribute(`filter-btn px-3 py-1 text-sm rounded-full transition-colors ${currentFilter === "promotion" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-6k6lq4tv>
Promotions
</a> </div> </div> </div>  ${notifications.length === 0 && renderTemplate`<div class="text-center py-16" data-astro-cid-6k6lq4tv> <div class="max-w-md mx-auto" data-astro-cid-6k6lq4tv> <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6" data-astro-cid-6k6lq4tv> <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6k6lq4tv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-astro-cid-6k6lq4tv></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-6k6lq4tv> ${currentFilter === "all" ? "Aucune notification" : `Aucune notification ${currentFilter}`} </h3> <p class="text-gray-600" data-astro-cid-6k6lq4tv> ${currentFilter === "all" ? "Vous n'avez pas de nouvelles notifications pour le moment." : `Vous n'avez pas de notifications de type ${currentFilter}.`} </p> </div> </div>`} ${notifications.length > 0 && renderTemplate`<div data-astro-cid-6k6lq4tv> ${unreadCount > 0 && renderTemplate`<div class="mb-4" data-astro-cid-6k6lq4tv> <button id="mark-all-read" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors" data-astro-cid-6k6lq4tv>
Tout marquer comme lu (${unreadCount})
</button> </div>`} <div class="space-y-3" id="notifications-list" data-astro-cid-6k6lq4tv> ${notifications.map((notification) => {
    const typeConfig = {
      order: { icon: "📦", bg: "bg-blue-50", color: "text-blue-600", border: "border-blue-200" },
      system: { icon: "⚙️", bg: "bg-gray-50", color: "text-gray-600", border: "border-gray-200" },
      avatar: { icon: "🎭", bg: "bg-purple-50", color: "text-purple-600", border: "border-purple-200" },
      promotion: { icon: "🎉", bg: "bg-amber-50", color: "text-amber-600", border: "border-amber-200" },
      social: { icon: "💬", bg: "bg-green-50", color: "text-green-600", border: "border-green-200" }
    };
    const cfg = typeConfig[notification.type] || typeConfig.system;
    return renderTemplate`<div${addAttribute(`notification-item group bg-white rounded-xl border p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${!notification.is_read ? `border-l-4 border-l-indigo-500 bg-indigo-50/50` : `border ${cfg.border}`}`, "class")}${addAttribute(notification.id, "data-id")}${addAttribute(notification.is_read, "data-read")}${addAttribute(notification.action_url || "", "data-url")} data-astro-cid-6k6lq4tv> <div class="flex gap-4" data-astro-cid-6k6lq4tv> <div class="flex-shrink-0" data-astro-cid-6k6lq4tv> <div${addAttribute(`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${cfg.bg} border ${cfg.border}`, "class")} data-astro-cid-6k6lq4tv> ${cfg.icon} </div> </div> <div class="flex-1 min-w-0" data-astro-cid-6k6lq4tv> <div class="flex items-start justify-between gap-2" data-astro-cid-6k6lq4tv> <h3 class="font-semibold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors" data-astro-cid-6k6lq4tv>${notification.title}</h3> ${!notification.is_read && renderTemplate`<button class="mark-read-btn flex-shrink-0 px-2.5 py-1 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"${addAttribute(notification.id, "data-id")} data-astro-cid-6k6lq4tv>
Marquer lu
</button>`} </div> <p class="text-gray-500 text-sm mt-1 line-clamp-2" data-astro-cid-6k6lq4tv>${notification.message}</p> <p class="text-gray-400 text-xs mt-2" data-astro-cid-6k6lq4tv>${getRelativeTime(notification.created_at)}</p> </div> </div> </div>`;
  })} </div> </div>`}` })} ` })} ${renderScript($$result, "/home/alex/Documents/Workspace/portfolio/src/pages/notifications.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/notifications.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/notifications.astro";
const $$url = "/notifications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Notifications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
