import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, organization, message } = body;
    if (!name?.trim() || !email?.trim() || !organization?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const safeName    = escapeHtml(name.trim());
    const safeEmail   = escapeHtml(email.trim());
    const safeOrg     = escapeHtml(organization.trim());
    const safeMessage = escapeHtml(message.trim());

   
    const { error: notifError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RECIPIENT_EMAIL!,
      replyTo: safeEmail,
      subject: type === "client"
        ? `🏢 Nouvelle demande Organisation — ${safeName}`
        : `🔬 Nouvelle candidature Talent — ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #f0f0f0; border-radius: 8px;">
          <div style="border-left: 4px solid #f97316; padding-left: 16px; margin-bottom: 24px;">
            <h2 style="color: #f97316; margin: 0;">
              ${type === "client"
                ? "🏢 Nouvelle Demande Organisation"
                : "🔬 Nouvelle Candidature Talent"}
            </h2>
            <p style="color: #888; margin: 4px 0 0;">ResearchGuide</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #fafafa;">
              <td style="padding: 10px 12px; font-weight: bold; width: 140px; color: #555;">Type</td>
              <td style="padding: 10px 12px;">
                <span style="background: #fff7ed; color: #f97316; padding: 2px 10px; border-radius: 999px; font-size: 13px;">
                  ${type === "client" ? "Organisation / Client" : "Talent / Chercheur"}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #555;">Nom</td>
              <td style="padding: 10px 12px;">${safeName}</td>
            </tr>
            <tr style="background: #fafafa;">
              <td style="padding: 10px 12px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 12px;">
                <a href="mailto:${safeEmail}" style="color: #f97316;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #555;">
                ${type === "client" ? "Organisation" : "Institution / Labo"}
              </td>
              <td style="padding: 10px 12px;">${safeOrg}</td>
            </tr>
            <tr style="background: #fafafa;">
              <td style="padding: 10px 12px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 10px 12px;">${safeMessage}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #555;">Date</td>
              <td style="padding: 10px 12px; color: #888;">${new Date().toLocaleString('fr-FR')}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 12px; background: #fff7ed; border-radius: 6px; font-size: 13px; color: #888;">
            ⚡ Répondre directement à cet email pour contacter ${safeName}.
          </div>
        </div>
      `,
    });

    if (notifError) {
      console.error('Notification email error:', notifError);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    const { error: confirmError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email, 
      subject: type === "client"
        ? "Votre demande a bien été reçue | Your request has been received"
        : "Votre candidature a bien été reçue | Your application has been received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px;">

          <!-- HEADER -->
          <div style="text-align: center; padding: 24px 0; border-bottom: 2px solid #f97316; margin-bottom: 32px;">
            <h1 style="color: #f97316; font-size: 22px; margin: 0;">ResearchGuide</h1>
          </div>

          <!-- FRENCH VERSION -->
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; font-size: 18px;">Bonjour ${safeName},</h2>

            ${type === "client" ? `
            <p style="color: #444; line-height: 1.7;">
              Nous avons bien reçu votre demande concernant notre plateforme ResearchGuide.
              Notre équipe étudiera votre dossier avec attention et vous contactera dans les <strong>48 heures</strong>.
            </p>
            <p style="color: #444; line-height: 1.7;">
              En attendant, sachez que ResearchGuide connecte les <strong>organisations</strong> aux
              meilleurs <strong>talents scientifiques</strong> du golfe et d'Afrique pour vos projets de recherche,
              innovation et développement.
            </p>
            ` : `
            <p style="color: #444; line-height: 1.7;">
              Nous avons bien reçu votre candidature sur notre plateforme ResearchGuide.
              Notre équipe examinera votre profil et vous contactera dans les <strong>48 heures</strong>.
            </p>
            <p style="color: #444; line-height: 1.7;">
              ResearchGuide vous permettra de vous connecter avec les meilleures
              <strong>organisations scientifiques</strong> du golfe et d'Afrique pour développer
              votre carrière et vos projets de recherche.
            </p>
            `}

            <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 12px 16px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; color: #555; font-size: 14px;">
                📋 <strong>Récapitulatif de votre soumission :</strong><br/>
                Nom : ${safeName}<br/>
                ${type === "client" ? "Organisation" : "Institution"} : ${safeOrg}<br/>
                Email : ${safeEmail}
              </p>
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />

          <!-- ENGLISH VERSION -->
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; font-size: 18px;">Hello ${safeName},</h2>

            ${type === "client" ? `
            <p style="color: #444; line-height: 1.7;">
              We have successfully received your request regarding our ResearchGuide platform.
              Our team will carefully review your file and contact you within <strong>48 hours</strong>.
            </p>
            <p style="color: #444; line-height: 1.7;">
              ResearchGuide bridges the gap between <strong>organizations</strong> and the best
              <strong>scientific talents</strong> across the Gulf and Africa for your research,
              innovation, and development projects.
            </p>
            ` : `
            <p style="color: #444; line-height: 1.7;">
              We have successfully received your application on our ResearchGuide platform.
              Our team will review your profile and contact you within <strong>48 hours</strong>.
            </p>
            <p style="color: #444; line-height: 1.7;">
              ResearchGuide will connect you with the best <strong>scientific organizations</strong>
              across the Gulf and Africa to grow your career and research projects.
            </p>
            `}

            <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 12px 16px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; color: #555; font-size: 14px;">
                📋 <strong>Submission summary:</strong><br/>
                Name: ${safeName}<br/>
                ${type === "client" ? "Organization" : "Institution"}: ${safeOrg}<br/>
                Email: ${safeEmail}
              </p>
            </div>
          </div>

          <!-- FOOTER -->
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} ResearchGuide. Tous droits réservés / All rights reserved.
            </p>
            <p style="color: #bbb; font-size: 11px; margin: 6px 0 0;">
              ⚠️ Cet email est envoyé automatiquement, merci de ne pas y répondre directement.<br/>
              This is an automated email, please do not reply directly.
            </p>
          </div>

        </div>
      `,
    });

       if (confirmError) {
      console.error('Confirmation email error:', confirmError);
    }

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}