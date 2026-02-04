/**
 * DATI - Napoli Software User Group
 * 
 * Per aggiungere nuovi eventi o membri del team, modifica questo file.
 * È strutturato per essere semplice da aggiornare anche per chi non conosce TypeScript.
 */

import { EventData, TeamMember, SocialLinks } from './types';

// ==========================================
// EVENTI
// Per aggiungere un nuovo evento, copia il template seguente e inseriscilo nell'array:
// {
//     title: "Titolo dell'evento",
//     date: "Data (es: 15 Dicembre 2025)",
//     time: "Orario (es: 18:30)",
//     location: "Nome del luogo",
//     address: "Indirizzo completo",
//     description: "Descrizione dell'evento"
// }
// ==========================================

export const events: EventData[] = [
    {
        title: "Workshop: Introduzione a React",
        date: "15 Dicembre 2025",
        time: "18:30",
        location: "Talent Garden Napoli",
        address: "Centro Direzionale, Isola E1, Napoli",
        description: "Un workshop pratico per muovere i primi passi con React, la libreria JavaScript più popolare per costruire interfacce utente moderne."
    },
    {
        title: "Meetup: AI e Machine Learning",
        date: "10 Gennaio 2026",
        time: "19:00",
        location: "Binario F - Fondazione Mondo Digitale",
        address: "Via Santa Lucia, 38, Napoli",
        description: "Esploreremo insieme le ultime novità nel campo dell'intelligenza artificiale e discuteremo delle applicazioni pratiche nel mondo del lavoro."
    },
    {
        title: "Aperitivo Tech",
        date: "25 Gennaio 2026",
        time: "18:00",
        location: "Bar del Mare",
        address: "Lungomare Caracciolo, Napoli",
        description: "Un aperitivo informale per conoscersi, fare networking e parlare di tecnologia in un ambiente rilassato con vista sul Golfo di Napoli."
    }
];

// ==========================================
// MEMBRI DEL TEAM
// Per aggiungere un nuovo membro, copia il template seguente e inseriscilo nell'array:
// {
//     name: "Nome Cognome",
//     role: "Ruolo nel gruppo",
//     bio: "Breve descrizione della persona",
//     image: "percorso/immagine.jpg" oppure "https://url-immagine.com/foto.jpg"
// }
// 
// Per le immagini puoi:
// 1. Mettere il file nella cartella "images/" e usare "images/nome-file.jpg"
// 2. Usare un URL esterno come "https://esempio.com/foto.jpg"
// 3. Usare un placeholder (verrà mostrata un'immagine generica)
// ==========================================

export const teamMembers: TeamMember[] = [
    {
        name: "Nome Cognome",
        role: "Ruolo",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member1&backgroundColor=b6e3f4"
    },
    {
        name: "Nome Cognome",
        role: "Ruolo",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member2&backgroundColor=c0aede"
    },
    {
        name: "Nome Cognome",
        role: "Ruolo",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member3&backgroundColor=d1d4f9"
    },
    {
        name: "Nome Cognome",
        role: "Ruolo",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member4&backgroundColor=ffd5dc"
    }
];

// ==========================================
// INFORMAZIONI DI CONTATTO
// Modifica questi link con i tuoi dati reali
// ==========================================

export const socialLinks: SocialLinks = {
    email: "napolisoftware@gmail.com",
    linkedin: "https://linkedin.com/company/napolisoftware",
    instagram: "https://instagram.com/napolisoftware"
};
