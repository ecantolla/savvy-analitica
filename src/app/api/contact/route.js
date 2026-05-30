import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ success: false, error: "API key no configurada" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, lastname, email, phone, company, message } = body;

    const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ecantolla@thk.cl";

    const { data, error } = await resend.emails.send({
      from: "SAVVY Demo <noreply@savvy-analitica.cl>",
      to: [toEmail],
      replyTo: email,
      subject: `Nueva solicitud de demo: ${name} ${lastname} — ${company || "Sin empresa"}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8fafc;">
          <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #00BFA5; font-size: 24px; font-weight: 800; margin: 0;">SAVVY</h1>
              <p style="color: #64748b; margin: 8px 0 0;">Nueva solicitud de Demo</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 40%;">Nombre</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 14px;">${name} ${lastname}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 14px;">${email}</td>
              </tr>
              ${phone ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Teléfono</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 14px;">${phone}</td></tr>` : ""}
              ${company ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Empresa</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 14px;">${company}</td></tr>` : ""}
              ${message ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Mensaje</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 14px;">${message}</td></tr>` : ""}
            </table>

            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #00BFA5; color: white; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 15px;">
                Responder a ${name} →
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 24px;">SAVVY — Analítica Comercial para Cadenas de Restaurantes</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ success: false, error: "Error interno del servidor" }, { status: 500 });
  }
}
