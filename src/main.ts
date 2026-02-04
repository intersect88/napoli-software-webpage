/**
 * Script principale - Napoli Software User Group
 */

import { events, teamMembers } from './data';
import type { EventData, TeamMember } from './types';

/**
 * Inizializza l'applicazione quando il DOM è pronto
 */
document.addEventListener('DOMContentLoaded', (): void => {
    renderEvents();
    renderTeam();
    initMobileMenu();
    initSmoothScroll();
    initScrollEffect();
    initThemeListener();
});

/**
 * Crea l'HTML per un singolo evento
 */
function createEventCard(event: EventData): string {
    return `
        <article class="event-card">
            <div class="event-header">
                <div class="event-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${event.date} • ${event.time}</span>
                </div>
                <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-body">
                <div class="event-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                        <strong>${event.location}</strong><br>
                        ${event.address}
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
            </div>
        </article>
    `;
}

/**
 * Renderizza gli eventi nella pagina
 */
function renderEvents(): void {
    const container = document.getElementById('events-container');
    if (!container) return;

    container.innerHTML = events.map(createEventCard).join('');
}

/**
 * Crea l'HTML per un singolo membro del team
 */
function createTeamCard(member: TeamMember): string {
    const placeholderImage = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=center';
    
    return `
        <article class="team-card">
            <img 
                src="${member.image}" 
                alt="Foto di ${member.name}" 
                class="team-image"
                onerror="this.src='${placeholderImage}'"
            >
            <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
            </div>
        </article>
    `;
}

/**
 * Renderizza i membri del team nella pagina
 */
function renderTeam(): void {
    const container = document.getElementById('team-container');
    if (!container) return;

    container.innerHTML = teamMembers.map(createTeamCard).join('');
}

/**
 * Inizializza il menu mobile
 */
function initMobileMenu(): void {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (): void => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Chiudi il menu quando si clicca su un link
        navLinks.querySelectorAll('a').forEach((link: Element) => {
            link.addEventListener('click', (): void => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Inizializza lo smooth scroll per i link interni
 */
function initSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
        anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event): void {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (!href) return;
            
            const target = document.querySelector(href);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navHeight = navbar ? navbar.getBoundingClientRect().height : 70;
                const targetPosition = (target as HTMLElement).offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Verifica se il tema scuro è attivo
 */
function isDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Aggiorna lo stile della navbar in base allo scroll
 */
function updateNavbarStyle(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        if (isDarkMode()) {
            navbar.style.background = 'rgba(22, 27, 34, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 30px var(--shadow)';
    } else {
        navbar.style.background = 'var(--bg-white)';
        navbar.style.boxShadow = '0 2px 20px var(--shadow)';
    }
}

/**
 * Inizializza l'effetto di scroll sulla navbar
 */
function initScrollEffect(): void {
    window.addEventListener('scroll', updateNavbarStyle);
}

/**
 * Ascolta i cambiamenti del tema del sistema
 */
function initThemeListener(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (): void => {
        // Resetta lo stile della navbar quando cambia il tema
        const navbar = document.querySelector('.navbar') as HTMLElement | null;
        if (navbar) {
            navbar.style.background = 'var(--bg-white)';
            navbar.style.boxShadow = '0 2px 20px var(--shadow)';
        }
        // Riapplica lo stile in base allo scroll attuale
        updateNavbarStyle();
    });
}
