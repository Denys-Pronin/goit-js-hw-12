import{a as w,i as p,S as $}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let d=0;async function g(a){try{const t=await w.get(a);return console.log(t),t.data.hits.length===0?t.data.totalHits===d?[]:(p.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff"}),[]):(d+=t.data.hits.length,t.data)}catch(t){return console.log("There was a problem with your fetch operation:",t),[]}}function h(a){const t=document.querySelector(".gallery"),o=a.map(r=>(console.log(r),`<li class="gallery-item">
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
	        </li>`)).join("");t.insertAdjacentHTML("beforeend",o)}const y=document.querySelector(".search"),l=document.querySelector(".loader"),f=document.querySelector(".load-more"),m="43543363-2c3a057550dcf1951d3e0c854",v=15;let n=1,b=0,c=0;y.addEventListener("submit",L);f.addEventListener("click",S);function L(a){a.preventDefault();const t=document.querySelector(".search-field").value,o=document.querySelector(".gallery");if(o.textContent="",n=1,t.trim()==="")y.reset();else{const r=`https://pixabay.com/api/?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${v}&page=${n}`;l.style.display="block",g(r).then(e=>{h(e.hits),l.style.display="none",q.refresh(),u(e.hits.length>0),b+=e.hits.length,e.totalHits,c=o.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:c*2,behavior:"smooth"})})}}function S(){l.style.display="block",n++;const a=document.querySelector(".search-field").value,t=`https://pixabay.com/api/?key=${m}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${v}&page=${n}`;g(t).then(o=>{h(o.hits),l.style.display="none",u(o.hits.length>0),b+=o.hits.length,window.scrollBy({top:c*5+150,behavior:"smooth"})}).catch(o=>{console.error("Error fetching images:",o),l.style.display="none",p.show({position:"topRight",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff"}),u(!1)})}function u(a){f.style.display=a?"block":"none"}let q=new $(".gallery-img a",{});
//# sourceMappingURL=commonHelpers.js.map
