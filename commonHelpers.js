import{a as $,i as d,S as L}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function y(l){try{const t=await $.get(l);return console.log(t),t.data.hits.length===0?(d.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff"}),[]):t.data}catch(t){return console.log("There was a problem with your fetch operation:",t),[]}}function g(l){const t=document.querySelector(".gallery"),o=l.map(r=>(console.log(r),`<li class="gallery-item">
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
	        </li>`)).join("");t.insertAdjacentHTML("beforeend",o)}const h=document.querySelector(".search"),n=document.querySelector(".loader"),p=document.querySelector(".load-more"),f="43543363-2c3a057550dcf1951d3e0c854",m=15;let a=1,c=0,v=0,u=0;h.addEventListener("submit",S);p.addEventListener("click",q);function S(l){l.preventDefault();const t=document.querySelector(".search-field").value,o=document.querySelector(".gallery");if(o.textContent="",a=1,t.trim()==="")h.reset();else{const r=`https://pixabay.com/api/?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${m}&page=${a}`;n.style.display="block",y(r).then(e=>{g(e.hits),n.style.display="none",w.refresh(),b(e.hits.length>0),c+=e.hits.length,v=e.totalHits,u=o.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})})}}function q(){n.style.display="block",a++;const l=document.querySelector(".search-field").value,t=`https://pixabay.com/api/?key=${f}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${m}&page=${a}`;c===v?(d.show({position:"topRight",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff"}),p.style.display="none",n.style.display="none"):y(t).then(o=>{g(o.hits),n.style.display="none",b(o.hits.length>0),c+=o.hits.length,window.scrollBy({top:u*5+150,behavior:"smooth"})}).catch(o=>{console.error("Error fetching images:",o),n.style.display="none"})}function b(l){p.style.display=l?"block":"none"}let w=new L(".gallery-img a",{});w.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
