(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const s=[{title:"Workshop: Introduzione a React",date:"15 Dicembre 2025",time:"18:30",location:"Talent Garden Napoli",address:"Centro Direzionale, Isola E1, Napoli",description:"Un workshop pratico per muovere i primi passi con React, la libreria JavaScript più popolare per costruire interfacce utente moderne."},{title:"Meetup: AI e Machine Learning",date:"10 Gennaio 2026",time:"19:00",location:"Binario F - Fondazione Mondo Digitale",address:"Via Santa Lucia, 38, Napoli",description:"Esploreremo insieme le ultime novità nel campo dell'intelligenza artificiale e discuteremo delle applicazioni pratiche nel mondo del lavoro."},{title:"Aperitivo Tech",date:"25 Gennaio 2026",time:"18:00",location:"Bar del Mare",address:"Lungomare Caracciolo, Napoli",description:"Un aperitivo informale per conoscersi, fare networking e parlare di tecnologia in un ambiente rilassato con vista sul Golfo di Napoli."}],l=[{name:"Nome Cognome",role:"Ruolo",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=member1&backgroundColor=b6e3f4"},{name:"Nome Cognome",role:"Ruolo",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=member2&backgroundColor=c0aede"},{name:"Nome Cognome",role:"Ruolo",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=member3&backgroundColor=d1d4f9"},{name:"Nome Cognome",role:"Ruolo",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=member4&backgroundColor=ffd5dc"}];document.addEventListener("DOMContentLoaded",()=>{m(),p(),g(),f(),h(),b()});function d(e){return`
        <article class="event-card">
            <div class="event-header">
                <div class="event-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${e.date} • ${e.time}</span>
                </div>
                <h3 class="event-title">${e.title}</h3>
            </div>
            <div class="event-body">
                <div class="event-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                        <strong>${e.location}</strong><br>
                        ${e.address}
                    </div>
                </div>
                <p class="event-description">${e.description}</p>
            </div>
        </article>
    `}function m(){const e=document.getElementById("events-container");e&&(e.innerHTML=s.map(d).join(""))}function u(e){return`
        <article class="team-card">
            <img 
                src="${e.image}" 
                alt="Foto di ${e.name}" 
                class="team-image"
                onerror="this.src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=center'"
            >
            <div class="team-info">
                <h3 class="team-name">${e.name}</h3>
                <p class="team-role">${e.role}</p>
                <p class="team-bio">${e.bio}</p>
            </div>
        </article>
    `}function p(){const e=document.getElementById("team-container");e&&(e.innerHTML=l.map(u).join(""))}function g(){const e=document.querySelector(".mobile-menu-btn"),i=document.querySelector(".nav-links");e&&i&&(e.addEventListener("click",()=>{e.classList.toggle("active"),i.classList.toggle("active")}),i.querySelectorAll("a").forEach(r=>{r.addEventListener("click",()=>{e.classList.remove("active"),i.classList.remove("active")})}))}function f(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(i){i.preventDefault();const r=this.getAttribute("href");if(!r)return;const n=document.querySelector(r);if(n){const t=document.querySelector(".navbar"),o=t?t.getBoundingClientRect().height:70,a=n.offsetTop-o;window.scrollTo({top:a,behavior:"smooth"})}})})}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function c(){const e=document.querySelector(".navbar");e&&(window.scrollY>50?(v()?e.style.background="rgba(22, 27, 34, 0.98)":e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 30px var(--shadow)"):(e.style.background="var(--bg-white)",e.style.boxShadow="0 2px 20px var(--shadow)"))}function h(){window.addEventListener("scroll",c)}function b(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{const e=document.querySelector(".navbar");e&&(e.style.background="var(--bg-white)",e.style.boxShadow="0 2px 20px var(--shadow)"),c()})}
