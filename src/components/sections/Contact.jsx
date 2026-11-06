import { useState } from 'react';
import { Send } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import SocialIcons from '../ui/SocialIcons';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const inputClass =
  'min-h-11 w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-ink outline-none transition-colors focus:border-accent';

async function sendMessage(fields) {
  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: siteConfig.web3formsKey, subject: `Portafolio — ${fields.name}`, ...fields }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result.message || 'Request failed');
}

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // Honeypot: bots fill the hidden field; pretend success and drop the message.
    if (data.get('botcheck')) {
      setStatus('sent');
      return;
    }
    const fields = { name: data.get('name'), email: data.get('email'), message: data.get('message') };

    if (!siteConfig.web3formsKey) {
      const body = encodeURIComponent(`${fields.message}\n\n— ${fields.name} (${fields.email})`);
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Portafolio — ${fields.name}`)}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      await sendMessage(fields);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle eyebrow={t('contact_eyebrow')} title={t('contact_title')} intro={t('contact_intro')} />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-5">
            <a href={`mailto:${siteConfig.email}`} className="w-fit font-display text-2xl font-semibold text-accent hover:underline">
              {siteConfig.email}
            </a>
            <SocialIcons />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur">
            <label className="flex flex-col gap-1.5 text-sm text-muted">
              {t('form_name')}
              <input name="name" type="text" required maxLength={100} autoComplete="name" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted">
              {t('form_email')}
              <input name="email" type="email" required maxLength={150} autoComplete="email" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted">
              {t('form_message')}
              <textarea name="message" required rows={5} maxLength={2000} className={`${inputClass} resize-y`} />
            </label>
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 font-semibold text-onaccent transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={16} aria-hidden="true" /> {status === 'sending' ? t('form_sending') : t('form_send')}
            </button>
            <p role="status" aria-live="polite" className={`min-h-5 text-sm ${status === 'error' ? 'text-red-500' : 'text-accent'}`}>
              {status === 'sent' && t('form_sent')}
              {status === 'error' && t('form_error')}
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
