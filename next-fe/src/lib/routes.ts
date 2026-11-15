// lib/routes.ts
export type RouteKey = keyof typeof ROUTES;

export const ROUTES = {
  about: { title: "Om oss", slug: "/about" },
  contact: { title: "Kundtjänst", slug: "/contact" },
  services: { title: "Tjänster", slug: "/services" },
} 
