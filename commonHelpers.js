import{a as $,i as g,S as L}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let p=0;async function h(a){try{const t=await $.get(a);return console.log(t),t.data.hits.length===0?t.data.totalHits===p?[]:(g.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff"}),[]):(p+=t.data.hits.length,t.data)}catch(t){return console.log("There was a problem with your fetch operation:",t),[]}}function y(a){const t=document.querySelector(".gallery"),o=a.map(r=>(console.log(r),`<li class="gallery-item">
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
	        </li>`)).join("");t.insertAdjacentHTML("beforeend",o)}const f=document.querySelector(".search"),l=document.querySelector(".loader"),m=document.querySelector(".load-more"),v="43543363-2c3a057550dcf1951d3e0c854",b=15;let n=1,i=0,u=0;f.addEventListener("submit",S);m.addEventListener("click",q);function S(a){a.preventDefault();const t=document.querySelector(".search-field").value,o=document.querySelector(".gallery");if(o.textContent="",n=1,t.trim()==="")f.reset();else{const r=`https://pixabay.com/api/?key=${v}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${b}&page=${n}`;l.style.display="block",h(r).then(e=>{y(e.hits),l.style.display="none",w.refresh(),i+=e.hits.length,d(i<e.totalHits),e.totalHits,u=o.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})})}}function q(){l.style.display="block",n++;const a=document.querySelector(".search-field").value,t=`https://pixabay.com/api/?key=${v}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${b}&page=${n}`;h(t).then(o=>{y(o.hits),l.style.display="none",w.refresh(),i+=o.hits.length,d(i<o.totalHits),window.scrollBy({top:u*5+150,behavior:"smooth"})}).catch(o=>{console.error("Error fetching images:",o),l.style.display="none",g.show({position:"topRight",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff"}),d(!1)})}function d(a){m.style.display=a?"block":"none"}let w=new L(".gallery-img a",{});
//# sourceMappingURL=commonHelpers.js.map
