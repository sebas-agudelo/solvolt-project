# SolVolt – Webbplats för elfirma

En modern, snabb och responsiv webbplats. Sidan presenterar företagets tjänster, referensprojekt och låter besökare skicka offertförfrågningar direkt via ett kontaktformulär. Allt innehåll hanteras av företaget självt via Sanity Studio, utan att koden behöver ändras.

https://volt-lilac-xi.vercel.app/

<img width="2518" height="1246" alt="Skärmbild 2026-11-20 223300" src="https://github.com/user-attachments/assets/0d94f189-19e0-4824-89a9-82b2bf1b295a" />
<img width="2520" height="1262" alt="Skärmbild 2026-11-20 223313" src="https://github.com/user-attachments/assets/f239e139-ba60-40ec-a041-b3711dda0833" />
<img width="2520" height="1262" alt="Skärmbild 2026-11-20 223330" src="https://github.com/user-attachments/assets/68ec99c7-d9f7-490a-ad64-43e3c38e6a0a" />
<img width="2528" height="1248" alt="Skärmbild 2026-11-20 223348" src="https://github.com/user-attachments/assets/4deb6404-9750-4eff-a208-3445ed147a7a" />
<img width="2524" height="1276" alt="Skärmbild 2026-11-20 223613" src="https://github.com/user-attachments/assets/b458dda9-adfb-4ce1-82ef-36296d3d973f" />
<img width="2518" height="1266" alt="Skärmbild 2026-11-20 223629" src="https://github.com/user-attachments/assets/22a76708-8284-41b5-9009-7613910275e1" />

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
