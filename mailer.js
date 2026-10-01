import nodemailer from 'nodemailer';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let transporter;
function getTransporter() {
  if (transporter) return transporter;
  const user = process.env.EMAIL_USER;
  const pass = (process.env.EMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  if (!user || !pass) throw new Error('EMAIL_USER / EMAIL_APP_PASSWORD are not set');
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  return transporter;
}

export async function sendContactEmail(d) {
  const tx = getTransporter();
  const to = process.env.EMAIL_TO || 'vextraloomhello@gmail.com';
  const row = (label, value) =>
    `<tr><td style="padding:10px 0;width:110px;color:#6b6b85;font-size:13px;vertical-align:top">${label}</td><td style="padding:10px 0;color:#14142b;font-size:15px">${value}</td></tr>`;
  const html = `<!doctype html><html><body style="margin:0;background:#f3f3fa;padding:24px;font-family:Segoe UI,Arial,sans-serif">
  <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden">
    <tr><td style="background:linear-gradient(90deg,#7B00FF,#3B00E4,#00A2FF);background-color:#3B00E4;padding:22px 28px;color:#fff;font-size:18px;font-weight:700;letter-spacing:.5px">VEXTRALOOM &middot; New website enquiry</td></tr>
    <tr><td style="padding:22px 28px">
      <table role="presentation" width="100%" style="border-collapse:collapse">
        ${row('Name', esc(d.name))}
        ${row('Email', `<a href="mailto:${esc(d.email)}" style="color:#3B00E4">${esc(d.email)}</a>`)}
        ${row('Phone', d.phone ? esc(d.phone) : '<span style="color:#9a9ab5">not provided</span>')}
        ${row('Subject', esc(d.subject))}
      </table>
      <div style="margin-top:14px;padding:16px;background:#f6f6fd;border-left:3px solid #7B00FF;border-radius:6px;color:#14142b;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(d.message)}</div>
      <p style="margin:18px 0 0;color:#8a8aa3;font-size:12px">Reply directly to this email to answer ${esc(d.name)}.</p>
    </td></tr>
  </table></body></html>`;
  const text = `New enquiry from the VEXTRALOOM website\n\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || '-'}\nSubject: ${d.subject}\n\n${d.message}\n`;
  return tx.sendMail({
    from: `"VEXTRALOOM Website" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: { name: d.name.replace(/["<>]/g, ''), address: d.email },
    subject: `[VEXTRALOOM] ${d.subject}`,
    text,
    html,
  });
}
