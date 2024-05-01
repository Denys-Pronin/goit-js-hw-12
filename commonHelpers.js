import{a as $,i as y,S as L}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let g=0;async function h(a){try{const t=await $.get(a);return console.log(t),t.data.hits.length===0?t.data.totalHits===g?[]:(y.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff"}),[]):(g+=t.data.hits.length,t.data)}catch(t){return console.log("There was a problem with your fetch operation:",t),[]}}function f(a){const t=document.querySelector(".gallery"),o=a.map(r=>(console.log(r),`<li class="gallery-item">
	          <div class="gallery-img">
            <a href="${r.largeImageURL}"><img src="${r.webformatURL}"></a>
            </div>
	          <div class="property-wrapper">
            <div class="property">
            Likes
            <span class="value">${r.likes}</span>
            </div>
	          <div class ="property">
            Views
            <span class="value">${r.views}</span>
            </div>
	          <div class ="property">
            Comments
            <span class="value">${r.comments}</span>
            </div>
	          <div class ="property">
            Downloads
            <span class="value">${r.downloads}</span>
            </div>
            </div>
	        </li>`)).join("");t.insertAdjacentHTML("beforeend",o)}const m=document.querySelector(".search"),n=document.querySelector(".loader"),p=document.querySelector(".load-more"),v="43543363-2c3a057550dcf1951d3e0c854",b=15;let i=1,l=0,u=0;m.addEventListener("submit",S);p.addEventListener("click",q);function S(a){a.preventDefault();const t=document.querySelector(".search-field").value,o=document.querySelector(".gallery");if(o.textContent="",i=1,l=0,t.trim()==="")m.reset();else{const r=`https://pixabay.com/api/?key=${v}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${b}&page=${i}`;n.style.display="block",h(r).then(e=>{f(e.hits),n.style.display="none",w.refresh(),l+=e.hits.length,d(l<e.totalHits),e.totalHits,u=o.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})})}}function q(){n.style.display="block",i++;const a=document.querySelector(".search-field").value,t=`https://pixabay.com/api/?key=${v}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${b}&page=${i}`;h(t).then(o=>{f(o.hits),n.style.display="none",w.refresh(),l+=o.hits.length,d(l<o.totalHits),l>=o.totalHits&&(p.style.display="none",y.show({position:"topRight",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff"})),window.scrollBy({top:u*5+150,behavior:"smooth"})}).catch(o=>{console.error("Error fetching images:",o),n.style.display="none",d(!1)})}function d(a){p.style.display=a?"block":"none"}let w=new L(".gallery-img a",{});
//# sourceMappingURL=commonHelpers.js.map
