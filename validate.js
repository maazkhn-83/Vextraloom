// Strip control characters and HTML tags, trim, and cap length.
const clean = (value, max, { multiline = false } = {}) => {
  let v = String(value ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').replace(/<[^>]*>/g, '');
  if (!multiline) v = v.replace(/[\r\n]+/g, ' ');
  return v.trim().slice(0, max);
};

export function validateContact(body = {}) {
  const data = {
    name: clean(body.name, 80),
    email: clean(body.email, 120).toLowerCase(),
    phone: clean(body.phone, 25),
    subject: clean(body.subject, 120),
    message: clean(body.message, 3000, { multiline: true }),
  };
  const errors = {};
  if (data.name.length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (data.phone && !/^[+()\d\s-]{7,25}$/.test(data.phone)) errors.phone = 'Please enter a valid phone number.';
  if (data.subject.length < 3) errors.subject = 'Please add a short subject.';
  if (data.message.length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
  return { data, errors: Object.keys(errors).length ? errors : null };
}
