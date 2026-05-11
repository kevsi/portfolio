import{s as h}from"./supabase.DDsQrbj8.js";let a=[],s="All",l="",d="all",u="popular";const c=document.getElementById("loading");document.getElementById("content");const y=document.getElementById("search-input"),v=document.getElementById("price-filter"),f=document.getElementById("sort-select"),i=document.getElementById("assets-grid"),b=document.getElementById("asset-count"),g=document.getElementById("no-results"),p=document.getElementById("category-tabs");function x(e){const t=e.profiles;return{id:e.id,name:e.title,author:t&&(t.full_name||t.username)||"Anonyme",category:e.category||"Templates",price:e.price||0,rating:e.rating||0,downloads:e.downloads||0,badge:e.badge,previewBg:e.preview_bg||"bg-gradient-to-br from-violet-400 to-indigo-600",description:e.description||""}}async function w(){try{const{data:e,error:t}=await h.from("assets").select("*, profiles:user_id(full_name, username)").order("created_at",{ascending:!1});if(t)throw t;a=(e||[]).map(x),k(),c?.classList.add("hidden"),o()}catch(e){console.error("Erreur chargement assets:",e),c.innerHTML='<div class="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4"><svg class="w-10 h-10 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div><p class="text-gray-500">Erreur lors du chargement</p>'}}function k(){document.getElementById("stat-total").textContent=a.length,document.getElementById("stat-creators").textContent=[...new Set(a.map(t=>t.author))].length;const e=a.reduce((t,r)=>t+r.downloads,0);document.getElementById("stat-downloads").textContent=e>999?(e/1e3).toFixed(0)+"k":e}function L(){let e=[...a];if(s!=="All"&&(e=e.filter(t=>t.category===s)),d==="free"?e=e.filter(t=>t.price===0):d==="paid"&&(e=e.filter(t=>t.price>0)),l){const t=l.toLowerCase();e=e.filter(r=>r.name.toLowerCase().includes(t)||r.author.toLowerCase().includes(t)||r.category.toLowerCase().includes(t))}switch(u){case"popular":e.sort((t,r)=>r.downloads-t.downloads);break;case"newest":e.sort((t,r)=>r.id.localeCompare(t.id));break;case"price-asc":e.sort((t,r)=>t.price-r.price);break;case"price-desc":e.sort((t,r)=>r.price-t.price);break;case"rating":e.sort((t,r)=>r.rating-t.rating);break}return e}function B(e){if(b.textContent=e.length,e.length===0){i.classList.add("hidden"),g.classList.remove("hidden");return}i.classList.remove("hidden"),g.classList.add("hidden"),i.innerHTML=e.map((t,r)=>{const n=t.price===0,m="★".repeat(Math.round(t.rating))+"☆".repeat(5-Math.round(t.rating));return`<a href="/marketplace/${t.id}" class="block group" style="animation: fadeInUp 0.3s ease ${r*.04}s both">
        <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300">
          <!-- Preview -->
          <div class="relative h-48 ${t.previewBg} overflow-hidden">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/></svg>
            </div>
            <!-- Quick action overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-xl shadow-lg">Voir le détail →</span>
            </div>
            <!-- Badge -->
            ${t.badge?`<span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-lg ${n?"bg-emerald-500":"bg-violet-500"} text-white shadow-sm">${t.badge}</span>`:""}
            <!-- Price pill -->
            <span class="absolute top-3 right-3 px-3 py-1 text-sm font-bold rounded-lg ${n?"bg-white/90 text-emerald-600":"bg-white/90 text-gray-900"} backdrop-blur-sm shadow-sm">
              ${n?"Gratuit":t.price+"€"}
            </span>
          </div>
          
          <!-- Info -->
          <div class="p-4">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-bold text-gray-900 truncate group-hover:text-violet-600 transition-colors">${t.name}</h3>
            </div>
            <p class="text-sm text-gray-400 mb-3 truncate">${t.author}</p>
            
            <!-- Category + Rating -->
            <div class="flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded-lg font-medium">${t.category}</span>
              <div class="flex items-center gap-3">
                <span class="text-xs text-amber-500">${m}</span>
                <span class="text-xs text-gray-400 flex items-center gap-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  ${t.downloads>999?(t.downloads/1e3).toFixed(1)+"k":t.downloads}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>`}).join("")}function E(){p.querySelectorAll("button").forEach(e=>{e.dataset.category===s?(e.classList.remove("bg-white","text-gray-600","border-gray-200"),e.classList.add("bg-gray-900","text-white")):(e.classList.remove("bg-gray-900","text-white"),e.classList.add("bg-white","text-gray-600","border-gray-200"))})}function o(){B(L()),E()}y?.addEventListener("input",e=>{l=e.target.value,o()});v?.addEventListener("change",e=>{d=e.target.value,o()});f?.addEventListener("change",e=>{u=e.target.value,o()});p?.addEventListener("click",e=>{e.target.tagName==="BUTTON"&&(s=e.target.dataset.category,o())});w();
