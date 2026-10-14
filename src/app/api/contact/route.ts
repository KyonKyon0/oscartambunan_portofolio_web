import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Nama wajib diisi minimal 2 karakter.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Format email tidak valid.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Pesan wajib diisi minimal 5 karakter.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Konfigurasi server email belum lengkap.' },
        { status: 500 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'oss.tam1137@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
    const emailSubject = subject?.trim()
      ? `[Portofolio] ${subject.trim()} - dari ${name.trim()}`
      : `[Portofolio] Pesan Baru dari ${name.trim()}`;

    // Clean text and HTML version
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject?.trim() || 'Tidak ada subjek';
    const cleanMessage = message.trim();

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 24px; }
            .card { max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #0ea5e9, #3b82f6); padding: 24px; text-align: left; }
            .header h1 { margin: 0; font-size: 20px; color: #ffffff; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0; font-size: 13px; color: #e0f2fe; }
            .content { padding: 28px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 6px; }
            .value { font-size: 15px; color: #f8fafc; font-weight: 500; }
            .message-box { background-color: #1e293b; border-left: 4px solid #38bdf8; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #f1f5f9; white-space: pre-wrap; }
            .footer { padding: 18px 28px; border-top: 1px solid #1f2937; background-color: #0f172a; text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Pesan Kontak Baru</h1>
              <p>Diterima melalui formulir kontak oscartambunan.dev</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Pengirim</div>
                <div class="value">${cleanName} &lt;<a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>&gt;</div>
              </div>
              <div class="field">
                <div class="label">Subjek</div>
                <div class="value">${cleanSubject}</div>
              </div>
              <div class="field">
                <div class="label">Isi Pesan</div>
                <div class="message-box">${cleanMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
              </div>
            </div>
            <div class="footer">
              Email ini dikirim otomatis oleh sistem kontak oscartambunan.dev via Resend.
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Send via Resend API
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: cleanEmail,
        subject: emailSubject,
        html: htmlContent,
        text: `Nama: ${cleanName}\nEmail: ${cleanEmail}\nSubjek: ${cleanSubject}\n\nPesan:\n${cleanMessage}`,
      }),
    });

    const data = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Resend API error:', data);
      return NextResponse.json(
        {
          success: false,
          error: data?.message || 'Gagal mengirim pesan melalui provider email.',
        },
        { status: resendRes.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Pesan Anda berhasil terkirim ke Oscar Tambunan!',
      id: data.id,
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan sistem saat memproses pesan.' },
      { status: 500 }
    );
  }
}
