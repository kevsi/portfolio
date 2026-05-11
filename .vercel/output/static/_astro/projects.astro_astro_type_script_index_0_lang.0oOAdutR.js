import{s as g}from"./supabase.DDsQrbj8.js";let o=[],a="";const i=document.getElementById("loading"),h=document.getElementById("content"),f=document.getElementById("search-input"),s=document.getElementById("projects-grid"),p=document.getElementById("project-count"),d=document.getElementById("no-results");async function v(){try{const{data:t,error:e}=await g.from("projects").select("*, profiles:user_id(full_name, username)").order("created_at",{ascending:!1});if(e)throw e;o=t||[],document.getElementById("stat-total").textContent=o.length,document.getElementById("stat-creators").textContent=[...new Set(o.map(r=>r.profiles?.full_name||r.profiles?.username).filter(Boolean))].length||o.length,document.getElementById("stat-progress").textContent=o.filter(r=>{const n=new Date(r.created_at);return Date.now()-n.getTime()<10080*60*1e3}).length,i?.classList.add("hidden"),h?.classList.remove("hidden"),c()}catch(t){console.error("Erreur chargement projets:",t),i.innerHTML='<div class="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4"><svg class="w-10 h-10 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div><p class="text-gray-500">Erreur lors du chargement</p>'}}function b(){let t=[...o];if(a){const e=a.toLowerCase();t=t.filter(r=>r.title?.toLowerCase().includes(e)||r.description?.toLowerCase().includes(e))}return t}function x(t){if(p.textContent=t.length,t.length===0){s.classList.add("hidden"),d.classList.remove("hidden");return}s.classList.remove("hidden"),d.classList.add("hidden"),s.innerHTML=t.map((e,r)=>{const n=!!e.demo_url,m=y(r),l=e.profiles?.full_name||e.profiles?.username||"Notre équipe",u=new Date(e.created_at).toLocaleDateString("fr-FR",{month:"short",year:"numeric"});return`<div class="block group" style="animation: fadeInUp 0.3s ease ${r*.05}s both">
        <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300">
          <!-- Image -->
          <div class="relative h-56 overflow-hidden">
            ${e.image_url?`<img src="${e.image_url}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />`:`<div class="w-full h-full ${m}"></div>`}
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

            <!-- Quick action -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ${n?`<a href="${e.demo_url}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-xl shadow-lg flex items-center gap-2 hover:bg-white transition-colors">
                    Voir la démo
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>`:'<span class="px-5 py-2.5 bg-white/90 backdrop-blur-sm text-gray-500 text-sm font-medium rounded-xl shadow-lg">Bientôt disponible</span>'}
            </div>

            <!-- Date badge -->
            <span class="absolute top-3 right-3 px-2.5 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-600 rounded-lg shadow-sm">
              ${u}
            </span>
          </div>

          <!-- Info -->
          <div class="p-5">
            <h3 class="font-bold text-gray-900 text-lg mb-1.5 group-hover:text-emerald-600 transition-colors">${e.title}</h3>
            <p class="text-sm text-gray-400 mb-4 line-clamp-2">${e.description||""}</p>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">
                  ${l.charAt(0).toUpperCase()}
                </div>
                <span class="text-xs text-gray-500">${l}</span>
              </div>
              ${n?`<a href="${e.demo_url}" target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Démo
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>`:'<span class="text-xs text-gray-400">En développement</span>'}
            </div>
          </div>
        </div>
      </div>`}).join("")}function y(t){const e=["bg-gradient-to-br from-blue-500 to-cyan-600","bg-gradient-to-br from-purple-500 to-pink-600","bg-gradient-to-br from-emerald-500 to-teal-600","bg-gradient-to-br from-orange-500 to-amber-600","bg-gradient-to-br from-indigo-500 to-violet-600","bg-gradient-to-br from-red-500 to-rose-600"];return e[t%e.length]}function c(){x(b())}f?.addEventListener("input",t=>{a=t.target.value,c()});v();
