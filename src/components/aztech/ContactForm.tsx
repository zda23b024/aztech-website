'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import { contacts } from '@/data/company';

const initialForm = {
  name: '',
  email: '',
  topic: 'General inquiry',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const recipients = useMemo(() => contacts.map((contact) => contact.email).join(','), []);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Aztech ${form.topic}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Topic: ${form.topic}`,
      '',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="brand-card grid gap-4 rounded-lg p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#071B46]">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="rounded-md border border-[#DCE7F5] bg-white px-3 py-3 text-[#071B46] outline-none transition focus:border-[#087CFF] focus:ring-2 focus:ring-[#087CFF]/25"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#071B46]">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="rounded-md border border-[#DCE7F5] bg-white px-3 py-3 text-[#071B46] outline-none transition focus:border-[#087CFF] focus:ring-2 focus:ring-[#087CFF]/25"
            placeholder="Your email address"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#071B46]">
        Topic
        <select
          value={form.topic}
          onChange={(event) => updateField('topic', event.target.value)}
          className="rounded-md border border-[#DCE7F5] bg-white px-3 py-3 text-[#071B46] outline-none transition focus:border-[#087CFF] focus:ring-2 focus:ring-[#087CFF]/25"
        >
          <option>General inquiry</option>
          <option>Partnerships</option>
          <option>Projects</option>
          <option>Research collaboration</option>
          <option>Careers</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#071B46]">
        Message
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="min-h-36 rounded-md border border-[#DCE7F5] bg-white px-3 py-3 text-[#071B46] outline-none transition focus:border-[#087CFF] focus:ring-2 focus:ring-[#087CFF]/25"
          placeholder="Tell us what you want to build."
        />
      </label>
      <button type="submit" className="brand-gradient inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-bold text-white shadow-[0_14px_30px_rgba(8,124,255,0.18)] transition hover:bg-[#071B46] hover:bg-none focus:outline-none focus:ring-2 focus:ring-[#087CFF]">
        Send Message <Send size={18} aria-hidden />
      </button>
      <p className="text-xs leading-5 text-[#64748B]">
        This opens your email app with both Aztech contacts already added.
      </p>
    </form>
  );
}
