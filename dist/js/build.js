(()=>{var e={170:()=>{const e=document.getElementById("breeds"),t=document.querySelector(".card");function o(){const o=t.querySelector("img"),n=t.querySelector("p"),r=e.value;fetch(`https://dog.ceo/api/breed/${r}/images/random`).then((e=>e.json())).then((e=>{o.src=e.message,o.alt=r,n.textContent=`Click to view more images of ${r}`}))}document.querySelector("form"),fetch("https://dog.ceo/api/breeds/list").then((e=>e.json())).then((t=>function(t){const o=t.map((e=>`<option value="${e}">${e}</option>`)).join("");e.innerHTML=o}(t.message))).catch((e=>console.log(e))),fetch("https://dog.ceo/api/breeds/image/random").then((e=>e.json())).then((o=>function(o){const n=`\n  <img src="${o}" alt>\n  <p> Click to view images of ${e.value}</p>\n\n`;t.innerHTML=n}(o.message))).catch((e=>console.log(e))),e.addEventListener("change",o),t.addEventListener("click",o)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(170)})()})();