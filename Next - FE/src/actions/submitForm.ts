"use server";

import { Resend } from 'resend';

const resendClient = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(prevState: any, formData: FormData) {
    if (formData.get('website')) return { ok: true }

    const firstname = String(formData.get('firstname') ?? '').trim()
    const lastname = String(formData.get('lastname') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!firstname || !lastname || !phone || !email || !message) {
        return { ok: false, error: 'Fyll i alla fält.' }
    }

    const { error } = await resendClient.emails.send({
        from: 'Formulario <onboarding@resend.dev>',
        to: ['samwebcode@gmail.com'],
        replyTo: email,
        subject: `Jag vill bli kontaktad - ${email}`,
        text: `
    Förnamn: ${firstname}
    Efternamn: ${lastname}
    Telefonnummer: ${phone}
    
    ${message}
    `,
    })

    if (error) return { ok: false, error: 'Något gick fel. Försök igen.' }
    return { ok: true }
}