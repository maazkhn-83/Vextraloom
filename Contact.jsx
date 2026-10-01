import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import Watermark from '../components/Watermark.jsx';
import Icon from '../components/Icons.jsx';
import { Reveal, HeadlineReveal } from '../components/Reveal.jsx';
import { SOCIALS } from '../config/site.js';

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '', hp: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.phone.trim() && !/^[+()\d\s-]{7,25}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.';
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.';
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState('');

  const set = (k) => (e) => { setValues((v) => ({ ...v, [k]: e.target.value })); if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined })); };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('loading'); setServerMsg('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
      setStatus('success'); setValues(EMPTY);
    } catch (err) {
      setServerMsg(err.message || 'We could not send your message. Please try again or use WhatsApp.');
      setStatus('error');
    }
  };

  const field = (k, label, props = {}) => (
    <div className={`field ${errors[k] ? 'has-err' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}</label>
      {props.area
        ? <textarea id={`f-${k}`} rows={6} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} maxLength={3000} />
        : <input id={`f-${k}`} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} />}
      {errors[k] && <span className="err" id={`e-${k}`} role="alert">{errors[k]}</span>}
    </div>
  );

  return (
    <div className="page page-contact">
      <Seo title="Contact" description="Contact VEXTRALOOM: send a message, email us or chat on WhatsApp to start your website, branding, marketing or automation project." />
      <Watermark count={10} />
      <section className="page-top">
        <div className="container">
          <p className="crumb">Contact</p>
          <h1 className="display"><HeadlineReveal delay={0.1} parts={[{ t: 'Tell us what you' }, { t: 'want to build.', g: true }]} /></h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            Send a message and we will reply by email, or reach us directly on WhatsApp for a faster conversation.
          </motion.p>
        </div>
      </section>

      <section className="section tight">
        <div className="container contact-grid">
          <Reveal className="contact-cards">
            <h2 className="h3">Reach us directly</h2>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.key}>
                  <a className="c-card" href={s.href} {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <span className="box-ico"><Icon name={s.icon} size={22} /></span>
                    <span><strong>{s.label}</strong><small>{s.handle}</small></span>
                    <Icon name="arrowUpRight" size={18} className="c-go" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="form-wrap" delay={0.1}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="ok" className="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} role="status">
                  <svg viewBox="0 0 80 80" width="96" height="96" aria-hidden="true">
                    <motion.circle cx="40" cy="40" r="34" fill="none" stroke="url(#vl-grad)" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                    <motion.path d="M25 41l10 10 21-22" fill="none" stroke="url(#vl-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.7 }} />
                  </svg>
                  <h2 className="h3">Message sent</h2>
                  <p>Thank you for reaching out. We will get back to you soon.</p>
                  <button className="btn btn-ghost" onClick={() => setStatus('idle')}><span>Send another message</span></button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Contact form">
                  <div className="row">{field('name', 'Name', { autoComplete: 'name' })}{field('email', 'Email', { type: 'email', autoComplete: 'email' })}</div>
                  <div className="row">{field('phone', 'Phone (optional)', { type: 'tel', autoComplete: 'tel' })}{field('subject', 'Subject')}</div>
                  {field('message', 'Message', { area: true })}
                  <div className="hp" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" value={values.hp} onChange={set('hp')} /></label></div>
                  {status === 'error' && <p className="form-err" role="alert">{serverMsg}</p>}
                  <button className="btn btn-primary btn-block" type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? <><span className="spin" aria-hidden="true" /><span>Sending...</span></> : <><span>Send message</span><Icon name="arrow" size={18} /></>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
