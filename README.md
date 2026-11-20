# SolVolt – Webbplats för elfirm

En modern, snabb och responsiv webbplats. Sidan presenterar företagets tjänster, referensprojekt och låter besökare skicka offertförfrågningar direkt via ett kontaktformulär. Allt innehåll hanteras av företaget självt via Sanity Studio, utan att koden behöver ändras.

https://volt-lilac-xi.vercel.app/

## Funktioner

- **Startsida** med hero, tjänster, "Det här kan du räkna med", referensprojekt, FAQ och kontaktformulär
- **Referensprojekt** där det största projektet lyfts fram automatiskt, med kund, ort och en separat sida för alla uppdrag
- **Tjänstesida och Om oss-sida** med personal och företagspresentation
- **Kontaktformulär** med validering som skickar e-post via Resend
- **Innehållshantering i Sanity CMS** för texter, tjänster, projekt och personal, med fasta singleton-dokument för startsidan och tjänstesidan
- **Responsiv design** som är mobilanpassad och byggd med Tailwind CSS
- **Typsäker kodbas** med TypeScript genom hela projektet

## Teknisk stack

| Område | Teknik |
| --- | --- |
| Ramverk | [Next.js](https://nextjs.org/) |
| Språk | TypeScript |
| Innehåll (CMS) | [Sanity](https://www.sanity.io/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| E-post | [Resend](https://resend.com/) |
| Hosting | [Vercel] 

## Kom igång

### Förutsättningar

- Node.js
- Ett Sanity-projekt (projekt-ID och dataset)
- Ett Resend-konto med API-nyckel

### Miljövariabler

Skapa en `.env` i projektets rot:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ditt_projekt_id
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=din_resend_nyckel
CONTACT_EMAIL_TO=mottagare@foretag.se
