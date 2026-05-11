import{s as g}from"./supabase.DDsQrbj8.js";import{l as w,i as m,c as v}from"./lottie.BuYVs1ZJ.js";let l=[],u=window.__USER_ID__||null,s=null;async function x(o){const{data:e}=await g.from("profiles").select("avatar_id").eq("id",o).single();return e?.avatar_id??null}async function L(o){if(u){y(o.id);try{const{error:e}=await g.from("profiles").update({avatar_id:o.id,avatar_lottie_url:o.lottie_url,avatar_url:o.preview_url??null}).eq("id",u);if(e)throw e;S(o),f("Avatar mis à jour avec succès !"),setTimeout(()=>{window.location.href="/profile"},1500)}catch(e){console.error("selectAvatar error:",e),f("Erreur lors de la mise à jour",!0),y(s)}}}function S(o){try{const e=localStorage.getItem("auth_user");if(e){const r=JSON.parse(e);r.avatar_url=o.preview_url??null,r.avatar_lottie_url=o.lottie_url,localStorage.setItem("auth_user",JSON.stringify(r))}}catch{}}function _(){const o=["all",...new Set(l.map(r=>r.category))],e=document.getElementById("category-filters");e.innerHTML=o.map((r,t)=>`
      <button
        class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all
               ${t===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}"
        data-category="${r}">
        ${r==="all"?"Tous":r.charAt(0).toUpperCase()+r.slice(1)}
      </button>
    `).join(""),e.querySelectorAll(".category-btn").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".category-btn").forEach(a=>{a.classList.remove("bg-indigo-600","text-white"),a.classList.add("bg-gray-100","text-gray-700")}),r.classList.add("bg-indigo-600","text-white"),r.classList.remove("bg-gray-100","text-gray-700");const t=r.dataset.category;h(t==="all"?l:l.filter(a=>a.category===t))})})}function h(o){const e=document.getElementById("avatar-grid"),r=document.getElementById("no-results");if(o.length===0){e.innerHTML="",r.classList.remove("hidden");return}r.classList.add("hidden"),e.innerHTML=o.map(t=>{const a=!!t.preview_url?.trim(),n=t.id===s;return`
      <div class="avatar-card group relative bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
                  ${n?"border-indigo-500 shadow-lg shadow-indigo-100/50":"border-gray-100 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1"}"
           data-id="${t.id}"
           data-lottie-url="${t.lottie_url}"
           data-has-preview="${a}">

        <!-- Selected checkmark -->
        <div class="selected-badge absolute top-2 left-2 z-20 hidden">
          <div class="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center shadow-md">
            <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>

        <!-- Thumbnail -->
        <div class="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          ${a?`
            <img src="${t.preview_url}" alt="${t.name}"
                 class="avatar-static absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
            <div class="avatar-lottie absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
          `:`
            <div class="avatar-lottie-direct absolute inset-0 pointer-events-none"></div>
          `}

          <!-- Badge -->
          <div class="absolute top-3 right-3 z-10 flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm
                      ${t.is_free?"bg-emerald-100/90 text-emerald-700 border-emerald-200":"bg-amber-100/90 text-amber-700 border-amber-200"}">
            <span class="w-1.5 h-1.5 rounded-full ${t.is_free?"bg-emerald-500":"bg-amber-500"}"></span>
            ${t.is_free?"Gratuit":"Pro"}
          </div>
        </div>

        <!-- Info -->
        <div class="p-4 pb-2">
          <p class="font-bold text-gray-900 text-sm truncate">${t.name}</p>
          <p class="text-xs text-gray-400 capitalize mt-0.5">${t.category}</p>
        </div>

        <!-- Button -->
        <div class="px-4 pb-4">
          <button class="select-btn w-full py-2.5 text-sm font-semibold rounded-xl transition-all duration-200
                         ${n?"bg-indigo-100 text-indigo-700 cursor-default":"bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md"}">
            ${n?"✓ Sélectionné":"Sélectionner"}
          </button>
        </div>
      </div>`}).join(""),s&&e.querySelector(`[data-id="${s}"]`)?.querySelector(".selected-badge")?.classList.remove("hidden"),e.querySelectorAll(".avatar-card").forEach(t=>{const a=t.dataset.hasPreview==="true",n=t.dataset.lottieUrl;let d=null;if(a){const c=t.querySelector(".avatar-static"),i=t.querySelector(".avatar-lottie");t.addEventListener("mouseenter",()=>{m()&&(c.style.opacity="0",i.style.opacity="1",d?d.play():d=v(i,n))}),t.addEventListener("mouseleave",()=>{c.style.opacity="1",i.style.opacity="0",d?.pause()})}t.querySelector(".select-btn")?.addEventListener("click",c=>{c.stopPropagation();const i=l.find(b=>b.id===t.dataset.id);i&&i.id!==s&&L(i)})}),m()&&p()}function p(){document.querySelectorAll(".avatar-lottie-direct").forEach(o=>{const e=o.closest(".avatar-card")?.dataset.lottieUrl;e&&!o.dataset.inited&&(o.dataset.inited="true",v(o,e,.6))})}function y(o){s=o,document.querySelectorAll(".avatar-card").forEach(e=>{const r=e.dataset.id===o;e.classList.toggle("border-indigo-500",r),e.classList.toggle("shadow-indigo-100",r),e.classList.toggle("border-gray-200",!r),e.querySelector(".selected-badge")?.classList.toggle("hidden",!r);const t=e.querySelector(".select-btn");t&&(t.textContent=r?"✓ Sélectionné":"Sélectionner",t.className=`select-btn w-full py-2 text-sm font-medium rounded-lg transition-colors
          ${r?"bg-indigo-100 text-indigo-700 cursor-default":"bg-indigo-600 text-white hover:bg-indigo-700"}`)})}function f(o,e=!1){const r=document.getElementById("toast"),t=document.getElementById("toast-inner"),a=document.getElementById("toast-message");a.textContent=o,t.className=`${e?"bg-red-600":"bg-green-600"} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`,r.classList.remove("translate-y-20","opacity-0"),setTimeout(()=>r.classList.add("translate-y-20","opacity-0"),3e3)}async function E(){if(!u){document.getElementById("loading")?.classList.add("hidden"),document.getElementById("auth-required")?.classList.remove("hidden");return}const[{data:o,error:e},r]=await Promise.all([g.from("avatars").select("*").order("category").order("name"),x(u)]);if(e||!o){console.error("Erreur chargement avatars:",e),document.getElementById("loading")?.classList.add("hidden");return}l=o,s=r,_(),h(l),document.getElementById("loading")?.classList.add("hidden"),document.getElementById("avatar-content")?.classList.remove("hidden"),await w(),p()}E();
