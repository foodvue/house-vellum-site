'use client';

import { useState } from 'react';

type NotifyFormProps = {
  productName: string;
  variant?: 'light' | 'dark';
};

export default function NotifyForm({ productName, variant = 'light' }: NotifyFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // TODO: wire up to ConvertKit / Klaviyo when stack is chosen.
    // For now: pretend success and log locally so the form feels alive.
    await new Promise((r) => setTimeout(r, 600));
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('hv-notify') || '[]');
      existing.push({ email, productName, at: new Date().toISOString() });
      localStorage.setItem('hv-notify', JSON.stringify(existing));
    }
    setStatus('sent');
  }

  const isDark = variant === 'dark';
  const inputCls = isDark
    ? 'bg-transparent border-cream/30 text-cream placeholder:text-cream/40 focus:border-cream'
    : 'bg-transparent border-ink/20 text-ink placeholder:text-ink/40 focus:border-oxblood';
  const btnCls = isDark
    ? 'border-cream text-cream hover:bg-cream hover:text-ink'
    : 'border-oxblood text-oxblood hover:bg-oxblood hover:text-cream';
  const subtleCls = isDark ? 'text-cream/60' : 'text-ink/60';

  if (status === 'sent') {
    return (
      <div className={`text-sm ${subtleCls} font-serif italic leading-relaxed`}>
        Thank you. We will write to you when {productName} is ready.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className={`text-xs tracking-[0.25em] uppercase ${subtleCls}`}>
        Notify me when available
      </label>
      <div className="flex gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 border-b ${inputCls} py-2 px-1 outline-none transition-colors text-sm`}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`border ${btnCls} text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-colors disabled:opacity-50`}
        >
          {status === 'submitting' ? 'Sending…' : 'Notify'}
        </button>
      </div>
    </form>
  );
}
