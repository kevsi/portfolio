import{s as E}from"./supabase.DDsQrbj8.js";const h=document.getElementById("loading"),$=document.getElementById("project-detail"),b=document.getElementById("not-found"),w=window.location.pathname.split("/"),x=w[w.length-1];async function j(){if(!x||x==="undefined"||x===""){h?.classList.add("hidden"),b?.classList.remove("hidden");return}try{const{data:e,error:m}=await E.from("assets").select("*, profiles:user_id(full_name, username, avatar_url, email)").eq("id",x).single();if(m||!e){h?.classList.add("hidden"),b?.classList.remove("hidden");return}const s=document.getElementById("project-title"),o=document.getElementById("project-description"),r=document.getElementById("project-price"),i=document.getElementById("project-date"),n=document.getElementById("project-image"),t=document.getElementById("no-image"),c=document.getElementById("project-image-container"),l=document.getElementById("creator-name"),u=document.getElementById("creator-avatar"),g=document.getElementById("buy-download-btn");s&&(s.textContent=e.title),o&&(o.textContent=e.description||"Aucune description disponible.");const f=document.getElementById("breadcrumb-title");f&&(f.textContent=e.title);const L=document.getElementById("tags-section"),v=document.getElementById("tags-list");e.tags&&e.tags.length>0&&v&&(v.innerHTML=e.tags.map(a=>`<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm">${a}</span>`).join(""),L?.classList.remove("hidden"));const I=document.getElementById("info-updated");I&&(I.textContent=new Date(e.updated_at||e.created_at).toLocaleDateString("fr-FR"));const d=!e.price||e.price===0;r&&(r.textContent=d?"Gratuit":`${e.price}€`,r.className=d?"text-2xl font-bold text-green-600":"text-2xl font-bold text-gray-900"),i&&(i.textContent=new Date(e.created_at).toLocaleDateString("fr-FR")),e.file_url?(n&&(n.src=e.file_url,n.alt=e.title,n.classList.remove("hidden")),t?.classList.add("hidden")):(n?.classList.add("hidden"),t?.classList.remove("hidden"),c?.classList.add("flex"));const y=e.profiles;let B=null;if(y){B=e.user_id;const a=y.full_name||y.username||"Anonyme";l&&(l.textContent=a),u&&(u.src=y.avatar_url||`https://ui-avatars.com/api/?name=${encodeURIComponent(a)}&background=6366f1&color=fff`,u.alt=a);const p=document.getElementById("creator-link");p&&(p.href=`/marketplace?creator=${B}`)}if(g){const a=document.getElementById("btn-text"),p=document.getElementById("btn-price");a&&(a.textContent=d?"Télécharger gratuitement":"Acheter maintenant"),p&&(p.textContent=d?"":`- ${e.price}€`),g.addEventListener("click",()=>{alert(d?"Téléchargement démarré !":"Redirection vers le paiement...")})}await _(e.user_id,e.id),await C(e.id,d),h?.classList.add("hidden"),$?.classList.remove("hidden")}catch{h?.classList.add("hidden"),b?.classList.remove("hidden")}}async function _(e,m){try{const{data:s,error:o}=await E.from("assets").select("*").eq("user_id",e).neq("id",m).limit(3).order("created_at",{ascending:!1});if(o||!s||s.length===0)return;const r=document.getElementById("more-projects-section"),i=document.getElementById("more-projects-grid");if(!i)return;i.innerHTML=s.map(n=>{const t=!n.price||n.price===0,c=t?"Gratuit":`${n.price}€`,l=t?"text-green-600":"text-gray-900";return`
          <a href="/marketplace/${n.id}" class="block bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            ${n.file_url?`
              <img src="${n.file_url}" alt="${n.title}" class="w-full h-40 object-cover" />
            `:`
              <div class="w-full h-40 bg-gray-100 flex items-center justify-center">
                <span class="text-gray-400 text-4xl">📦</span>
              </div>
            `}
            <div class="p-4">
              <div class="flex items-start justify-between mb-2">
                <h3 class="font-semibold text-gray-900 line-clamp-1">${n.title}</h3>
                <span class="font-bold ${l}">${c}</span>
              </div>
              <p class="text-sm text-gray-600 line-clamp-2">${n.description||""}</p>
            </div>
          </a>
        `}).join(""),r?.classList.remove("hidden")}catch(s){console.error("Erreur chargement autres assets:",s)}}async function C(e,m){try{const{data:s,error:o}=await E.from("assets").select("*, profiles:user_id(full_name, username, avatar_url)").neq("id",e).limit(6).order("created_at",{ascending:!1});if(o||!s||s.length===0)return;const r=s.filter(t=>(!t.price||t.price===0)===m).slice(0,3);if(r.length===0)return;const i=document.getElementById("similar-section"),n=document.getElementById("similar-grid");if(!n)return;n.innerHTML=r.map(t=>{const c=!t.price||t.price===0,l=c?"Gratuit":`${t.price}€`,u=c?"text-green-600":"text-gray-900",g=t.profiles,f=g?.full_name||g?.username||"Anonyme";return`
          <a href="/marketplace/${t.id}" class="block bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            ${t.file_url?`
              <img src="${t.file_url}" alt="${t.title}" class="w-full h-40 object-cover" />
            `:`
              <div class="w-full h-40 bg-gray-100 flex items-center justify-center">
                <span class="text-gray-400 text-4xl">📦</span>
              </div>
            `}
            <div class="p-4">
              <div class="flex items-start justify-between mb-2">
                <h3 class="font-semibold text-gray-900 line-clamp-1">${t.title}</h3>
                <span class="font-bold ${u}">${l}</span>
              </div>
              <p class="text-sm text-gray-500 mb-2">par ${f}</p>
              <p class="text-sm text-gray-600 line-clamp-2">${t.description||""}</p>
            </div>
          </a>
        `}).join(""),i?.classList.remove("hidden")}catch(s){console.error("Erreur chargement assets similaires:",s)}}j();
