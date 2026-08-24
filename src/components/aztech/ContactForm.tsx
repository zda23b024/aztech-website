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
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-950 outline-none focus:ring-2 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-950 outline-none focus:ring-2 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
            placeholder="Your email address"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Topic
        <select
          value={form.topic}
          onChange={(event) => updateField('topic', event.target.value)}
          className="rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-950 outline-none focus:ring-2 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
        >
          <option>General inquiry</option>
          <option>Partnerships</option>
          <option>Projects</option>
          <option>Research collaboration</option>
          <option>Careers</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Message
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="min-h-36 rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-950 outline-none focus:ring-2 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
          placeholder="Tell us what you want to build."
        />
      </label>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
        Send Message <Send size={18} aria-hidden />
      </button>
      <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
        This opens your email app with both Aztech contacts already added.
      </p>
    </form>
  );
}
