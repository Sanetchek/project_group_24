import{$ as n}from"./assets/vendor-ff2c5e87.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){n(".our-yachts-list").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:3500,speed:1500,infinite:!0,arrows:!1,draggable:!0,easing:"easeOutSine",responsive:[{breakpoint:1280,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})});
//# sourceMappingURL=commonHelpers.js.map
