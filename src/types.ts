/**
 * Tipi TypeScript per Napoli Software User Group
 */

export interface EventData {
    title: string;
    date: string;
    time: string;
    location: string;
    address: string;
    description: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface SocialLinks {
    email: string;
    linkedin: string;
    instagram: string;
}
