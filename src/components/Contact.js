import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validate() {
    return form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus({ ok: false, msg: 'Please fill name, valid email and a message.' });
      return;
    }
    // No SMTP/server: open mailto fallback
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:REPLACE_ME_EMAIL?subject=${subject}&body=${body}`;
    setStatus({ ok: true, msg: 'Opening your mail client...' });
  }

  return (
    <section id="contact" className="py-12 reveal">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="p-4 border rounded-lg">
          <label className="block mb-2 text-sm">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />

          <label className="block mb-2 text-sm">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />

          <label className="block mb-2 text-sm">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full mb-3 p-2 border rounded h-28" />

          <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded">Send</button>
          {status && <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>}
        </form>

        <div className="p-4">
          <h4 className="font-semibold">Reach out</h4>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Email: <a href="mailto:REPLACE_ME_EMAIL" className="underline">REPLACE_ME_EMAIL</a></p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">GitHub: <a href="REPLACE_ME_GITHUB" target="_blank" rel="noreferrer" className="underline">REPLACE_ME_GITHUB</a></p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">LinkedIn: <a href="REPLACE_ME_LINKEDIN" target="_blank" rel="noreferrer" className="underline">REPLACE_ME_LINKEDIN</a></p>
          <div className="mt-6">
            <p className="text-sm text-gray-500">Note: This form uses <strong>mailto</strong> fallback. If you deploy a server later, you can replace the submission logic in <code>src/components/Contact.js</code>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
